import type { Product as ProductType } from './Product';
import type { ProductVariant } from './ProductVariant';
import type { ProductImage } from './ProductImage';
import type { ProductOption } from './ProductOption';

export type Products = Omit<
  ProductType,
  'variants' | 'tag' | 'image' | 'images' | 'options'
> & {
  variants: Array<
    ProductVariant & {
      featured_image: ProductImage | null;
      available: boolean;
    }
  >;
  tags: Array<string>;
  images: Array<Omit<ProductImage, 'alt'>>;
  options: Array<Omit<ProductOption, 'product_id' | 'id'>>;
};
