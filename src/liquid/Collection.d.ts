import type { Image } from './Image';

/**
 * For both normal and smart collections. Not the same shape as `/collections/[handle].json`.
 *
 * @liquid {{ collection | json }}
 */
export type Collection = {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string | null;
  published_at: string;
  sort_order: string;
  template_suffix: string | null;
  published_scope: string;
  /** Present on smart collections and on the special `all` collection, missing on normal ones. `true` = match any rule, `false` = match all rules. */
  disjunctive?: boolean;
  /** Present together with `disjunctive`, but always an empty array in `| json`, even when the collection has rules. Checked on smart collections made through the Admin API (vendor, price, title and tag rules) and on an older one. */
  rules?: Array<never>;
  /** Missing entirely when the collection has no image. */
  image?: Image;
};
