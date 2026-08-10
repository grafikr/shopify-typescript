import type { ProductImage } from './ProductImage';
import type { ProductOption } from './ProductOption';
import type { ProductVariant } from './ProductVariant';

export type Product = {
  id: number;
  title: string;
  body_html: string | null;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string;
  published_scope: string;
  tags: string;
  variants: Array<ProductVariant>;
  options: Array<ProductOption>;
  images: Array<ProductImage>;
  image: ProductImage;
};
