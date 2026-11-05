import type { PreviewImage } from './Image';
import type { SellingPlanAllocation, SellingPlanGroup } from './SellingPlan';

/**
 * A variant of the product.
 *
 * @liquid {{ product.variants | json }}
 */
export type ProductVariant = {
  id: number;
  title: string;
  sku: string | null;
  requires_shipping: boolean;
  taxable: boolean;
  /** An object here. On its own, `{{ variant.featured_image | json }}` is only the URL string. */
  featured_image?: ProductVariantImage | null;
  /** Slimmer than `ProductMedia`. On its own, `{{ variant.featured_media | json }}` is the full `ProductMedia`. */
  featured_media?: ProductVariantMedia | null;
  available: boolean;
  name: string;
  public_title: string | null;
  options: Array<string>;
  /** @unit cents */
  price: number;
  /** @unit grams */
  weight: number;
  /** @unit cents */
  compare_at_price: number | null;
  inventory_management: string | null;
  barcode: string | null;
  quantity_rule: { min: number; max: number | null; increment: number };
  requires_selling_plan: boolean;
  selling_plan_allocations: Array<SellingPlanAllocation>;
  unit_price?: number;
  unit_price_measurement?: {
    measured_type: string;
    quantity_value: string;
    quantity_unit: string;
    reference_value: number;
    reference_unit: string;
  };

  /** @deprecated Prefer to use options instead. */
  option1: string | null;
  /** @deprecated Prefer to use options instead. */
  option2: string | null;
  /** @deprecated Prefer to use options instead. */
  option3: string | null;
};

/**
 * Only exists nested in a variant.
 *
 * @liquid {{ product | json }}
 */
export type ProductVariantImage = {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt: string | null;
  width: number;
  height: number;
  src: string;
  variant_ids: Array<number>;
};

/**
 * Only exists nested in a variant.
 *
 * @liquid {{ product | json }}
 */
export type ProductVariantMedia = {
  id: number;
  position: number;
  alt: string | null;
  preview_image: PreviewImage;
};

type ProductMediaBase = {
  id: number;
  position: number;
  alt: string | null;
  preview_image: PreviewImage;
};

/**
 * @liquid {{ product.media | json }}
 */
export type ProductImageMedia = ProductMediaBase & {
  media_type: 'image';
  aspect_ratio: number;
  height: number;
  width: number;
  src: string;
};

/**
 * Has no `src`: use `sources`, which lists the mp4 and the HLS (m3u8) renditions.
 *
 * @liquid {{ product.media | json }}
 */
export type ProductVideoMedia = ProductMediaBase & {
  media_type: 'video';
  aspect_ratio: number;
  /** @unit milliseconds */
  duration: number;
  sources: Array<{
    format: string;
    mime_type: string;
    url: string;
    height: number;
    width: number;
  }>;
};

/**
 * A video hosted elsewhere, for example on YouTube. Has no `src`.
 *
 * @liquid {{ product.media | json }}
 */
export type ProductExternalVideoMedia = ProductMediaBase & {
  media_type: 'external_video';
  aspect_ratio: number;
  /** The id on the host, e.g. a YouTube video id. */
  external_id: string;
  host: string;
};

/**
 * A 3D model. Has no `src` and no `aspect_ratio`: use `sources`.
 *
 * @liquid {{ product.media | json }}
 */
export type ProductModelMedia = ProductMediaBase & {
  media_type: 'model';
  sources: Array<{ format: string; mime_type: string; url: string }>;
};

/**
 * Tell the kinds apart with `media_type`.
 *
 * @liquid {{ product.media | json }}
 */
export type ProductMedia =
  | ProductImageMedia
  | ProductVideoMedia
  | ProductExternalVideoMedia
  | ProductModelMedia;

/**
 * URLs are protocol-relative (`//shop.myshopify.com/cdn/...`). Also the item
 * type of `{{ collection.products | json }}`.
 *
 * @liquid {{ product | json }}
 */
export type Product = {
  id: number;
  title: string;
  handle: string;
  description: string | null;
  published_at: string;
  created_at: string;
  vendor: string;
  type: string;
  tags: Array<string>;
  /** @unit cents */
  price: number;
  /** @unit cents */
  price_min: number;
  /** @unit cents */
  price_max: number;
  available: boolean;
  price_varies: boolean;
  /** @unit cents */
  compare_at_price: number | null;
  /** @unit cents */
  compare_at_price_min: number;
  /** @unit cents */
  compare_at_price_max: number;
  compare_at_price_varies: boolean;
  variants: Array<ProductVariant>;
  images: Array<string>;
  featured_image: string | null;
  /** Option names only, unlike `.js` where these are objects. */
  options: Array<string>;
  /** Rich-text body. Same as `description`. */
  content: string | null;
  /** Missing entirely (not empty) when the product has no media. */
  media?: Array<ProductMedia>;
  requires_selling_plan: boolean;
  selling_plan_groups: Array<SellingPlanGroup>;
};
