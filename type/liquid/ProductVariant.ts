import { FeaturedVariantImage } from './FeaturedVariantImage';
import { FeaturedVariantMedia } from './FeaturedVariantMedia';

export type ProductVariant = {
  id: number;
  title: string;
  option1: string;
  option2: string | null;
  option3: string | null;
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
};
