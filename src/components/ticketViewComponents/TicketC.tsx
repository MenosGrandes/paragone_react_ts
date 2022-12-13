import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITicket } from '../../dataClass/TicketI';
import StoreC from './StoreC';

import ProductsC from './ProductsC';
import { useTailwind } from 'tailwind-rn';
const TicketC = ({ ticket }: { ticket: ITicket }) => {
  	const tailwind = useTailwind();
  return (
    <View>
      <Text style={tailwind('text-blue-600')}> {ticket.name}</Text>
      <StoreC store={ticket.store} />
      <ProductsC data={ticket.products} />
    </View>
  );
}
export default TicketC;

