import type { Cart as JsonCart } from '../json/Cart';

/** The cart object as output by `{{ cart | json }}` in Liquid. */
export type Cart = Omit<JsonCart, 'token' | 'discount_codes'> & {
  checkout_charge_amount: number;
};
