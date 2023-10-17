import { SearchItem } from './SearchItem';
import { FeaturedImage } from '../FeaturedImage';

export type Collection = SearchItem & {
  published_at: string;
  featured_image: FeaturedImage;
};
