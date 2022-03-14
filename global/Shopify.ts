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
  OptionSelectorsFromDOM: FunctionConstructor
  loadFeatures: (features: any[], callback: CallableFunction) => void
  customerPrivacy?: (consented: boolean, callback: CallableFunction) => void
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
    i18n: {
      continue_button: {
        continue_to_payment_method: string
        continue_to_shipping_method: string
      }
      orders: {
        complete_order: string
        order_updates: { title: string }
        pay_now: string
      }
      qr_code: {
        send_link_to_phone: string
        subtitle: string
        title: string
      }
      shipping_line: {
        no_pickup_location: string
        pickup_in_store_label: string
        shipping_default_value: string
        shipping_free_value: string
        shipping_label: string
      }
    }
    isCheckoutOne: boolean
    locale: string
    moneyFormat: string
    normalizedLocale: string
    page: 'show' | 'thank_you'
    releaseStage: string
    requiresConfirmationStep: boolean
    requiresShipping: boolean
    step: 'contact_information' | 'shipping_method' | 'payment_method' | 'processing' | 'thank_you'
    token: string
  }
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
