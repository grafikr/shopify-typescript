/**
 * `value` is a percentage for `percentage`, otherwise in the smallest currency unit.
 *
 * @http GET /products/[handle].js
 */
export type SellingPlanPriceAdjustment = {
  order_count: number | null;
  position: number;
  value_type: 'fixed_amount' | 'percentage' | 'price';
  /**
   * @unit percent when `value_type` is "percentage", otherwise cents
   */
  value: number;
};

/**
 * @http GET /products/[handle].js
 */
export type SellingPlan = {
  id: number;
  name: string;
  description: string | null;
  options: Array<{ name: string; position: number; value: string }>;
  recurring_deliveries: boolean;
  price_adjustments: Array<SellingPlanPriceAdjustment>;
};

/**
 * @http GET /products/[handle].js
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
 * @http GET /products/[handle].js
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
 * @http GET /cart.js
 */
export type CartSellingPlanAllocation = {
  price_adjustments: Array<{ position: number; price: number }>;
  /** @unit cents */
  price: number;
  /** @unit cents */
  compare_at_price: number | null;
  /** @unit cents */
  per_delivery_price: number;
  selling_plan: SellingPlan & { fixed_selling_plan: boolean };
};

/**
 * The selling plan of a line in the cart echoed by the mutation endpoints. The
 * embedded plan has `checkout_charge` instead of `fixed_selling_plan`.
 *
 * @http POST /cart/add.js
 * @http POST /cart/update.js
 * @http POST /cart/change.js
 */
export type CartResponseSellingPlanAllocation = Omit<
  CartSellingPlanAllocation,
  'selling_plan'
> & {
  selling_plan: SellingPlan & {
    checkout_charge: { value_type: string; value: number };
  };
};
