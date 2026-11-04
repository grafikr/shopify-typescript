import type * as Js from '../js';
import type * as Json from '../json';

/** Response type per Shopify storefront URL. `:handle` etc. are path params. */
export interface Endpoints {
  // Cart
  '/cart.js': Js.Cart;
  '/cart.json': Json.Cart;
  '/cart/add.js': Js.CartAddResponse | Js.CartAddSingleResponse;
  '/cart/update.js': Js.CartUpdateResponse;
  '/cart/change.js': Js.CartChangeResponse;
  '/cart/clear.js': Js.CartClearResponse;
  '/cart/shipping_rates.json': Js.ShippingRatesResponse;

  // Products
  '/products.json': { products: Array<Json.ProductListItem> };
  '/products/:handle.js': Js.Product;
  '/products/:handle.json': { product: Json.Product };
  '/products/:handle.oembed': Json.ProductOembed;
  '/variants/:id.js': Js.ProductVariant;
  '/variants/:id.json': { product_variant: Json.ProductVariant };
  '/recommendations/products.json': {
    /** Same shape as `/products/:handle.js`, not `.json`. */
    products: Array<Js.Product>;
    intent: 'related' | 'complementary';
  };

  // Collections
  '/collections.json': { collections: Array<Json.Collection> };
  '/collections/:handle.json': { collection: Json.Collection };
  '/collections/:handle/products.json': {
    products: Array<Json.ProductListItem>;
  };

  // Content
  '/pages.json': { pages: Array<Json.Page> };
  '/pages/:handle.json': { page: Json.Page };
  '/policies/:handle.json': { policy: Json.Policy };

  // Search & shop
  '/search/suggest.json': Json.SearchSuggestResponse;
  '/browsing_context_suggestions.json': Json.BrowsingContextSuggestions;
  '/meta.json': Json.Meta;
}

export type ResponseOf<P extends keyof Endpoints> = Endpoints[P];
