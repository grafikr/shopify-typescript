import type { FeaturedImage } from '../FeaturedImage';
import type { SearchItem } from './SearchItem';
import type { ProductVariant } from './ProductVariant';

export type Product = SearchItem & {
  available: boolean;
  compare_at_price_max: string;
  compare_at_price_min: string;
  image: string | null;
  price: string;
  price_max: string;
  price_min: string;
  tags: Array<string>;
  type: string;
  variants: Array<ProductVariant>;
  vendor: string;
  featured_image: FeaturedImage;
};
