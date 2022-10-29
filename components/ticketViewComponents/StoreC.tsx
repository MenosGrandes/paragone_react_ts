import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IStore } from '../../dataClass/TicketI';

const StoreC = ({ data }: { data: IStore}) => (
  <View
    style={{
      backgroundColor: '#eeaabb',
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}>
    <Text style={{ fontSize: 24 }}>{data.name}</Text>
  </View>
);

export default StoreC;


