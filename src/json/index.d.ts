import type {
  BrowsingContextSuggestionPart,
  BrowsingContextSuggestions,
} from './BrowsingContextSuggestions';
import type { Cart, CartLineItem } from './Cart';
import type { Collection, CollectionImage } from './Collection';
import type {
  DiscountAllocation,
  DiscountApplication,
} from './DiscountApplication';
import type { FeaturedImage } from './Image';
import type { Meta } from './Meta';
import type { Page } from './Page';
import type { Policy } from './Policy';
import type {
  Product,
  ProductImage,
  ProductOption,
  ProductVariant,
} from './Product';
import type {
  ProductListImage,
  ProductListItem,
  ProductListVariant,
} from './ProductListItem';
import type {
  SearchSuggestResponse,
  SuggestArticle,
  SuggestCollection,
  SuggestPage,
  SuggestProduct,
  SuggestProductVariant,
  SuggestQuery,
} from './Search';
import type {
  CartSellingPlanAllocation,
  SellingPlan,
  SellingPlanPriceAdjustment,
} from './SellingPlan';

export type {
  BrowsingContextSuggestionPart,
  BrowsingContextSuggestions,
  Cart,
  CartLineItem,
  CartSellingPlanAllocation,
  Collection,
  CollectionImage,
  DiscountAllocation,
  DiscountApplication,
  FeaturedImage,
  Meta,
  Page,
  Policy,
  Product,
  ProductImage,
  ProductListImage,
  ProductListItem,
  ProductListVariant,
  ProductOption,
  ProductVariant,
  SearchSuggestResponse,
  SellingPlan,
  SellingPlanPriceAdjustment,
  SuggestArticle,
  SuggestCollection,
  SuggestPage,
  SuggestProduct,
  SuggestProductVariant,
  SuggestQuery,
};

/** Every type in this format, by name. Used by `Entity` in the root entry point. */
export interface Types {
  BrowsingContextSuggestionPart: BrowsingContextSuggestionPart;
  BrowsingContextSuggestions: BrowsingContextSuggestions;
  Cart: Cart;
  CartLineItem: CartLineItem;
  CartSellingPlanAllocation: CartSellingPlanAllocation;
  Collection: Collection;
  CollectionImage: CollectionImage;
  DiscountAllocation: DiscountAllocation;
  DiscountApplication: DiscountApplication;
  FeaturedImage: FeaturedImage;
  Meta: Meta;
  Page: Page;
  Policy: Policy;
  Product: Product;
  ProductImage: ProductImage;
  ProductListImage: ProductListImage;
  ProductListItem: ProductListItem;
  ProductListVariant: ProductListVariant;
  ProductOption: ProductOption;
  ProductVariant: ProductVariant;
  SearchSuggestResponse: SearchSuggestResponse;
  SellingPlan: SellingPlan;
  SellingPlanPriceAdjustment: SellingPlanPriceAdjustment;
  SuggestArticle: SuggestArticle;
  SuggestCollection: SuggestCollection;
  SuggestPage: SuggestPage;
  SuggestProduct: SuggestProduct;
  SuggestProductVariant: SuggestProductVariant;
  SuggestQuery: SuggestQuery;
}
