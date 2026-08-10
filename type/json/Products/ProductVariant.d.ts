import type { ProductImage } from '../ProductImage';

export type ProductVariant = {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string | null;
  position: number;
  compare_at_price: string | null;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  grams: number;
  available: boolean;
  requires_shipping: boolean;
  featured_image: ProductImage | null;
  /** @deprecated */
  option1: string | null;
  /** @deprecated */
  option2: string | null;
  /** @deprecated */
  option3: string | null;
};
