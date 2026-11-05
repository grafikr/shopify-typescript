/**
 * `value` is a percentage for `percentage`, otherwise in the smallest currency unit
 * (for `price` it is the set price).
 *
 * @liquid {{ product | json }}
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
 * @liquid {{ product | json }}
 */
export type SellingPlan = {
  id: number;
  name: string;
  description: string | null;
  options: Array<{ name: string; position: number; value: string }>;
  recurring_deliveries: boolean;
  price_adjustments: Array<SellingPlanPriceAdjustment>;
  /** Missing on the plan embedded in a cart line. */
  checkout_charge?: { value_type: string; value: number };
};

/**
 * @liquid {{ product | json }}
 */
export type SellingPlanGroup = {
  /** A hash, unlike the numeric plan ids. */
  id: string;
  name: string;
  options: Array<{ name: string; position: number; values: Array<string> }>;
  selling_plans: Array<SellingPlan>;
  app_id: string | null;
};

/**
 * What a variant costs under one selling plan.
 *
 * @liquid {{ product | json }}
 */
export type SellingPlanAllocation = {
  price_adjustments: Array<{ position: number; price: number }>;
  /** @unit cents */
  price: number;
  /** @unit cents */
  compare_at_price: number | null;
  /** @unit cents */
  per_delivery_price: number;
  selling_plan_id: number;
  selling_plan_group_id: string;
};

/**
 * The selling plan of a cart line. Missing on lines without one.
 *
 * @liquid {{ cart | json }}
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
  /** @unit cents */
  checkout_charge_amount: number;
  /** @unit cents */
  remaining_balance_charge_amount: number;
};
