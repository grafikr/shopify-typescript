import type { ProductOption } from './ProductOption';
import type { SellingPlan } from './SellingPlan';

export type SellingPlanGroup = {
  id: string;
  name: string;
  options: ProductOption[];
  selling_plans: SellingPlan[];
  app_id: string;
};
