/**
 * /cart.js
 */
export type DiscountApplication = {
  /** `""` has been observed for automatic discounts. */
  type: '' | 'automatic' | 'discount_code' | 'manual' | 'script';
  key: string;
  title: string;
  description: string | null;
  value: string;
  created_at: string;
  value_type: 'fixed_amount' | 'percentage';
  allocation_method: 'across' | 'each' | 'one';
  target_selection: 'all' | 'entitled' | 'explicit';
  target_type: 'line_item' | 'shipping_line';
  total_allocated_amount: number;
};

/**
 * Also wraps the discount application in `cart_level_discount_applications` of
 * the `/cart/add.js`, `/cart/update.js` and `/cart/change.js` responses.
 *
 * /cart.js
 */
export type DiscountAllocation = {
  amount: number;
  discount_application: DiscountApplication;
};
