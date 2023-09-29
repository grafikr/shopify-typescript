import PreviewImage from './PreviewImage';

export default interface FeaturedMedia {
  alt: string | null;
  id: number;
  position: number;
  preview_image: PreviewImage;
}
