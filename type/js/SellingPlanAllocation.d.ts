import type { AllocationPriceAdjustment } from './AllocationPriceAdjustment';

export type SellingPlanAllocation = {
  price_adjustments: AllocationPriceAdjustment[];
  price: number;
  compare_at_price: number;
  per_delivery_price: number;
  unit_price?: number;
  selling_plan_id: number;
  selling_plan_group_id: string;
};
