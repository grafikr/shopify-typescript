import { Image } from './Image';

export type Collection = {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix: string;
  disjunctive?: boolean;
  rules?: Array<{
    column: string;
    relation: string;
    condition: string;
  }>;
  published_scope: string;
  image?: Image;
};
