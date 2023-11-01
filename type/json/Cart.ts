import { LineItem, UpdatedLineItem } from './LineItem';
import { DiscountApplication } from './DiscountApplication';

export type Cart = {
  token: string;
  note: string | null;
  attributes: Record<string, any>;
  original_total_price: number;
  total_price: number;
  total_discount: number;
  total_weight: number;
  item_count: number;
  items: Array<LineItem>;
  requires_shipping: boolean;
  currency: string;
  items_subtotal_price: number;
  cart_level_discount_applications: Array<DiscountApplication>;
};

export type UpdatedCart = Omit<Cart, 'cart_level_discount_applications'> & {
  items_added: Array<UpdatedLineItem>;
  items_removed: Array<UpdatedLineItem>;
  cart_level_discount_applications: Array<{
    amount: number;
    discount_application: DiscountApplication
  }>;
};

export type CartError = {
  description: string;
  message: string;
  status: number;
};
