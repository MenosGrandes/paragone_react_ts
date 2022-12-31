import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ProductTypeE, IProduct, IStore, ITicket, IPrice, IProductPriceWeight, IWeight, IProductAndPriceViewSettings } from "./TicketI";


export class Weight implements IWeight {
  value: number;
  constructor(value: number) {
    this.value = value;
  }

}

export class Product implements IProduct {
  id: string;
  name: string;
  product_type: ProductTypeE;
  constructor(name: string, type: ProductTypeE) {
    this.id = uuidv4();
    this.name = name;
    this.product_type = type;
  }
}
export class Price implements IPrice {
  value: number;
  cheeper: boolean;
  constructor(price: number, naPromocji: boolean) {
    this.value = price;
    this.cheeper = naPromocji;
  }

}

export class ProductAndPrice implements IProductPriceWeight {
  product: IProduct;
  price: IPrice;
  weight: IWeight;
  id: string;
  viewSettings: IProductAndPriceViewSettings;
  constructor(product: IProduct, price: IPrice, weight: IWeight) {
    this.id = uuidv4();
    this.product = product;
    this.price = price;
    this.weight = weight;
    this.viewSettings = new ProductAndPriceViewSettings(false);

  }

}
export class ProductAndPriceViewSettings implements IProductAndPriceViewSettings {
  isExpanded: boolean;

  constructor(isExpanded: boolean) {
    this.isExpanded = isExpanded;
  }
}
export class StoreD implements IStore {
  id: string;
  name: string;
  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }
}
export class TicketD implements ITicket {
  purchase_date: Date;
  store: IStore;
  id: string;
  name: string;
  products: Array<IProductPriceWeight>;
  constructor(purchaseDate: Date, store: IStore, name: string) {
    this.id = uuidv4();
    this.purchase_date = purchaseDate;
    this.store = store;
    this.name = name;
    this.products = [];
  }
  addProduct(product: IProductPriceWeight) {
    this.products.push(product)
  }
}
