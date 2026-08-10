import { RequireAtLeastOne } from 'type-fest';

export type Analytics = {
  publish: (name: string, data: Record<string, unknown>) => boolean;
  visitor: (
    visitorInfo: RequireAtLeastOne<{ email: string; phone: string }>,
    options: { appId: string },
  ) => boolean;
};
