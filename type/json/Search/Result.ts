import Collection from './Collection';
import Page from './Page';
import Product from './Product';

export default interface Result {
  resources: {
    results: {
      collections?: Collection[];
      pages?: Page[];
      products?: Product[];
    };
  };
}
