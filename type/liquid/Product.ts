import Variant from './Variant';
import { Media } from './Media';

export type Product = {
  id: number;
  title: string;
  handle: string;
  description: string;
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
  compare_at_price: string | null;
  compare_at_price_min: number;
  compare_at_price_max: number;
  compare_at_price_varies: boolean;
  variants: Array<Variant>;
  images: Array<string>;
  featured_image: string | null;
  options: Array<string>;
  media: Array<Media>;
  content: string;
};
