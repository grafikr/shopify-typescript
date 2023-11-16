import type { Product as ProductType } from '../json/Product';

export type Product = {
  product: ProductType;
};

export type Products = {
  products: Array<ProductType>; // TODO: Fix types
};

export type Recommendations = {
  products: Array<ProductType>;
  intent: 'related' | 'complementary';
};
