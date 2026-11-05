import type {
  DiscountAllocation,
  DiscountApplication,
} from './DiscountApplication';
import type { FeaturedImage } from './Image';

/**
 * Prices are integers in the smallest currency unit (cents).
 *
 * /cart.js
 */
export type CartLineItem = {
  id: number;
  properties: Record<string, unknown> | null;
  quantity: number;
  variant_id: number;
  key: string;
  title: string;
  original_price: number;
  presentment_price: number;
  discounted_price: number;
  original_line_price: number;
  /** `""` from `/cart/add.js`, `null` elsewhere. */
  sku: string | null;
  grams: number;
  vendor: string;
  taxable: boolean;
  product_id: number;
  product_has_only_default_variant: boolean;
  gift_card: boolean;
  final_price: number;
  final_line_price: number;
  url: string;
  featured_image: FeaturedImage;
  image: string | null;
  handle: string;
  requires_shipping: boolean;
  product_type: string;
  product_title: string;
  product_description: string | null;
  variant_title: string | null;
  variant_options: Array<string>;
  options_with_values: Array<{ name: string; value: string }>;
  line_level_discount_allocations: Array<DiscountAllocation>;
  line_level_total_discount: number;
  quantity_rule: { min: number; max: number | null; increment: number };
  has_components: boolean;

  // Deprecated properties
  /** @deprecated Use line_level_discount_allocations instead */
  discounts: Array<{ amount: number; title: string }>;
  /** @deprecated Use final_line_price instead */
  line_price: number;
  /** @deprecated Use final_price instead */
  price: number;
  /** @deprecated Use line_level_total_discount instead */
  total_discount: number;
};

/**
 * Prices are integers in the smallest currency unit (cents).
 *
 * /cart.js
 */
export type Cart = {
  token: string;
  note: string | null;
  attributes: Record<string, unknown>;
  original_total_price: number;
  total_price: number;
  total_discount: number;
  total_weight: number;
  item_count: number;
  items: Array<CartLineItem>;
  requires_shipping: boolean;
  currency: string;
  items_subtotal_price: number;
  cart_level_discount_applications: Array<DiscountApplication>;
  discount_codes: Array<{ code: string; applicable: boolean }>;
};

/**
 * Full line item in the responses that echo the cart. Compared to `/cart.js` it has no
 * `quantity_rule`/`has_components`, but adds untranslated titles.
 *
 * POST /cart/add.js, /cart/update.js, /cart/change.js
 */
export type CartResponseLineItem = Omit<
  CartLineItem,
  'quantity_rule' | 'has_components'
> & {
  untranslated_product_title: string;
  untranslated_variant_title: string | null;
};

/**
 * Slim line item in `items_added` / `items_removed`.
 *
 * POST /cart/change.js
 */
export type CartChangedLineItem = {
  /** UUID, not the variant id. */
  id: string;
  variant_id: number;
  product_id: number;
  quantity: number;
  title: string;
  product_title: string;
  variant_title: string | null;
  untranslated_product_title: string;
  untranslated_variant_title: string | null;
  sku: string | null;
  vendor: string;
  product_type: string;
  url: string;
  image: string | null;
  /** Decimal string (e.g. "200.00"), unlike the cents used elsewhere. */
  price: string;
  presentment_price: number;
  view_key: string;
};

/**
 * These endpoints wrap each cart level discount with the amount it took off.
 *
 * POST /cart/update.js, /cart/change.js
 */
type CartMutationFields = Omit<
  Cart,
  'items' | 'cart_level_discount_applications'
> & {
  items: Array<CartResponseLineItem>;
  cart_level_discount_applications: Array<DiscountAllocation>;
};

/**
 * With `items: [...]` in the request.
 *
 * POST /cart/add.js
 */
export type CartAddResponse = {
  items: Array<CartResponseLineItem>;
  /** Present when `sections` was passed. Section id → rendered HTML. */
  sections?: Record<string, string>;
};

/**
 * With a single item (`{ id, quantity }`) in the request, the line item is returned directly.
 *
 * POST /cart/add.js
 */
export type CartAddSingleResponse = CartResponseLineItem;

/**
 * POST /cart/update.js
 */
export type CartUpdateResponse = CartMutationFields & {
  items_changelog: { added: Array<{ variant_id: number; quantity: number }> };
};

/**
 * POST /cart/change.js
 */
export type CartChangeResponse = CartMutationFields & {
  items_added: Array<CartChangedLineItem>;
  items_removed: Array<CartChangedLineItem>;
};

/**
 * POST /cart/clear.js
 */
export type CartClearResponse = Cart;

/**
 * `status` is a number (`422`) for some errors and a string (`"bad_request"`,
 * `"unprocessable_entity"`) for others.
 *
 * POST /cart/add.js, /cart/update.js, /cart/change.js
 */
export type CartError = {
  status: number | string;
  message: string;
  description: string;
};

/**
 * /cart/shipping_rates.json
 */
export type ShippingRate = {
  name: string;
  presentment_name: string;
  code: string;
  /** Decimal string, e.g. "49.00" */
  price: string;
  markup: string;
  source: string;
  currency: string;
  delivery_days: Array<number>;
  phone_required: boolean;
  accepts_instructions: boolean;
  delivery_date: string | null;
  delivery_range: Array<string> | null;
  compare_price: string | null;
  carrier_identifier: string | null;
  delivery_category: string | null;
  using_merchant_account: boolean | null;
  carrier_service_id: string | null;
  description: string | null;
  additional_data: unknown;
  incoterm: string | null;
  api_client_id: number | null;
  requested_fulfillment_service_id: string | null;
  shipment_options: unknown;
  charge_items: unknown;
  has_restrictions: boolean | null;
  rating_classification: string | null;
  metafields: unknown;
};

/**
 * Needs a prior `POST /cart/prepare_shipping_rates.json`.
 *
 * /cart/shipping_rates.json
 */
export type ShippingRatesResponse = { shipping_rates: Array<ShippingRate> };
