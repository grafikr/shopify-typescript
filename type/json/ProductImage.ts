import Image from './Image';

export default interface ProductImage extends Image {
  product_id: number
  position: number
  updated_at: string // TODO: Check if updated at should be in "Image"
  width: number
  height: number
  variant_ids: number[]
}
