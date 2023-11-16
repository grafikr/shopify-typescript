import { Article as ArticleType } from '../json/Search/Article';
import { Collection as CollectionType } from '../json/Search/Collection';
import { Page as PageType } from '../json/Search/Page';
import { Product as ProductType } from '../json/Search/Product';

export type Suggest = {
  resources: {
    results: {
      queries?: Array<{
        url: string;
        text: string;
        styled_text: string;
      }>;
      articles?: Array<ArticleType>;
      collections?: Array<CollectionType>;
      pages?: Array<PageType>;
      products?: Array<ProductType>;
    };
  };
};
