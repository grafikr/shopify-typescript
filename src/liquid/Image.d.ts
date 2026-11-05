/**
 * Only exists nested in its parent. On its own, `{{ collection.image | json }}`
 * is just the URL string. URLs are protocol-relative.
 *
 * @liquid {{ collection | json }}
 */
export type Image = {
  created_at: string;
  alt: string | null;
  width: number;
  height: number;
  src: string;
};

/**
 * All fields are `null` (the object itself is still present) when there is no image.
 * Used by cart line items.
 *
 * @liquid {{ cart | json }}
 */
export type FeaturedImage =
  | {
      aspect_ratio: number;
      alt: string | null;
      height: number;
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
  src: string;
};
