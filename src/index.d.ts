import type * as Js from './js';
import type * as Json from './json';
import type * as Liquid from './liquid';

export type { Endpoints, ResponseOf } from './endpoints';
export type { Js, Json, Liquid };

/** Format registry. This is an interface so consumers can extend it with declaration merging. */
export interface Formats {
  js: typeof Js;
  json: typeof Json;
  liquid: typeof Liquid;
}

/** Entity<'js', 'Cart'> */
export type Entity<
  F extends keyof Formats,
  N extends keyof Formats[F],
> = Formats[F][N];
