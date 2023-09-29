import Image from './Image';

export default interface ProductImage extends Image {
  product_id: number;
  position: number;
  updated_at: string;
  width: number;
  height: number;
  variant_ids: number[];
}
