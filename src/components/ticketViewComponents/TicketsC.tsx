import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native';
import { IIsVisible, IProduct, ITicket, ProductTypeE } from '../../dataClass/TicketI';
import TicketC from './TicketC';
import * as constants from '../../data'
import useFetch from 'react-fetch-hook';


const TicketsC = () => {
  const { isLoading, data } = useFetch("https://swapi.co/api/people/1");
  return (
    <View>
      {isLoading &&
        <Text> LOADING DATA!</Text>
      }

        <FlatList
          data={constants.DATA}
          renderItem={({ item }) => <TicketC ticket={item} />}
          keyExtractor={(item: ITicket) => item.id}
        />
    </View>
  )
}

export default TicketsC;
