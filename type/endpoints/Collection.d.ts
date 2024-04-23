import type { Collection as CollectionType } from '../json/Collection';
import type { Product as ProductType } from '../json/Product';
import type { ProductVariant } from '../json/ProductVariant';
import type { ProductOption } from '../json/ProductOption';
import type { ProductImage } from '../json/ProductImage';

export type Collection = {
  collection: CollectionType;
};

export type Collections = {
  collections: Array<CollectionType>;
};

export type Products = {
  products: Array<
    Omit<ProductType, 'variants' | 'tag' | 'image' | 'images' | 'options'> & {
      variants: Array<
        ProductVariant & {
          featured_image: ProductImage | null;
          available: boolean;
        }
      >;
      tags: Array<string>;
      images: Array<Omit<ProductImage, 'alt'>>;
      options: Array<Omit<ProductOption, 'product_id' | 'id'>>;
    }
  >;
};
