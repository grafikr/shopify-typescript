import type {
  DiscountAllocation,
  DiscountApplication,
} from './DiscountApplication';
import type { FeaturedImage } from './Image';
import type {
  CartResponseSellingPlanAllocation,
  CartSellingPlanAllocation,
} from './SellingPlan';

export type CartLineItem = {
  id: number;
  properties: Record<string, unknown> | null;
  quantity: number;
  variant_id: number;
  key: string;
  title: string;
  /** @unit cents */
  original_price: number;
  /** @unit currency-units */
  presentment_price: number;
  /** @unit cents */
  discounted_price: number;
  /** @unit cents */
  original_line_price: number;
  /** `""` from `/cart/add.js`, `null` elsewhere. */
  sku: string | null;
  /** @unit grams */
  grams: number;
  vendor: string;
  taxable: boolean;
  product_id: number;
  product_has_only_default_variant: boolean;
  gift_card: boolean;
  /** @unit cents */
  final_price: number;
  /** @unit cents */
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
  /** Missing on lines without a selling plan. */
  selling_plan_allocation?: CartSellingPlanAllocation;
  line_level_discount_allocations: Array<DiscountAllocation>;
  /** @unit cents */
  line_level_total_discount: number;
  quantity_rule: { min: number; max: number | null; increment: number };
  has_components: boolean;

  /** @deprecated Use line_level_discount_allocations instead */
  discounts: Array<{ amount: number; title: string }>;
  /**
   * @deprecated Use final_line_price instead
   * @unit cents
   */
  line_price: number;
  /**
   * @deprecated Use final_price instead
   * @unit cents
   */
  price: number;
  /**
   * @deprecated Use line_level_total_discount instead
   * @unit cents
   */
  total_discount: number;
};

export type Cart = {
  token: string;
  note: string | null;
  attributes: Record<string, unknown>;
  /** @unit cents */
  original_total_price: number;
  /** @unit cents */
  total_price: number;
  /** @unit cents */
  total_discount: number;
  /** @unit grams */
  total_weight: number;
  item_count: number;
  items: Array<CartLineItem>;
  requires_shipping: boolean;
  currency: string;
  /** @unit cents */
  items_subtotal_price: number;
  cart_level_discount_applications: Array<DiscountApplication>;
  discount_codes: Array<{ code: string; applicable: boolean }>;
};

/** Full line item in the responses that echo the cart. Compared to `/cart.js` it has no `quantity_rule`/`has_components`, but adds untranslated titles. */
export type CartResponseLineItem = Omit<
  CartLineItem,
  'quantity_rule' | 'has_components' | 'selling_plan_allocation'
> & {
  /** Missing on lines without a selling plan. */
  selling_plan_allocation?: CartResponseSellingPlanAllocation;
  untranslated_product_title: string;
  untranslated_variant_title: string | null;
};

/**
 * Slim line item in `items_added` / `items_removed`.
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
  /**
   * Decimal string (e.g. "200.00"), unlike the cents used elsewhere.
   *
   * @unit currency-units
   * @format decimal-string
   */
  price: string;
  /** @unit currency-units */
  presentment_price: number;
  view_key: string;
};

/** Each cart level discount is wrapped with the amount it took off. */
type CartMutationFields = Omit<
  Cart,
  'items' | 'cart_level_discount_applications'
> & {
  items: Array<CartResponseLineItem>;
  cart_level_discount_applications: Array<DiscountAllocation>;
};

/**
 * With `items: [...]` in the request.
 */
export type CartAddResponse = {
  items: Array<CartResponseLineItem>;
  /** Present when `sections` was passed. Section id → rendered HTML. */
  sections?: Record<string, string>;
};

/**
 * With a single item (`{ id, quantity }`) in the request, the line item is returned directly.
 */
export type CartAddSingleResponse = CartResponseLineItem;

export type CartUpdateResponse = CartMutationFields & {
  items_changelog: { added: Array<{ variant_id: number; quantity: number }> };
};

export type CartChangeResponse = CartMutationFields & {
  items_added: Array<CartChangedLineItem>;
  items_removed: Array<CartChangedLineItem>;
};

export type CartClearResponse = Cart;

/** `status` is a number (`422`) for some errors and a string (`"bad_request"`, `"unprocessable_entity"`) for others. */
export type CartError = {
  status: number | string;
  message: string;
  description: string;
};

export type ShippingRate = {
  name: string;
  presentment_name: string;
  code: string;
  /**
   * Decimal string, e.g. "49.00"
   *
   * @unit currency-units
   * @format decimal-string
   */
  price: string;
  /**
   * @unit currency-units
   * @format decimal-string
   */
  markup: string;
  source: string;
  currency: string;
  delivery_days: Array<number>;
  phone_required: boolean;
  accepts_instructions: boolean;
  delivery_date: string | null;
  delivery_range: Array<string> | null;
  /**
   * @unit currency-units
   * @format decimal-string
   */
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

/** Needs a prior `POST /cart/prepare_shipping_rates.json`. */
export type ShippingRatesResponse = { shipping_rates: Array<ShippingRate> };

/** Returned with status 422. Each key is an invalid address field with its messages. `error` is used when the rates could not be calculated, for example when no address is given. */
export type ShippingRatesError = {
  error?: Array<string>;
  country?: Array<string>;
  province?: Array<string>;
  zip?: Array<string>;
};
