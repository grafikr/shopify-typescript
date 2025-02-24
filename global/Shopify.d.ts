import type { Analytics } from './modules/analytics';
import type { CustomerPrivacy } from './modules/customerPrivacy';

export type Shopify = {
  analytics: Analytics;
  loadFeatures: (
    features: Array<{ name: string; version: string }>,
    callback: (error?: Error | null) => void,
  ) => void;
  customerPrivacy?: CustomerPrivacy;
  currency: {
    active: string;
    rate: string;
  };
  cdnHost: string;
  country: string;
  designMode: true | undefined;
  locale: string;
  shop: string;
  recaptchaV3: {
    siteKey: string;
  };
  routes: {
    root: string;
  };
};
