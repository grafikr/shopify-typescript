import type { FeaturedImage } from '../FeaturedImage';
import type { SearchItem } from './SearchItem';

export type Collection = SearchItem & {
  published_at: string;
  featured_image: FeaturedImage;
};
