import type { Image } from './Image';

/** @liquid {{ article | json }} */
export type Article = {
  id: number;
  title: string;
  created_at: string;
  body_html: string | null;
  blog_id: number;
  author: string;
  user_id: number | null;
  published_at: string;
  updated_at: string;
  summary_html: string | null;
  template_suffix: string | null;
  handle: string;
  /** Comma separated, e.g. "x, y". Empty string when untagged. */
  tags: string;
  /** Missing entirely when the article has no image. */
  image?: Image;
};
