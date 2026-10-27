import type { SellingPlanOption } from './SellingPlanOption';
import type { SellingPlanPriceAdjustment } from './SellingPlanPriceAdjustment';

export type SellingPlan = {
  id: number;
  name: string;
  description: string;
  options: SellingPlanOption[];
  recurring_deliveries: boolean;
  price_adjustments: SellingPlanPriceAdjustment[];
};
