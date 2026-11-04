/**
 * Only exists nested in the cart. `| json` is not allowed on it on its own.
 *
 * {{ cart | json }}
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
 * Only exists nested in a cart line item. `| json` is not allowed on it on its own.
 *
 * {{ cart | json }}
 */
export type DiscountAllocation = {
  amount: number;
  discount_application: DiscountApplication;
};
