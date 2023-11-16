import { Image } from './Image';

export type ProductImage = Image & {
  product_id: number;
  position: number;
  updated_at: string;
  width: number;
  height: number;
  variant_ids: Array<number>;
};
