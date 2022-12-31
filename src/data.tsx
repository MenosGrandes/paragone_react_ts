import * as IMPL from './dataClass/TicketImpl';
import { ProductTypeE } from './dataClass/TicketI';

const aldi_s: IMPL.StoreD = new IMPL.StoreD("Aldi");
const ENDPOINT_IP = "http://192.168.1.156:8086"
const GET_ALL_TICKETS_GET = "/get_all_tickets"


export const GET_ALL_TICKET_ENDPOINT = ENDPOINT_IP + GET_ALL_TICKETS_GET;

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
export const DATA: Array<IMPL.TicketD> = [...new Array<IMPL.TicketD>(1)].map(() => generateRandomTicket());

