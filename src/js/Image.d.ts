/**
 * All fields are `null` (the object itself is still present) when there is no image.
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
 */
export type PreviewImage = {
  aspect_ratio: number;
  height: number;
  width: number;
  src: string;
};
