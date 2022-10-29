import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITicket } from '../../dataClass/TicketI';
import StoreC from './StoreC';

const TicketC = ({ data }: { data: ITicket}) => (
  <View
    style={{
      backgroundColor: '#eeeeee',
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}>
    <Text style={{ fontSize: 24 }}>{data.name}</Text>
    <StoreC data={data.store}/>
  </View>
);

export default TicketC;

const styles = StyleSheet.create({})
