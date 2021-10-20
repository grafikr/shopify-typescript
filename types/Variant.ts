export default interface Variant {
  id: number
  product_id: number
  title: string
  price: string
  sku: string
  position: number
  compare_at_price: string
  fulfillment_service: string
  inventory_management: string
  option1: string | null
  option2: string | null
  option3: string | null
  created_at: string
  updated_at: string
  taxable: boolean
  barcode: string
  grams: number
  image_id: number | null
  weight: number
  weight_unit: 'g' | 'kg'
  requires_shipping: boolean
}
