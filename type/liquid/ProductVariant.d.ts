import type { FeaturedVariantImage } from './FeaturedVariantImage';
import type { FeaturedVariantMedia } from './FeaturedVariantMedia';

export type ProductVariant = {
  id: number;
  title: string;
  sku: string | null;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image?: FeaturedVariantImage;
  featured_media?: FeaturedVariantMedia;
  available: boolean;
  name: string;
  public_title: string | null;
  options: Array<string>;
  price: number;
  weight: number;
  compare_at_price: number | null;
  inventory_management: string;
  barcode: string | null;
  quantity_rule: {
    increment: number;
    max: number | null;
    min: number;
  };

  // Deprecated properties
  /** @deprecated Prefer to use options instead. */
  option1: string | null;
  /** @deprecated Prefer to use options instead. */
  option2: string | null;
  /** @deprecated Prefer to use options instead. */
  option3: string | null;
};
