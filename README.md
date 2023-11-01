# Shopify TypeScript

This packages adds TypeScript for all Shopify responses and objects.

### Installation

You can install the package using Yarn:

```
$ yarn install @grafikr/shopify-typescript
```

### Usage

```ts
import type { Product } from '@grafikr/shopify-typescript/type/json/Product';

const func = (data: Product) => {
  ...
};
```

You can have a look in the repository under `global` and `type` folder, to find types you can use.
