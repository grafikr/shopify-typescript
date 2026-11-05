# Shopify TypeScript

TypeScript types for the responses and objects Shopify exposes to themes.

Shopify serves "the same" entity in several formats, and they are **not** the
same: field names, nullability, and even units differ. So there are no shared
types between formats. Each format has its own, fully independent set.

| Import                                  | Where the data comes from                                  |
| --------------------------------------- | ---------------------------------------------------------- |
| `@grafikr/shopify-typescript/liquid`    | `{{ product \| json }}`, `{{ cart \| json }}` in Liquid    |
| `@grafikr/shopify-typescript/json`      | `.json` URLs: `/products/[handle].json`, `/cart.json`, …   |
| `@grafikr/shopify-typescript/js`        | `.js` URLs and the cart API: `/cart.js`, `/cart/add.js`, … |
| `@grafikr/shopify-typescript/endpoints` | One map from URL to response type                          |

Examples of how much they differ:

|                       | Liquid           | `.js`                   | `.json`                     |
| --------------------- | ---------------- | ----------------------- | --------------------------- |
| `product.options`     | `string[]`       | `{ name, values, … }[]` | `{ id, name, values, … }[]` |
| `product.tags`        | `string[]`       | `string[]`              | `string` (comma separated)  |
| `variant.price`       | `number` (cents) | `number` (cents)        | `string` (`"129.00"`)       |
| `product.description` | `description`    | `description`           | `body_html`                 |

## Usage

```ts
import type { Cart } from '@grafikr/shopify-typescript/js';
import type { Product } from '@grafikr/shopify-typescript/liquid';

const cart: Cart = await fetch('/cart.js').then((r) => r.json());
```

Or look the type up from the URL, with `Endpoints`:

```ts
import type { Endpoints } from '@grafikr/shopify-typescript';

type Response = Endpoints['/cart/change.js']; // Js.CartChangeResponse
```

Generic access by format and name, e.g. `Entity<'js', 'Cart'>`, is also
available. `Formats` is an interface, so it can be extended with declaration
merging.

Globals live in `global/`: `window.Shopify` (`@grafikr/shopify-typescript/global/Shopify`)
and the theme editor events (`.../global/CustomEvents`).

## Doc tags

Doc comments use these tags where they help:

| Tag       | Meaning                             | Example                                            |
| --------- | ----------------------------------- | -------------------------------------------------- |
| `@liquid` | The Liquid that outputs it (Liquid) | `@liquid {{ product.variants \| json }}`           |
| `@unit`   | The unit of a numeric field         | `@unit cents`, `@unit grams`, `@unit milliseconds` |
| `@format` | The format of a string field        | `@format decimal-string`                           |

`@unit cents` is an integer in the smallest unit, always scaled by 100, also for
currencies without decimals (`14782600` for 147,826 CLP). `@unit currency-units` is a
decimal amount in whole currency units (`200.0`, or `"200.00"` together with
`@format decimal-string`). In `.json` the decimal places follow the currency, so a
CLP price is `"147826"`.
The tags show up in editor hovers, and are declared in `tsdoc.json` for tools
that validate TSDoc.

## How the types are verified

Everything in `fixtures/` is a real response captured from a Shopify store,
including edge cases (products with no images, no SKU, no description, carts
with discounts, gift cards, error responses, …). `pnpm typecheck` asserts that
every fixture:

1. is assignable to its type, and
2. has no keys the type does not declare.

If Shopify changes a response, or a type is wrong, the typecheck fails.
`tests/enums.test-d.ts` covers string-literal unions, which JSON imports widen.

See [`fixtures/README.md`](fixtures/README.md) for how to capture new fixtures.

## Development

```
pnpm generate    # regenerate tests/fixtures.test-d.ts after adding fixtures
pnpm typecheck
pnpm check       # biome
```

## Migrating from v2

Types moved from `type/{json,liquid,endpoints}/…` to one entry point per
format. Several v2 types were filed under the wrong format (for example
`type/json/Cart` was the `/cart.js` shape, and `type/json/Collection` was the
Liquid shape), so expect some real differences, not only new import paths.
