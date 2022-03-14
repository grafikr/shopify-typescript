import ProductJSON from '../type/Product';
import ProductObject from '../type/object/Product';

export default interface Shopify {
  CountryProvinceSelector: (country_domid: string, province_domid: string, options?: {
    hideElement: string
  }) => void
  postLink: (path: string, options?: {
    method?: string
    parameters?: object
  }) => void
  addListener: (target: HTMLElement, eventName: string, callback: CallableFunction) => void
  setSelectorByValue: (selector: HTMLSelectElement, value: any) => number
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
    enableHistoryState?: boolean
  }) => void
  Checkout: {
    Autocomplete: boolean
    DefaultAddressFormat: string
    allowlistedHostSuffixes: string[]
    allowlistedUrls: string[]
    apiHost: string
    applePayConfig: any // TODO: Correct this
    assetsPath: string
    cartToken: string
    currency: string
    customer: any // TODO: Correct this
    deployStage: string
    dynamicCheckoutPaymentInstrumentsConfig: any // TODO: Correct this
    estimatedPrice: number
    geolocatedAddress: {
      lat: number
      lng: number
    }
    hasSellingPlan: boolean
    i18n: any // TODO: Correct this
    isCheckoutOne: boolean
    locale: string
    moneyFormat: string
    normalizedLocale: string
    page: string // TODO: use "show" | "etc"
    releaseStage: string
    requiresConfirmationStep: boolean
    requiresShipping: boolean
    step: 'contact_information' | 'etc'
    token: string
  }
  OptionSelectorsFromDOM: FunctionConstructor
  loadFeatures: (features: any[], callback: CallableFunction) => void
  customerPrivacy?: (consented: boolean, callback: CallableFunction) => void
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
}
