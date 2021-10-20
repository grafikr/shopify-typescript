export default interface Image {
  id: number
  product_id: number
  position: number
  created_at: string
  updated_at: string
  alt: string | null
  width: number
  height: number
  src: string
  variant_ids: number[]
}
