import type { Analytics } from './modules/analytics';
import type { CustomerPrivacy } from './modules/customerPrivacy';

/**
 * `window.Shopify`. Members marked optional were not present on a plain
 * storefront page when this was verified, and only exist in some contexts.
 */
export type Shopify = {
  /** The myshopify.com domain, e.g. `my-store.myshopify.com` */
  shop: string;
  locale: string;
  /** ISO country code of the active market (not necessarily the shop country). */
  country: string;
  currency: {
    active: string;
    rate: string;
  };
  cdnHost: string;
  routes: {
    root: string;
  };
  theme: {
    name: string;
    id: number;
    schema_name: string | null;
    schema_version: string | null;
    theme_store_id: number | null;
    role: string;
    handle: string;
    style: { id: number | null; handle: string | null };
  };
  analytics: Analytics;
  loadFeatures: (
    features: Array<{ name: string; version: string }>,
    callback: (error?: Error | null) => void,
  ) => void;
  autoloadFeatures: (...args: Array<unknown>) => void;
  shopJsCdnBaseUrl: string;
  featureAssets: Record<string, Record<string, Array<string>>>;

  /** `true` while previewing an unpublished theme. */
  previewMode?: boolean;
  /** Only `true` inside the theme editor. */
  designMode?: true;
  customerPrivacy?: CustomerPrivacy;
  /** @deprecated Not present on current storefronts. Kept for older themes. */
  recaptchaV3?: {
    siteKey: string;
  };
};
