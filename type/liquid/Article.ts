import { Image } from './Image';

export type Article = {
  id: number;
  title: string;
  created_at: string;
  body_html: string;
  blog_id: number;
  author: string;
  user_id: number;
  published_at: string;
  updated_at: string;
  summary_html: string;
  template_suffix: string;
  handle: string;
  tags: string;
  image?: Image;
};
