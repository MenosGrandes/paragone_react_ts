
export interface IStore {
  id: string;
  name: string;
}
export enum ProductTypeE {
  FOOD,
  SPORTS,
}
export interface IProduct {
  id: string;
  name: string;
  product_type: ProductTypeE;
}
export interface IWeight
{
  value: number
}
export interface IPrice {
  value : number;
  cheeper: boolean;
}

export interface IProductPriceWeight {
  product: IProduct;
  price: IPrice;
  weight: IWeight;
}
export interface ITicket {
  id: string;
  purchase_date: Date;
  store: IStore;
  name: string;
  products: Array<IProductPriceWeight>;
}


export interface IIsVisible {
  isVisible: boolean;
}
