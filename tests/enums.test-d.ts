import type { Js, Json, Liquid } from '../src';

/**
 * Fixture imports widen string literals, so enum-like fields are asserted here
 * against the values that were actually observed in real responses.
 *
 * `true` when the type declares exactly the observed values, plus the values in
 * `Documented`: values Shopify documents that no fixture has shown yet. Otherwise the
 * error names the values that differ: `undeclared` were observed or documented but are
 * missing from the type, `unobserved` are in the type but neither observed nor documented.
 */
type Matches<Union, Observed, Documented = never> = [
  Exclude<Observed | Documented, Union> | Exclude<Union, Observed | Documented>,
] extends [never]
  ? true
  : {
      undeclared: Exclude<Observed | Documented, Union>;
      unobserved: Exclude<Union, Observed | Documented>;
    };

/** Documented in https://shopify.dev/docs/api/liquid/objects/discount_application#discount_application-type */
type DocumentedDiscountType = 'automatic' | 'manual' | 'script';

export const jsDiscountType: Matches<
  Js.DiscountApplication['type'],
  '' | 'automatic' | 'discount_code',
  DocumentedDiscountType
> = true;
export const jsonDiscountType: Matches<
  Json.DiscountApplication['type'],
  '' | 'discount_code',
  DocumentedDiscountType
> = true;
export const liquidDiscountType: Matches<
  Liquid.DiscountApplication['type'],
  '' | 'discount_code',
  DocumentedDiscountType
> = true;

export const jsSellingPlanValueType: Matches<
  Js.SellingPlanPriceAdjustment['value_type'],
  'percentage' | 'fixed_amount' | 'price'
> = true;
export const jsonSellingPlanValueType: Matches<
  Json.SellingPlanPriceAdjustment['value_type'],
  'percentage' | 'fixed_amount' | 'price'
> = true;
export const liquidSellingPlanValueType: Matches<
  Liquid.SellingPlanPriceAdjustment['value_type'],
  'percentage' | 'fixed_amount' | 'price'
> = true;

export const jsMediaType: Matches<
  Js.ProductMedia['media_type'],
  'image' | 'video' | 'external_video' | 'model'
> = true;
export const liquidMediaType: Matches<
  Liquid.ProductMedia['media_type'],
  'image' | 'video' | 'external_video' | 'model'
> = true;
export const jsonWeightUnit: Matches<
  Json.ProductVariant['weight_unit'],
  'g' | 'kg' | 'lb' | 'oz'
> = true;
