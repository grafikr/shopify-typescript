import type { DiscountApplication } from './DiscountApplication';
import type { FeaturedImage } from './Image';

/**
 * Prices are integers in the smallest currency unit (cents).
 *
 * /cart.json
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
  line_level_discount_allocations: Array<{
    amount: number;
    discount_application: DiscountApplication;
  }>;
  line_level_total_discount: number;
  quantity_rule: { min: number; max: number | null; increment: number };
  has_components: boolean;

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
 * Currently the same payload as `/cart.js`. Kept as its own type so the two can
 * diverge without a breaking change.
 *
 * /cart.json
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
