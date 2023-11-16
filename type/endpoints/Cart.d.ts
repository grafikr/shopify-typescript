import type {
  Cart as CartType,
  UpdatedCart as UpdatedCartType,
  CartError as CartErrorType,
} from '../json/Cart';
import type { UpdatedLineItem } from '../json/LineItem';

export type Cart = CartType;

export type CartAdd =
  | UpdatedLineItem
  | {
      items: Array<UpdatedLineItem>;
    };

export type CartChange = UpdatedCartType;

export type CartClear = CartType;

export type CartUpdate = UpdatedCartType;

export type CartError = CartErrorType;
