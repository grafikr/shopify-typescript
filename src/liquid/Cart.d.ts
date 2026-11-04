import type {
  DiscountAllocation,
  DiscountApplication,
} from './DiscountApplication';

/**
 * All fields are `null` (the object itself is still present) when the item has
 * no image. Only exists nested in a cart line item; `| json` on its own gives `null`.
 *
 * {{ cart | json }}
 */
export type CartLineItemImage =
  | {
      aspect_ratio: number;
      alt: string | null;
      height: number;
      url: string;
      width: number;
    }
  | { aspect_ratio: null; alt: null; height: null; url: null; width: null };

/**
 * A line item of the cart. Prices are integers in the smallest currency unit (cents).
 *
 * {{ cart.items | json }}
 */
export type CartLineItem = {
  id: number;
  properties: Record<string, unknown> | null;
  quantity: number;
  variant_id: number;
  key: string;
  title: string;
  original_price: number;
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
  featured_image: CartLineItemImage;
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
 * {{ cart | json }}
 */
export type Cart = {
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
  checkout_charge_amount: number;
};
