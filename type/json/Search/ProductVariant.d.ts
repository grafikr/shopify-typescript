import type { FeaturedImage } from '../FeaturedImage';

export type ProductVariant = {
  available: true;
  compare_at_price: string | null;
  id: number;
  image: string | null;
  price: string;
  title: string;
  url: string;
  featured_image: FeaturedImage;
};
