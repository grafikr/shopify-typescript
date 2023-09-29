import LineItem from './LineItem';
import DiscountApplication from './DiscountApplication';

export default interface Cart {
  token: string;
  note: string | null;
  attributes: { [key: string]: string | boolean } | null;
  original_total_price: number;
  total_price: number;
  total_discount: number;
  total_weight: number;
  item_count: number;
  items: LineItem[];
  requires_shipping: boolean;
  currency: string;
  items_subtotal_price: number;
  cart_level_discount_applications: DiscountApplication[];
}
