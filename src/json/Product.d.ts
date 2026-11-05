/**
 * Nested in `/products/[handle].json`. Returned as `{ product_variant: ProductVariant }` by
 * `/variants/[id].json`.
 *
 * @http GET /variants/[id].json
 */
export type ProductVariant = {
  id: number;
  product_id: number;
  title: string;
  /**
   * @unit currency
   * @format decimal-string
   */
  price: string;
  sku: string | null;
  position: number;
  /**
   * Empty string (not null) when unset.
   *
   * @unit currency
   * @format decimal-string
   */
  compare_at_price: string | null;
  fulfillment_service: string;
  inventory_management: string | null;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string | null;
  /** @unit grams */
  grams: number;
  image_id: number | null;
  /** @unit `weight_unit` */
  weight: number;
  weight_unit: 'g' | 'kg' | 'lb' | 'oz';
  requires_shipping: boolean;
  quantity_rule: { min: number; max: number | null; increment: number };
  price_currency: string;
  compare_at_price_currency?: string;
  quantity_price_breaks: Array<unknown>;
  unit_price?: string;
  unit_price_measurement?: {
    measured_type: string;
    quantity_value: string;
    quantity_unit: string;
    reference_value: number;
    reference_unit: string;
  };

  /** @deprecated Prefer to use options instead. */
  option1: string | null;
  /** @deprecated Prefer to use options instead. */
  option2: string | null;
  /** @deprecated Prefer to use options instead. */
  option3: string | null;
};

/** @http GET /products/[handle].json */
export type ProductOption = {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: Array<string>;
};

/** @http GET /products/[handle].json */
export type ProductImage = {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt: string | null;
  width: number;
  height: number;
  src: string;
  variant_ids: Array<number>;
};

/**
 * Returned as `{ product: Product }`.
 *
 * @http GET /products/[handle].json
 */
export type Product = {
  id: number;
  title: string;
  body_html: string | null;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  /** Comma separated, unlike the array in `.js` and Liquid. */
  tags: string;
  variants: Array<ProductVariant>;
  options: Array<ProductOption>;
  images: Array<ProductImage>;
  image: ProductImage | null;
};
