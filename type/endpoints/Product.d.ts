import type { Product as ProductType } from '../json/Product';
import type { Product as ProductsListItemType } from '../json/Products/Product';

export type Product = {
  product: ProductType;
};

export type Products = {
  products: Array<ProductsListItemType>;
};

export type Recommendations = {
  products: Array<ProductType>;
  intent: 'related' | 'complementary';
};
