import type { DiscountApplication } from './DiscountApplication';

export type DiscountAllocation = {
  amount: number;
  discount_application: DiscountApplication;
};
