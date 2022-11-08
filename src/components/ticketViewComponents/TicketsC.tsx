import React from 'react'
import { FlatList, View, Text } from 'react-native';
import { IProduct, ITicket, ProductTypeE } from '../../dataClass/TicketI';
import * as IMPL from '../../dataClass/TicketImpl';
import TicketC from './TicketC';
const s: IMPL.StoreD = new IMPL.StoreD("Aldi");



const onion : IMPL.Product = new IMPL.Product("Cebula", ProductTypeE.FOOD);
const price : IMPL.Price = new IMPL.Price(12,false);
const pandp : IMPL.ProductAndPrice = new IMPL.ProductAndPrice(onion, price, new IMPL.Weight(20));

let ticket :IMPL.TicketD = new IMPL.TicketD(new Date(), s, "test1");
ticket.addProduct(pandp);
const DATA: Array<IMPL.TicketD> = [new IMPL.TicketD(new Date(), s, "asdsadasdasdsadsad"), new IMPL.TicketD(new Date(), s, "tralalala"), ticket];

import styles from '../../styles/style.css'

const TicketsC= () => {
  return (
    <View>
      <FlatList className={styles.flex} className={styles.Store}
        data={DATA}
        renderItem={({ item }) => <TicketC data={item} />}
        keyExtractor={(item: ITicket) => item.id}
      />
    </View>
  )
}

export default TicketsC;
