/**
 * All fields are `null` (the object itself is still present) when there is no image.
 * Used by cart line items and by `/search/suggest.json` resources.
 *
 * GET /cart.json
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
