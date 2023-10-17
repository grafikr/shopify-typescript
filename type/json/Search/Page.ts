import { SearchItem } from './SearchItem';

export type Page = SearchItem & {
  author: null;
  published_at: string;
};
