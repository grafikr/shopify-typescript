export default interface Item {
  id: number
  properties: { [key: string]: any } | null
  quantity: number
  variant_id: number
  key: string
  title: string
  price: number
  original_price: number
  discounted_price: number
  line_price: number
  original_line_price: number
  total_discount: number
  discounts: [{
    amount: number
    title: string
  }]
  sku: string
  grams: number
  vendor: string
  taxable: boolean
  product_id: number
  product_has_only_default_variant: boolean
  gift_card: boolean
  final_price: number
  final_line_price: number
  url: string
  featured_image: {
    aspect_ratio: number
    alt: string
    height: number
    url: string
    width: number
  }
  image: string
  handle: string
  requires_shipping: boolean
  product_type: string
  product_title: string
  product_description: string
  variant_title: string
  variant_options: string[]
  options_with_values: [{
    name: string
    value: string
  }]
  line_level_discount_allocations: any[]
  line_level_total_discount: number
}
