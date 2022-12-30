import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { IStore } from '../../dataClass/TicketI';
const StoreC = ({ store }: { store: IStore }) => (
  <View>
    <Text >{store.name}</Text>
  </View>
);

export default StoreC;


