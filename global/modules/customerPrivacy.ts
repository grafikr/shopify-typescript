export default interface CustomerPrivacy {
  getCCPAConsent(): string
  getRegulation(): string
  getShopPrefs(): {
    limit: string[]
  }
  getTrackingConsent(): string
  isRegulationEnforced(): boolean
  setCCPAConsent(consented: boolean, callback: CallableFunction): void
  setTrackingConsent(consented: boolean, callback: CallableFunction): void
  shouldShowCCPABanner(): boolean
  shouldShowGDPRBanner(): boolean
  userCanBeTracked(): boolean
  userDataCanBeSold(): boolean
}
