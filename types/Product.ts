import Variant from './Variant';
import Option from './Option';
import Image from './Image';

export default interface Product {
  id: number
  title: string
  body_html: string
  vendor: string
  product_type: string
  created_at: string
  handle: string
  updated_at: string
  published_at: string
  template_suffix: string
  published_scope: string
  tags: string
  variants: Variant[]
  options: Option[]
  images: Image[]
  image: Image
}
