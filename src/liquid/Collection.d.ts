import type { Image } from './Image';

/**
 * For both normal and smart collections. Not the same shape as
 * `/collections/[handle].json`.
 *
 * {{ collection | json }}
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
  /** Only on smart collections. `true` = match any rule, `false` = match all rules. */
  disjunctive?: boolean;
  /**
   * Only on smart collections, but always an empty array in `| json`, even when
   * the collection has rules (verified with rules on vendor, price and title).
   * The item shape is the legacy REST one and has not been observed.
   */
  rules?: Array<{
    column: string;
    relation: string;
    condition: string;
  }>;
  /** Missing entirely when the collection has no image. */
  image?: Image;
};
