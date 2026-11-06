import type { Article } from './Article';
import type { Cart, CartLineItem } from './Cart';
import type { Collection } from './Collection';
import type {
  DiscountAllocation,
  DiscountApplication,
} from './DiscountApplication';
import type { FeaturedImage, Image, PreviewImage } from './Image';
import type { Pagination, PaginationPart } from './Pagination';
import type {
  Product,
  ProductExternalVideoMedia,
  ProductImageMedia,
  ProductMedia,
  ProductModelMedia,
  ProductVariant,
  ProductVariantImage,
  ProductVariantMedia,
  ProductVideoMedia,
} from './Product';
import type {
  CartSellingPlanAllocation,
  SellingPlan,
  SellingPlanAllocation,
  SellingPlanGroup,
  SellingPlanPriceAdjustment,
} from './SellingPlan';

export type {
  Article,
  Cart,
  CartLineItem,
  CartSellingPlanAllocation,
  Collection,
  DiscountAllocation,
  DiscountApplication,
  FeaturedImage,
  Image,
  Pagination,
  PaginationPart,
  PreviewImage,
  Product,
  ProductExternalVideoMedia,
  ProductImageMedia,
  ProductMedia,
  ProductModelMedia,
  ProductVariant,
  ProductVariantImage,
  ProductVariantMedia,
  ProductVideoMedia,
  SellingPlan,
  SellingPlanAllocation,
  SellingPlanGroup,
  SellingPlanPriceAdjustment,
};

/** Every type in this format, by name. Used by `Entity` in the root entry point. */
export interface Types {
  Article: Article;
  Cart: Cart;
  CartLineItem: CartLineItem;
  CartSellingPlanAllocation: CartSellingPlanAllocation;
  Collection: Collection;
  DiscountAllocation: DiscountAllocation;
  DiscountApplication: DiscountApplication;
  FeaturedImage: FeaturedImage;
  Image: Image;
  Pagination: Pagination;
  PaginationPart: PaginationPart;
  PreviewImage: PreviewImage;
  Product: Product;
  ProductExternalVideoMedia: ProductExternalVideoMedia;
  ProductImageMedia: ProductImageMedia;
  ProductMedia: ProductMedia;
  ProductModelMedia: ProductModelMedia;
  ProductVariant: ProductVariant;
  ProductVariantImage: ProductVariantImage;
  ProductVariantMedia: ProductVariantMedia;
  ProductVideoMedia: ProductVideoMedia;
  SellingPlan: SellingPlan;
  SellingPlanAllocation: SellingPlanAllocation;
  SellingPlanGroup: SellingPlanGroup;
  SellingPlanPriceAdjustment: SellingPlanPriceAdjustment;
}
