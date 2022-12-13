import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native';
import { IIsVisible, IProduct, ITicket, ProductTypeE } from '../../dataClass/TicketI';
import TicketC from './TicketC';
import * as constants from '../../data'


const TicketsC = () => {
  return (
    <View>
      <FlatList 
        data={constants.DATA}
        renderItem={({ item }) => <TicketC ticket={item} />}
        keyExtractor={(item: ITicket) => item.id}
      />
    </View>
  )
}

export default TicketsC;
