import type { FeaturedImage } from '../FeaturedImage';
import type { SearchItem } from './SearchItem';

export type Article = SearchItem & {
  author: string;
  image: string | null;
  published_at: string;
  summary_html: string;
  tags: Array<string>;
  featured_image: FeaturedImage;
};
