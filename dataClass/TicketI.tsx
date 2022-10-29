
export interface IStore {
  id: string;
  name: string;
}
enum ProductTypeE {
  FOOD,
  SPORTS,
}
export interface IProduct {
  name: string;
  type: ProductTypeE;
}
export interface IPrice {
  price: number;
  naPromocji: boolean;
}
export interface ProductAndPrice {
  product: IProduct;
  price: IPrice;
}
export interface ITicket {
  purchaseDate: Date;
  store: IStore;
  id: string;
  name: string;
  products: Array<ProductAndPrice>;
}
