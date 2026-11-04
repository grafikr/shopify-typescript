/**
 * /products/[handle].oembed
 */
export type ProductOembed = {
  product_id: string;
  title: string;
  description: string | null;
  brand: string;
  offers: Array<{
    title: string;
    offer_id: number;
    sku: string | null;
    /** Decimal number, not cents. */
    price: number;
    currency_code: string;
    in_stock: boolean;
  }>;
  url: string;
  provider: string;
  version: string;
  type: string;
};
