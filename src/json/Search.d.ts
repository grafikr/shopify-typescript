import type { FeaturedImage } from './Image';

export type SuggestProductVariant = {
  available: boolean;
  /**
   * @unit currency-units
   * @format decimal-string
   */
  compare_at_price: string | null;
  id: number;
  image: string | null;
  /**
   * @unit currency-units
   * @format decimal-string
   */
  price: string;
  title: string;
  url: string;
  featured_image: FeaturedImage;
};

export type SuggestProduct = {
  id: number;
  handle: string;
  url: string;
  title: string;
  body: string | null;
  available: boolean;
  /**
   * @unit currency-units
   * @format decimal-string
   */
  compare_at_price_max: string;
  /**
   * @unit currency-units
   * @format decimal-string
   */
  compare_at_price_min: string;
  image: string | null;
  /**
   * @unit currency-units
   * @format decimal-string
   */
  price: string;
  /**
   * @unit currency-units
   * @format decimal-string
   */
  price_max: string;
  /**
   * @unit currency-units
   * @format decimal-string
   */
  price_min: string;
  tags: Array<string>;
  type: string;
  /** Empty unless requested with `resources[options][fields]=variants.*`. */
  variants: Array<SuggestProductVariant>;
  vendor: string;
  featured_image: FeaturedImage;
};

export type SuggestCollection = {
  id: number;
  handle: string;
  url: string;
  title: string;
  body: string | null;
  published_at: string;
  featured_image: FeaturedImage;
};

export type SuggestPage = {
  id: number;
  handle: string;
  url: string;
  title: string;
  body: string | null;
  author: string | null;
  published_at: string;
};

export type SuggestArticle = {
  id: number;
  handle: string;
  url: string;
  title: string;
  body: string | null;
  author: string;
  image: string | null;
  published_at: string;
  summary_html: string | null;
  tags: Array<string>;
  featured_image: FeaturedImage;
};

export type SuggestQuery = { url: string; text: string; styled_text: string };

/**
 * Only the requested `resources[type]`s are present.
 */
export type SearchSuggestResponse = {
  resources: {
    results: {
      products?: Array<SuggestProduct>;
      collections?: Array<SuggestCollection>;
      pages?: Array<SuggestPage>;
      articles?: Array<SuggestArticle>;
      queries?: Array<SuggestQuery>;
    };
  };
};
