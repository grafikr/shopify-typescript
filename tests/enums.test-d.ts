import type { Js, Json, Liquid } from '../src';

/**
 * Fixture imports widen string literals, so enum-like fields are asserted here
 * against the values that were actually observed in real responses.
 */
type Covers<Union, Observed> = [Observed] extends [Union] ? true : never;

export const jsDiscountType: Covers<
  Js.DiscountApplication['type'],
  '' | 'automatic' | 'discount_code'
> = true;
export const jsonDiscountType: Covers<
  Json.DiscountApplication['type'],
  '' | 'discount_code'
> = true;
export const liquidDiscountType: Covers<
  Liquid.DiscountApplication['type'],
  '' | 'discount_code'
> = true;

export const jsSellingPlanValueType: Covers<
  Js.SellingPlanPriceAdjustment['value_type'],
  'percentage' | 'fixed_amount' | 'price'
> = true;
export const jsonSellingPlanValueType: Covers<
  Json.SellingPlanPriceAdjustment['value_type'],
  'percentage' | 'fixed_amount' | 'price'
> = true;
export const liquidSellingPlanValueType: Covers<
  Liquid.SellingPlanPriceAdjustment['value_type'],
  'percentage' | 'fixed_amount' | 'price'
> = true;
