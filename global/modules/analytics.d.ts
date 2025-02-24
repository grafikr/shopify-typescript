import { RequireAtLeastOne } from 'type-fest';

export type Analytics = {
  publish: (name: string, data: Record<any, any>) => boolean;
  visitor: (
    visitorInfo: RequireAtLeastOne<{ email: string; phone: string }>,
    options: { appId: string },
  ) => boolean;
};
