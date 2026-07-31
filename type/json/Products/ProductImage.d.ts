export type ProductImage = {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  src: string;
  width: number;
  height: number;
  variant_ids: Array<number>;
};
