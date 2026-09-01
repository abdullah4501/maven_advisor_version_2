import { useEffect } from "react"

const DEFAULT_SITE_URL = "https://new.mavensadvisor.com"
const DEFAULT_SOCIAL_IMAGE = "/meta_cover.png"

type PageMetaOptions = {
  canonicalPath?: string | false
  image?: string
  noIndex?: boolean
  type?: "website" | "article"
}

const getSiteUrl = () => (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "")

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!meta) {
    meta = document.createElement("meta")
    meta.setAttribute(attribute, key)
    document.head.appendChild(meta)
  }

  meta.content = content
}

function setCanonical(url: string | false) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (url === false) {
    existing?.remove()
    return
  }

  const canonical = existing || document.createElement("link")
  canonical.rel = "canonical"
  canonical.href = url
  if (!existing) document.head.appendChild(canonical)
}

export function usePageMeta(title: string, description: string, options: PageMetaOptions = {}) {
  useEffect(() => {
    const siteUrl = getSiteUrl()
    const canonicalPath = options.canonicalPath ?? window.location.pathname
    const activePath = canonicalPath === false ? window.location.pathname : canonicalPath
    const pageUrl = `${siteUrl}${activePath === "/" ? "/" : `/${activePath.replace(/^\/+|\/+$/g, "")}`}`
    const canonicalUrl = canonicalPath === false ? false : pageUrl
    const socialImage = options.image
      ? new URL(options.image, `${siteUrl}/`).toString()
      : `${siteUrl}${DEFAULT_SOCIAL_IMAGE}`

    document.title = title
    setCanonical(canonicalUrl)

    setMeta("name", "description", description)
    setMeta("name", "robots", options.noIndex ? "noindex, nofollow" : "index, follow")

    setMeta("property", "og:title", title)
    setMeta("property", "og:description", description)
    setMeta("property", "og:type", options.type || "website")
    setMeta("property", "og:site_name", "Mavens Advisor")
    setMeta("property", "og:locale", "en_GB")
    setMeta("property", "og:image", socialImage)
    setMeta("property", "og:image:alt", "Mavens Advisor")
    setMeta("property", "og:url", pageUrl)

    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", title)
    setMeta("name", "twitter:description", description)
    setMeta("name", "twitter:image", socialImage)
    setMeta("name", "twitter:image:alt", "Mavens Advisor")
  }, [title, description, options.canonicalPath, options.image, options.noIndex, options.type])
}
