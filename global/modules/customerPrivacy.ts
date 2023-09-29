type YesNo = '' | 'yes' | 'no';

export default interface CustomerPrivacy {
  analyticsProcessingAllowed(): boolean;
  currentVisitorConsent(): {
    marketing: YesNo;
    analytics: YesNo;
    preferences: YesNo;
    sale_of_data: YesNo;
    gpc: YesNo;
  };
  doesMerchantSupportGranularConsent(): boolean;
  firstPartyMarketingAllowed(): boolean;
  getCCPAConsent(): YesNo;
  getRegulation(): string;
  getShopPrefs(): { limit: Array<string> };
  getTrackingConsent(): YesNo;
  isRegulationEnforced(): boolean;
  preferencesProcessingAllowed(): boolean;
  saleOfDataRegion(): boolean;
  setCCPAConsent(consent: boolean, callback: () => void): void;
  setTrackingConsent(
    consent: {
      analytics?: boolean;
      marketing?: boolean;
      preferences?: boolean;
      sale_of_data?: boolean;
    },
    callback: () => void,
  ): void;
  shouldShowBanner(): boolean;
  thirdPartyMarketingAllowed(): boolean;

  /** @deprecated Use consent as an object instead */
  setTrackingConsent(consent: boolean, callback: () => void): void;
  /** @deprecated Use saleOfDataRegion instead */
  shouldShowCCPABanner(): boolean;
  /** @deprecated Use shouldShowBanner instead */
  shouldShowGDPRBanner(): boolean;
  /** @deprecated */
  userCanBeTracked(): boolean;
  /** @deprecated */
  userDataCanBeSold(): boolean;
}
