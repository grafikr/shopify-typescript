/**
 * The public API, imported the way consumers import it: by package name, through
 * the `exports` map in package.json.
 */
import type {
  Endpoints,
  Entity,
  Js as JsNamespace,
  ResponseOf,
} from '@grafikr/shopify-typescript';
import type { ResponseOf as EndpointsResponseOf } from '@grafikr/shopify-typescript/endpoints';
import type { CustomEvents } from '@grafikr/shopify-typescript/global/CustomEvents';
import type { Shopify } from '@grafikr/shopify-typescript/global/Shopify';
import type * as Js from '@grafikr/shopify-typescript/js';
import type * as Json from '@grafikr/shopify-typescript/json';
import type * as Liquid from '@grafikr/shopify-typescript/liquid';

/** `true` when `A` and `B` are the same type. */
type Same<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

export const rootNamespace: Same<JsNamespace.Cart, Js.Cart> = true;
export const endpoint: Same<Endpoints['/cart.js'], Js.Cart> = true;
export const responseOf: Same<ResponseOf<'/cart.json'>, Json.Cart> = true;
export const endpointsEntry: Same<
  EndpointsResponseOf<'/cart.json'>,
  Json.Cart
> = true;
export const entity: Same<Entity<'liquid', 'Product'>, Liquid.Product> = true;

export const sectionLoad: Same<
  CustomEvents['shopify:section:load'],
  { sectionId: string }
> = true;

type Visitor = Parameters<Shopify['analytics']['visitor']>[0];
export const visitorEmail: Visitor = { email: 'a@example.com' };
export const visitorPhone: Visitor = { phone: '+4512345678' };
// @ts-expect-error `visitor` needs an email or a phone
export const visitorNeither: Visitor = {};
