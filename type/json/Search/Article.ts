import Item from './Item';
import FeaturedImage from './FeaturedImage';

export default interface Article extends Item {
  author: string
  image: string | null
  published_at: string
  summary_html: string
  tags: string[]
  title: string
  featured_image: FeaturedImage
}
