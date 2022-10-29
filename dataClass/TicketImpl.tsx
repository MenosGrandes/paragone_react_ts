import { v4 as uuidv4 } from 'uuid';
import { IStore, ITicket, ProductAndPrice } from "./TicketI";


export class StoreD implements IStore {
  id: string;
  name: string;
  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }
}
export class TicketD implements ITicket {
  purchaseDate: Date;
  store: IStore;
  id: string;
  name: string;
  products: Array<ProductAndPrice>;
  constructor(purchaseDate: Date, store: IStore, name: string) {
    this.purchaseDate = purchaseDate;
    this.store = store;
    this.id = uuidv4();
    this.name = name;
    this.products = [];
  }
}
