import type { SearchItem } from './SearchItem';
import type { FeaturedImage } from '../FeaturedImage';

export type Collection = SearchItem & {
  published_at: string;
  featured_image: FeaturedImage;
};
