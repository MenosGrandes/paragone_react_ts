import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITicket } from '../../dataClass/TicketI';
import StoreC from './StoreC';

import styles from '../../styles/style.css'
import ProductsC from './ProductsC';
import { TicketD } from '../../dataClass/TicketImpl';

const TicketC = ({ data }: { data: TicketD}) => (
  <View>
    <Text className={styles.red}> {data.name}</Text>
    <StoreC data={data.store} />
    <ProductsC data={data.products} />
  </View>
);

export default TicketC;

