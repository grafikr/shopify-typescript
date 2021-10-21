import FeaturedImage from '../search/FeaturedImage';
import FeaturedMedia from './FeaturedMedia';

export default interface Variant {
  id: number
  title: string
  option1: string | null
  option2: string | null
  option3: string | null
  sku: string | null
  requires_shipping: boolean
  taxable: boolean
  featured_image?: FeaturedImage
  featured_media?: FeaturedMedia
  available: boolean
  name: string
  public_title: string | null
  options: string[]
  price: number
  weight: number
  compare_at_price: null | string
  inventory_management: string
  barcode: string | null
}
