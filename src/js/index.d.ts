import type {
  Cart,
  CartAddResponse,
  CartAddSingleResponse,
  CartChangedLineItem,
  CartChangeResponse,
  CartClearResponse,
  CartError,
  CartLineItem,
  CartResponseLineItem,
  CartUpdateResponse,
  ShippingRate,
  ShippingRatesResponse,
} from './Cart';
import type {
  DiscountAllocation,
  DiscountApplication,
} from './DiscountApplication';
import type { FeaturedImage, PreviewImage } from './Image';
import type {
  Product,
  ProductExternalVideoMedia,
  ProductImageMedia,
  ProductMedia,
  ProductModelMedia,
  ProductOption,
  ProductVariant,
  ProductVariantImage,
  ProductVariantMedia,
  ProductVideoMedia,
} from './Product';
import type {
  CartResponseSellingPlanAllocation,
  CartSellingPlanAllocation,
  SellingPlan,
  SellingPlanAllocation,
  SellingPlanGroup,
  SellingPlanPriceAdjustment,
} from './SellingPlan';

export type {
  Cart,
  CartAddResponse,
  CartAddSingleResponse,
  CartChangedLineItem,
  CartChangeResponse,
  CartClearResponse,
  CartError,
  CartLineItem,
  CartResponseLineItem,
  CartResponseSellingPlanAllocation,
  CartSellingPlanAllocation,
  CartUpdateResponse,
  DiscountAllocation,
  DiscountApplication,
  FeaturedImage,
  PreviewImage,
  Product,
  ProductExternalVideoMedia,
  ProductImageMedia,
  ProductMedia,
  ProductModelMedia,
  ProductOption,
  ProductVariant,
  ProductVariantImage,
  ProductVariantMedia,
  ProductVideoMedia,
  SellingPlan,
  SellingPlanAllocation,
  SellingPlanGroup,
  SellingPlanPriceAdjustment,
  ShippingRate,
  ShippingRatesResponse,
};

/** Every type in this format, by name. Used by `Entity` in the root entry point. */
export interface Types {
  Cart: Cart;
  CartAddResponse: CartAddResponse;
  CartAddSingleResponse: CartAddSingleResponse;
  CartChangeResponse: CartChangeResponse;
  CartChangedLineItem: CartChangedLineItem;
  CartClearResponse: CartClearResponse;
  CartError: CartError;
  CartLineItem: CartLineItem;
  CartResponseLineItem: CartResponseLineItem;
  CartResponseSellingPlanAllocation: CartResponseSellingPlanAllocation;
  CartSellingPlanAllocation: CartSellingPlanAllocation;
  CartUpdateResponse: CartUpdateResponse;
  DiscountAllocation: DiscountAllocation;
  DiscountApplication: DiscountApplication;
  FeaturedImage: FeaturedImage;
  PreviewImage: PreviewImage;
  Product: Product;
  ProductExternalVideoMedia: ProductExternalVideoMedia;
  ProductImageMedia: ProductImageMedia;
  ProductMedia: ProductMedia;
  ProductModelMedia: ProductModelMedia;
  ProductOption: ProductOption;
  ProductVariant: ProductVariant;
  ProductVariantImage: ProductVariantImage;
  ProductVariantMedia: ProductVariantMedia;
  ProductVideoMedia: ProductVideoMedia;
  SellingPlan: SellingPlan;
  SellingPlanAllocation: SellingPlanAllocation;
  SellingPlanGroup: SellingPlanGroup;
  SellingPlanPriceAdjustment: SellingPlanPriceAdjustment;
  ShippingRate: ShippingRate;
  ShippingRatesResponse: ShippingRatesResponse;
}
