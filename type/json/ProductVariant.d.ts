export type ProductVariant = {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string;
  position: number;
  compare_at_price: string;
  fulfillment_service: string;
  inventory_management: string;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string;
  grams: number;
  image_id: number | null;
  weight: number;
  weight_unit: 'g' | 'kg';
  requires_shipping: boolean;

  // Deprecated properties
  /** @deprecated Prefer to use options instead. */
  option1: string | null;
  /** @deprecated Prefer to use options instead. */
  option2: string | null;
  /** @deprecated Prefer to use options instead. */
  option3: string | null;
};
