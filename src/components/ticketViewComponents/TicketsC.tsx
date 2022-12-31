import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native';
import { IIsVisible, IProduct, ITicket, ProductTypeE } from '../../dataClass/TicketI';
import TicketC from './TicketC';
import * as constants from '../../data'
import axios from 'axios';


const TicketsC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(constants.GET_ALL_TICKET_ENDPOINT).then((response) => { setData(response.data); console.log(response.data); console.log("AFTER USE EFFECT"); }).catch(err => console.error(err))
  }, []);

  {
    if (data.length <= 0) return < View />;
  }
  return (
    <View>

      <FlatList
        data={data}
        renderItem={({ item }) => <TicketC ticket={item} />}
        keyExtractor={(item: ITicket) => item.id}
      />

    </View>
  )
}

export default TicketsC;
