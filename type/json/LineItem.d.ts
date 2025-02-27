import type { DiscountAllocation } from './DiscountAllocation';
import type { FeaturedImage } from './FeaturedImage';

export type LineItem = {
  id: number;
  properties: Record<string, any>;
  quantity: number;
  variant_id: number;
  key: string;
  title: string;
  original_price: number;
  discounted_price: number;
  original_line_price: number;
  sku: string;
  grams: number;
  vendor: string;
  taxable: boolean;
  product_id: number;
  product_has_only_default_variant: boolean;
  gift_card: boolean;
  final_price: number;
  final_line_price: number;
  url: string;
  featured_image: FeaturedImage;
  image: string | null;
  handle: string;
  requires_shipping: boolean;
  product_type: string;
  product_title: string;
  product_description: string;
  variant_title: string;
  variant_options: Array<string>;
  options_with_values: [
    {
      name: string;
      value: string;
    },
  ];
  line_level_discount_allocations: Array<DiscountAllocation>;
  line_level_total_discount: number;
  quantity_rule: {
    min: number;
    max: number | null;
    increment: number;
  };
  has_components: boolean;

  // Deprecated properties
  /** @deprecated Use line_level_discount_allocations instead */
  discounts: [
    {
      amount: number;
      title: string;
    },
  ];
  /** @deprecated Use final_line_price instead */
  line_price: number;
  /** @deprecated Use final_price instead */
  price: number;
  /** @deprecated Use line_level_total_discount instead */
  total_discount: number;
};

export type UpdatedLineItem = LineItem & {
  untranslated_product_title: string;
  untranslated_variant_title: string;
};
