/** @http GET /collections/[handle].json */
export type CollectionImage = {
  id: number;
  created_at: string;
  src: string;
  alt: string | null;
};

/**
 * For both normal and smart collections. Not the same shape as the Liquid `collection`.
 *
 * @http GET /collections/[handle].json
 * @http GET /collections.json
 */
export type Collection = {
  id: number;
  title: string;
  handle: string;
  /** HTML. Null when the collection has no description. */
  description: string | null;
  published_at: string;
  updated_at: string;
  image: CollectionImage | null;
  products_count: number;
};
