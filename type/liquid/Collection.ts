import Image from './Image';
import Rule from './Rule';

export default interface Collection {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix: string;
  disjunctive?: boolean;
  rules?: Rule[];
  published_scope: string;
  image?: Image;
}
