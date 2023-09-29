import Item from './Item';
import FeaturedImage from './FeaturedImage';

export default interface Collection extends Item {
  published_at: string;
  featured_image: FeaturedImage;
}
