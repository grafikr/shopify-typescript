import type { CustomerPrivacy } from './modules/customerPrivacy';

export type Shopify = {
  loadFeatures: (
    features: Array<{ name: string; version: string }>,
    callback: CallableFunction,
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
