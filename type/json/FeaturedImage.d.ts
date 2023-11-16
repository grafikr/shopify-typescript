export type FeaturedImage =
  | {
      aspect_ratio: number;
      alt: string;
      height: number;
      url: string;
      width: number;
    }
  | {
      aspect_ratio: null;
      alt: null;
      height: null;
      url: null;
      width: null;
    };
