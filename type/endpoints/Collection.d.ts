import type { Collection as CollectionType } from '../json/Collection';
import type { Products as ProductsType } from '../json/Products';

export type Collection = {
  collection: CollectionType;
};

export type Collections = {
  collections: Array<CollectionType>;
};

export type Products = {
  products: Array<ProductsType>;
};
