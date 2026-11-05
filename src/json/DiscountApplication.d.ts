export type DiscountApplication = {
  /** `""` has been observed for automatic discounts. */
  type: '' | 'automatic' | 'discount_code' | 'manual' | 'script';
  key: string;
  title: string;
  description: string | null;
  /**
   * @unit percent when `value_type` is "percentage", otherwise currency-units
   * @format decimal-string
   */
  value: string;
  created_at: string;
  value_type: 'fixed_amount' | 'percentage';
  allocation_method: 'across' | 'each' | 'one';
  target_selection: 'all' | 'entitled' | 'explicit';
  target_type: 'line_item' | 'shipping_line';
  /** @unit cents */
  total_allocated_amount: number;
};

export type DiscountAllocation = {
  /** @unit cents */
  amount: number;
  discount_application: DiscountApplication;
};
