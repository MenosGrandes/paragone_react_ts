
import * as IMPL from './dataClass/TicketImpl';
import { IProduct, ITicket, ProductTypeE } from './dataClass/TicketI';

const aldi_s: IMPL.StoreD = new IMPL.StoreD("Aldi");

var randomstring = require("randomstring");



function generateRandomProductAndPrice() {

  return new IMPL.ProductAndPrice(new IMPL.Product(randomstring.generate(10), ProductTypeE.FOOD),
    new IMPL.Price(11, false),
    new IMPL.Weight(20));
}
function generateRandomTicket() {
  let ticket: IMPL.TicketD = new IMPL.TicketD(new Date(), aldi_s, "TicketName "+ randomstring.generate(5));
  for (let i = 0; i <3; i++) {
    ticket.addProduct(generateRandomProductAndPrice());
  }
  return ticket;
}
export const DATA: Array<IMPL.TicketD> = [...new Array<IMPL.TicketD>(3)].map(() => generateRandomTicket());

