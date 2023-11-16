import type { Image } from './Image';

export type Collection = {
  id: number;
  title: string;
  handle: string;
  description: string;
  published_at: string;
  updated_at: string;
  image: Image | null;
  products_count: number;
};
