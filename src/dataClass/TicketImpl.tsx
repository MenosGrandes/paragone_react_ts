import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ProductTypeE, IProduct, IStore, ITicket, IPrice, IProductAndPrice, IWeight, IProductAndPriceViewSettings } from "./TicketI";


export class Weight implements IWeight {
  value: number;
  constructor(value: number) {
    this.value = value;
  }

}

export class Product implements IProduct {
  name: string;
  type: ProductTypeE;
  constructor(name: string, type: ProductTypeE) {
    this.name = name;
    this.type = type;
  }
}
export class Price implements IPrice {
  value: number;
  naPromocji: boolean;
  constructor(price: number, naPromocji: boolean) {
    this.value = price;
    this.naPromocji = naPromocji;
  }

}

export class ProductAndPrice implements IProductAndPrice {
  product: IProduct;
  price: IPrice;
  weight: IWeight;
  id: string;
  viewSettings: IProductAndPriceViewSettings;
  constructor(product: IProduct, price: IPrice, weight: IWeight) {
    this.product = product;
    this.price = price;
    this.weight = weight;
    this.id = uuidv4();
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
    this.name = name;
    this.id = uuidv4();
  }
}
export class TicketD implements ITicket {
  purchaseDate: Date;
  store: IStore;
  id: string;
  name: string;
  products: Array<IProductAndPrice>;
  constructor(purchaseDate: Date, store: IStore, name: string) {
    this.purchaseDate = purchaseDate;
    this.store = store;
    this.id = uuidv4();
    this.name = name;
    this.products = [];
  }
  addProduct(product: IProductAndPrice) {
    this.products.push(product)
  }
}
