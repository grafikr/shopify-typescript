import ProductJSON from '../type/Product';
import ProductObject from '../type/object/Product';

declare global {
  const Shopify: {
    Image: {
      getSizedImageUrl: CallableFunction
      imageSize: CallableFunction
      loadImage: CallableFunction
      removeProtocol: CallableFunction
      switchImage: CallableFunction
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
    formatMoney: (price: string | number, format: string) => string
    money_format: string
    shop: string
  };
}
