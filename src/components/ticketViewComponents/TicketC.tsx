import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITicket } from '../../dataClass/TicketI';
import StoreC from './StoreC';

import ProductsC from './ProductsC';
import styles from '../../styles/style.css'
const TicketC = ({ ticket }: { ticket: ITicket }) => (
  <View>
    <Text className={styles.red}> {ticket.name}</Text>
    <StoreC store={ticket.store} />
    <ProductsC data={ticket.products} />
  </View>
);

export default TicketC;

