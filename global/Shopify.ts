import ProductJSON from '../type/Product';
import ProductObject from '../type/object/Product';
import Image from './modules/Image';
import CustomerPrivacy from './modules/customerPrivacy';

export default interface Shopify {
  CountryProvinceSelector?: (country_domid: string, province_domid: string, options?: {
    hideElement: string
  }) => void
  postLink?: (path: string, options?: {
    method?: string
    parameters?: object
  }) => void
  addListener?: (target: HTMLElement, eventName: string, callback: CallableFunction) => void
  setSelectorByValue?: (selector: HTMLSelectElement, value: any) => number
  Image?: Image
  OptionSelectors?: (selector: string, config: {
    product: ProductJSON | ProductObject
    onVariantSelected: CallableFunction
    enableHistoryState?: boolean
  }) => void
  OptionSelectorsFromDOM?: FunctionConstructor
  loadFeatures: (features: any[], callback: CallableFunction) => void
  customerPrivacy?: CustomerPrivacy
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
  designMode: true | undefined
  routes: {
    root: string
  }
}
