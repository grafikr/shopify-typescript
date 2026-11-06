/**
 * Only exists nested in its parent. On its own, `{{ collection.image | json }}` is just the URL string.
 *
 * @liquid {{ collection | json }}
 */
export type Image = {
  created_at: string;
  alt: string | null;
  width: number;
  height: number;
  /** Protocol-relative (`//shop.myshopify.com/cdn/...`). */
  src: string;
};

/**
 * All fields are `null` (the object itself is still present) when there is no image.
 *
 * @liquid {{ cart | json }}
 */
export type FeaturedImage =
  | {
      aspect_ratio: number;
      alt: string | null;
      height: number;
      /** Protocol-relative (`//shop.myshopify.com/cdn/...`). */
      url: string;
      width: number;
    }
  | { aspect_ratio: null; alt: null; height: null; url: null; width: null };

/**
 * Preview of a media item.
 *
 * @liquid {{ product | json }}
 */
export type PreviewImage = {
  aspect_ratio: number;
  height: number;
  width: number;
  /** Protocol-relative (`//shop.myshopify.com/cdn/...`). */
  src: string;
};
