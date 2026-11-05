/**
 * `value` is a percentage for `percentage`, otherwise in the smallest currency unit
 * (for `price` it is the set price).
 *
 * @http GET /cart.json
 */
export type SellingPlanPriceAdjustment = {
  /** How many orders the adjustment applies to. `null` for the last one, which applies from then on. */
  order_count: number | null;
  position: number;
  value_type: 'fixed_amount' | 'percentage' | 'price';
  /**
   * @unit percent when `value_type` is "percentage", otherwise cents
   */
  value: number;
};

/**
 * @http GET /cart.json
 */
export type SellingPlan = {
  id: number;
  name: string;
  description: string | null;
  options: Array<{ name: string; position: number; value: string }>;
  recurring_deliveries: boolean;
  fixed_selling_plan: boolean;
  price_adjustments: Array<SellingPlanPriceAdjustment>;
};

/**
 * The selling plan of a cart line. Missing on lines without one.
 *
 * @http GET /cart.json
 */
export type CartSellingPlanAllocation = {
  price_adjustments: Array<{ position: number; price: number }>;
  /** @unit cents */
  price: number;
  /** @unit cents */
  compare_at_price: number | null;
  /** @unit cents */
  per_delivery_price: number;
  selling_plan: SellingPlan;
};
