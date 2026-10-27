export type ShippingRate = {
  name: string;
  presentment_name: string;
  code: string;
  price: string;
  markup: string | null;
  source: string;
  delivery_date: string | null;
  delivery_range: Array<string> | null;
  delivery_days: Array<number>;
  compare_price: unknown;
  phone_required: boolean;
  currency: string | null;
  carrier_identifier: string | null;
  delivery_category: unknown;
  using_merchant_account: boolean | null;
  carrier_service_id: number | null;
  description: string | null;
  additional_data: unknown;
  incoterm: unknown;
  api_client_id: number | null;
  requested_fulfillment_service_id: unknown;
  shipment_options: unknown;
  charge_items: unknown;
  has_restrictions: boolean | null;
  rating_classification: unknown;
  accepts_instructions: boolean;
  metafields: unknown;
};

export type ShippingRates = {
  shipping_rates: Array<ShippingRate>;
};

export type ShippingRatesError = Record<string, Array<string>>;
