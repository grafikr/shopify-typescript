import { Cart as CartType, UpdatedCart } from '../json/Cart';
import { UpdatedLineItem } from '../json/LineItem';

export type Cart = CartType;

export type CartAdd =
  | UpdatedLineItem
  | {
      items: Array<UpdatedLineItem>;
    };

export type CartChange = UpdatedCart;

export type CartClear = CartType;

export type CartUpdate = UpdatedCart;
