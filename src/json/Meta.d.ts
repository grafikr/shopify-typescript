/**
 * /meta.json
 */
export type Meta = {
  id: number;
  name: string;
  country: string;
  currency: string;
  domain: string;
  url: string;
  myshopify_domain: string;
  description: string | null;
  ships_to_countries: Array<string>;
  money_format: string;
  published_collections_count: number;
  published_products_count: number;
  shopify_pay_enabled_card_brands: Array<string>;
  offers_shop_pay_installments: boolean;
};
