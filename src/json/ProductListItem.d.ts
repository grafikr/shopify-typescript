/**
 * A slimmer shape than `/products/[handle].json`: `tags` is an array here, and
 * options, images and variants carry fewer fields. Also the item type of
 * `/collections/[handle]/products.json`.
 *
 * /products.json
 */
export type ProductListItem = {
  id: number;
  title: string;
  handle: string;
  body_html: string | null;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: Array<string>;
  variants: Array<ProductListVariant>;
  images: Array<ProductListImage>;
  options: Array<{ name: string; position: number; values: Array<string> }>;
};

/**
 * /products.json
 */
export type ProductListVariant = {
  id: number;
  product_id: number;
  title: string;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  sku: string | null;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: ProductListImage | null;
  available: boolean;
  price: string;
  grams: number;
  compare_at_price: string | null;
  position: number;
  created_at: string;
  updated_at: string;
};

/**
 * /products.json
 */
export type ProductListImage = {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: string | null;
  width: number;
  height: number;
  src: string;
  variant_ids: Array<number>;
};
