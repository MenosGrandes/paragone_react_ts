
export interface IStore {
  id: string;
  name: string;
}
export enum ProductTypeE {
  FOOD,
  SPORTS,
}
export interface IProduct {
  name: string;
  type: ProductTypeE;
}
export interface IWeight
{
  value: number
}
export interface IPrice {
  value : number;
  naPromocji: boolean;
}

export interface IProductAndPrice {
  id : string;
  product: IProduct;
  price: IPrice;
  weight: IWeight;
}
export interface ITicket {
  purchaseDate: Date;
  store: IStore;
  id: string;
  name: string;
  products: Array<IProductAndPrice>;
}
