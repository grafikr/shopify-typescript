import { PreviewImage } from './PreviewImage';

export type Media = {
  alt: string | null;
  id: number;
  position: number;
  preview_image: PreviewImage;
  aspect_ratio: number;
  height: number;
  media_type: string;
  src: string;
  width: number;
};
