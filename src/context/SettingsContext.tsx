import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Service {
  id: string;
  name: string;
  minutesPerJob: number;
}

export interface FixedPriceService {
  id: string;
  name: string;
  price: number;
}

interface Settings {
  services: Service[];
  fixedPriceServices: FixedPriceService[];
  hourlyRate: number;
  currency: string;
  companyName: string;
  defaultQuantities: Record<string, number>;
  strategicAdviceRate: number;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>, sync?: boolean) => void;
  addService: (name: string, minutesPerJob: number, sync?: boolean) => void;
  updateService: (id: string, updates: Partial<Omit<Service, 'id'>>, sync?: boolean) => void;
  removeService: (id: string, sync?: boolean) => void;
  addFixedPriceService: (name: string, price: number, sync?: boolean) => void;
  updateFixedPriceService: (id: string, updates: Partial<Omit<FixedPriceService, 'id'>>, sync?: boolean) => void;
  removeFixedPriceService: (id: string, sync?: boolean) => void;
  isSyncing: boolean;
}

const defaultServices: Service[] = [
  { id: "1", name: "Monthly Bookkeeping", minutesPerJob: 1 },
  { id: "2", name: "Monthly Payroll Management", minutesPerJob: 60 },
  { id: "3", name: "Monthly Contractor Payments Management", minutesPerJob: 30 },
  { id: "4", name: "Monthly Invoicing", minutesPerJob: 10 },
  { id: "5", name: "Monthly Billing", minutesPerJob: 10 },
  { id: "6", name: "Monthly Accounts Payable Management", minutesPerJob: 15 },
  { id: "7", name: "Monthly Receivable Management", minutesPerJob: 15 },
  { id: "8", name: "Strategic Financial Advice", minutesPerJob: 60 },
];

const defaultFixedPriceServices: FixedPriceService[] = [
  { id: "fp1", name: "Chart of Accounts Setup (For New Books)", price: 300 },
  { id: "fp2", name: "HMRC and Companies House Joint Filing", price: 300 },
  { id: "fp4", name: "Monthly Financial Performance Analysis", price: 50 },
  { id: "fp5", name: "Monthly Cash Flow Forecasting", price: 50 },
  { id: "fp6", name: "Monthly Budgeting", price: 50 },
  { id: "fp7", name: "Monthly Profit and Loss Reporting", price: 50 },
  { id: "fp8", name: "VAT Filling", price: 17 },
];

const defaultSettings: Settings = {
  services: defaultServices,
  fixedPriceServices: defaultFixedPriceServices,
  hourlyRate: 20,
  currency: '$',
  companyName: 'Yalla Startup',
  defaultQuantities: {},
  strategicAdviceRate: 100,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isSyncing, setIsSyncing] = useState(false);

  // Load from localStorage initially for fast start, but always fetch fresh
  React.useEffect(() => {
    const saved = localStorage.getItem('serviceCalculatorSettings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        console.log("[SETTINGS] Loaded from cache, rate:", parsed.strategicAdviceRate);
      } catch (e) {
        console.error("Error loading local settings", e);
      }
    }
    // Always fetch fresh from server
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/';
      // Use a timestamp to force a fresh request every time
      const url = `${baseUrl.replace(/\/$/, '')}/api/settings?t=${Date.now()}`;
      console.log(`[SETTINGS] Fetching fresh data from: ${url}`);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data?.settings) {
          const s = data.data.settings;
          console.log(`[SETTINGS] Fresh data received. Strategic Rate: ${s.strategicAdviceRate}`);
          setSettings(s);
          localStorage.setItem('serviceCalculatorSettings', JSON.stringify(s));
        }
      }
    } catch (error) {
      console.error("[SETTINGS] Error fetching settings:", error);
    }
  };

  const syncWithServer = async (newSettings: Settings) => {
    setIsSyncing(true);
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/';
      const response = await fetch(`${baseUrl.replace(/\/$/, '')}/api/settings/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ settings: newSettings }),
      });

      if (!response.ok) throw new Error("Sync failed");

    } catch (error) {
      console.error("Failed to sync settings with server", error);
    } finally {
      setIsSyncing(false);
    }
  };

  const saveSettings = (newSettings: Settings, sync = false) => {
    localStorage.setItem('serviceCalculatorSettings', JSON.stringify(newSettings));
    setSettings(newSettings);
    if (sync) {
      syncWithServer(newSettings);
    }
  };

  const updateSettings = (newSettings: Partial<Settings>, sync = false) => {
    saveSettings({ ...settings, ...newSettings }, sync);
  };

  const addService = (name: string, minutesPerJob: number, sync = false) => {
    const newService: Service = {
      id: Date.now().toString(),
      name,
      minutesPerJob,
    };
    saveSettings({
      ...settings,
      services: [...settings.services, newService],
    }, sync);
  };

  const updateService = (id: string, updates: Partial<Omit<Service, 'id'>>, sync = false) => {
    saveSettings({
      ...settings,
      services: settings.services.map((s) =>
        s.id === id ? { ...s, ...updates } : s
      ),
    }, sync);
  };

  const removeService = (id: string, sync = false) => {
    saveSettings({
      ...settings,
      services: settings.services.filter((s) => s.id !== id),
    }, sync);
  };

  const addFixedPriceService = (name: string, price: number, sync = false) => {
    const newService: FixedPriceService = {
      id: `fp${Date.now()}`,
      name,
      price,
    };
    saveSettings({
      ...settings,
      fixedPriceServices: [...settings.fixedPriceServices, newService],
    }, sync);
  };

  const updateFixedPriceService = (id: string, updates: Partial<Omit<FixedPriceService, 'id'>>, sync = false) => {
    saveSettings({
      ...settings,
      fixedPriceServices: settings.fixedPriceServices.map((s) =>
        s.id === id ? { ...s, ...updates } : s
      ),
    }, sync);
  };

  const removeFixedPriceService = (id: string, sync = false) => {
    saveSettings({
      ...settings,
      fixedPriceServices: settings.fixedPriceServices.filter((s) => s.id !== id),
    }, sync);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        addService,
        updateService,
        removeService,
        addFixedPriceService,
        updateFixedPriceService,
        removeFixedPriceService,
        isSyncing
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};