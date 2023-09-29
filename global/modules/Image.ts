export default interface Image {
  switchImage: CallableFunction;
  getSizedImageUrl: (src: string, size: string) => string;
  imageSize: (src: string) => string | null;
  loadImage: (src: string) => void;
  removeProtocol: (url: string) => string;
}
