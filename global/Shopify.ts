import ProductJSON from '../type/Product';
import ProductObject from '../type/object/Product';

declare global {
  const Shopify: {
    Image: {
      switchImage: CallableFunction
      getSizedImageUrl: (src: string, size: string) => string
      imageSize: (src: string) => string | null
      loadImage: (src: string) => void
      removeProtocol: (url: string) => string
    }
    OptionSelectors: (selector: string, config: {
      product: ProductJSON | ProductObject
      onVariantSelected: CallableFunction
      enableHistoryState: boolean
    }) => void
    OptionSelectorsFromDOM: FunctionConstructor
    currency: {
      active: string
      rate: string
    }
    cdnHost: 'cdn.shopify.com'
    country: string
    locale: string
    formatMoney: (price: string | number, format: string) => string
    money_format: string
    shop: string
  };
}
