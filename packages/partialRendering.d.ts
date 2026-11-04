/**
 * Ambient types for `@shopify/partial-rendering`.
 *
 * The package is not published on npm. Shopify makes it available at runtime on
 * storefronts through an import map, so this file declares the module for TypeScript.
 * Types are derived from the runtime source (`partial_rendering-*.js`).
 *
 * Add to your project with a triple-slash directive or `tsconfig.json` `include`:
 *
 *   /// <reference types="@grafikr/shopify-typescript/packages/partialRendering" />
 *
 * @see https://shopify.dev/docs/storefronts/themes/architecture/partials
 */
declare module '@shopify/partial-rendering' {
  /** A named server-rendered region of the page. */
  export type Partial = {
    /** The name given to the `{% partial %}` tag. */
    name: string;
    /** A `Range` spanning the content of the partial. */
    range: Range;
  };

  /**
   * Opaque result of `partials.fetch()`, to be passed to `partials.apply()`.
   * Passing raw HTML to `apply()` throws a `TypeError`.
   */
  export interface PartialUpdate {
    /** The raw HTML response. */
    readonly html: string;
    toString(): string;
  }

  export type FetchOptions = {
    /** Request URL, resolved against `location.href`. Defaults to the current URL. */
    url?: string;
    /** HTTP method. Defaults to `GET`. */
    method?: string;
    body?: BodyInit;
    /** Cancel stale requests. */
    signal?: AbortSignal;
  };

  export type Partials = {
    /**
     * Requests fresh HTML for the named partials (adds `?partials=a,b` to the URL).
     * The last argument may be an options object. Rejects if the response is not ok.
     */
    fetch(
      ...args: [...names: string[], options: FetchOptions] | string[]
    ): Promise<PartialUpdate>;
    /**
     * Replaces matching regions with the fetched content. Preserves focus, selection,
     * form values and scroll position. `scope` limits which partials on the page are replaced.
     */
    apply(update: PartialUpdate, scope?: Element | Document): void;
    /**
     * Fetches and applies partials for the current page URL in one call.
     * Accepts partial names, an element (all partials inside it), or nothing (all partials).
     */
    refresh(...args: string[] | [scope?: Element]): Promise<void>;
    /** Returns the first partial with the given name, or `null` if there is none. */
    get(name: string): Partial | null;
    /** Returns every partial within a scope (an element, otherwise the whole document). */
    getAll(scope?: Element): Array<Partial>;
  };

  export const partials: Partials;
}
