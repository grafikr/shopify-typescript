export default interface DiscountApplication {
  type: 'automatic' | 'discount_code' | 'manual' | 'script'
  key: string
  title: string
  description: string | null
  value: number
  created_at: string
  value_type: 'fixed_amount' | 'percentage'
  allocation_method: 'across' | 'each' | 'one'
  target_selection: 'all' | 'entitled' | 'explicit'
  target_type: 'line_item' | 'shipping_line'
  total_allocated_amount: number
}
