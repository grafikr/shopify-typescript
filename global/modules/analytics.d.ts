/** `T` with every key optional, except that at least one of them is required. */
type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];

export type Analytics = {
  publish: (name: string, data: Record<string, unknown>) => boolean;
  visitor: (
    visitorInfo: RequireAtLeastOne<{ email: string; phone: string }>,
    options: { appId: string },
  ) => boolean;
};
