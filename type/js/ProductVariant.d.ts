import type { FeaturedVariantMedia } from '../liquid/FeaturedVariantMedia';
import type { FeaturedVariantImage } from './FeaturedVariantImage';
import type { SellingPlanAllocation } from './SellingPlanAllocation';

export type QuantityPriceBreak = {
  minimum_quantity: number;
  price: number;
};

export type ProductVariant = {
  id: number;
  title: string;
  option1: string;
  option2: string | null;
  option3: string | null;
  sku: string | null;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: FeaturedVariantImage | null;
  available: boolean;
  name: string;
  public_title: string | null;
  options: string[];
  price: number;
  weight: number;
  compare_at_price: number | null;
  inventory_management: string;
  inventory_policy?: string;
  inventory_quantity?: number;
  barcode: string | null;
  featured_media?: FeaturedVariantMedia;
  quantity_rule: {
    min: number;
    max: number | null;
    increment: number;
  };
  unit_price?: number;
  unit_price_measurement?: {
    measured_type: string;
    quantity_value: string;
    quantity_unit: string;
    reference_value: number;
    reference_unit: string;
  };
  quantity_price_breaks: QuantityPriceBreak[];
  requires_selling_plan: boolean;
  selling_plan_allocations: SellingPlanAllocation[];
};
