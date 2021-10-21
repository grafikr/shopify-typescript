import Item from './Item';
import FeaturedImage from './FeaturedImage';

export default interface Product extends Item {
  available: boolean
  compare_at_price_max: string
  compare_at_price_min: string
  image: string | null
  price: string
  price_max: string
  price_min: string
  tags: string[]
  type: string
  variants: []
  vendor: string
  featured_image: FeaturedImage
}
