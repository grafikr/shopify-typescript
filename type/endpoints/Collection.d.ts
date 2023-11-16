import type { Collection as CollectionType } from '../json/Collection';
import type { Product as ProductType } from '../json/Product';

export type Collection = {
  collection: CollectionType;
};

export type Collections = {
  collections: Array<CollectionType>;
};

export type Products = {
  products: Array<ProductType>;
};
