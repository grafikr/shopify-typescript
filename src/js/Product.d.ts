/**
 * Prices are integers in the smallest currency unit (cents).
 *
 * /variants/[id].js
 */
export type ProductVariant = {
  id: number;
  title: string;
  sku: string | null;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: ProductVariantImage | null;
  /** Missing when the variant has no media. */
  featured_media?: ProductVariantMedia | null;
  available: boolean;
  name: string;
  public_title: string | null;
  options: Array<string>;
  price: number;
  weight: number;
  compare_at_price: number | null;
  inventory_management: string | null;
  barcode: string | null;
  quantity_rule: { min: number; max: number | null; increment: number };
  quantity_price_breaks: Array<{ minimum_quantity: number; price: number }>;
  requires_selling_plan: boolean;
  selling_plan_allocations: Array<unknown>;
  unit_price?: number;
  unit_price_measurement?: {
    measured_type: string;
    quantity_value: string;
    quantity_unit: string;
    reference_value: number;
    reference_unit: string;
  };

  // Deprecated properties
  /** @deprecated Prefer to use options instead. */
  option1: string | null;
  /** @deprecated Prefer to use options instead. */
  option2: string | null;
  /** @deprecated Prefer to use options instead. */
  option3: string | null;
};

/**
 * /products/[handle].js
 */
export type ProductVariantImage = {
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
 * Slimmer than `ProductMedia`.
 *
 * /products/[handle].js
 */
export type ProductVariantMedia = {
  id: number;
  position: number;
  alt: string | null;
  preview_image: {
    aspect_ratio: number;
    height: number;
    width: number;
    src: string;
  };
};

/**
 * /products/[handle].js
 */
export type ProductOption = {
  name: string;
  position: number;
  values: Array<string>;
};

/**
 * /products/[handle].js
 */
export type ProductMedia = {
  id: number;
  position: number;
  alt: string | null;
  aspect_ratio: number;
  height: number;
  width: number;
  media_type: 'image' | 'video' | 'external_video' | 'model';
  src: string;
  preview_image: {
    aspect_ratio: number;
    height: number;
    width: number;
    src: string;
  };
};

/**
 * Prices are integers in the smallest currency unit (cents).
 * Also the item type of `/recommendations/products.json`.
 *
 * /products/[handle].js
 */
export type Product = {
  id: number;
  title: string;
  handle: string;
  description: string | null;
  published_at: string;
  created_at: string;
  vendor: string;
  type: string;
  tags: Array<string>;
  price: number;
  price_min: number;
  price_max: number;
  available: boolean;
  price_varies: boolean;
  compare_at_price: number | null;
  compare_at_price_min: number;
  compare_at_price_max: number;
  compare_at_price_varies: boolean;
  variants: Array<ProductVariant>;
  images: Array<string>;
  featured_image: string | null;
  options: Array<ProductOption>;
  url: string;
  /** Missing entirely (not empty) when the product has no media. */
  media?: Array<ProductMedia>;
  requires_selling_plan: boolean;
  selling_plan_groups: Array<unknown>;
};
