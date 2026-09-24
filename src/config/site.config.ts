export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "SXM Immo — Immobilier Saint-Martin & Sint Maarten : Terres Basses, Orient Bay, Simpson Bay",
  siteName: "sxm-immo.com",
  domain: "sxm-immo.com",
  url: "https://sxm-immo.com",
  siteUrl: "https://sxm-immo.com",
  description: "Portail immobilier de référence pour l'île binationale de Saint-Martin (partie française) et Sint Maarten (côté néerlandais) : domaines d'exception aux Terres Basses, résidences de plage à Orient Bay, condos marina à Simpson Bay et conseil juridique d'acquisition.",
  siteDescription: "Portail immobilier de référence pour l'île binationale de Saint-Martin (partie française) et Sint Maarten (côté néerlandais) : domaines d'exception aux Terres Basses, résidences de plage à Orient Bay, condos marina à Simpson Bay et conseil juridique d'acquisition.",
  defaultAuthor: "L'Équipe SXM Immo",
  repo: "jc842/sxm-immo",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-williamsburg",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    colorScheme: "orange",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "67",
    containerId: "uZgVErGZ",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 728, format: "mobileBanner" },
      inContent: { zoneId: 727, format: "mediumRectangle" },
      header: { zoneId: 726, format: "leaderboard" },
      halfPage: { zoneId: 724, format: "halfPage" },
      largeRectangle: { zoneId: 725, format: "largeRectangle" },
      skyscraper: { zoneId: 729, format: "skyscraper" },
    },
  },

  legal: {
    editor: "SXM Immo Publications",
    address: "Rue de la République, Marigot, 97150 Saint-Martin",
    contactEmail: "contact@sxm-immo.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "terres-basses", label: "Terres Basses & Domaines Sécurisés" },
    { id: "baie-orientale", label: "Orient Bay & Côte Est" },
    { id: "sint-maarten", label: "Sint Maarten & Simpson Bay" },
    { id: "droit-fiscalite", label: "Droit Binationale & Notaires" },
  ],
};
