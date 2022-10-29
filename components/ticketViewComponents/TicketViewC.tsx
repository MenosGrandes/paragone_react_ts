import React from 'react'
import { FlatList, View, Text } from 'react-native';
import { IProduct, ITicket } from '../../dataClass/TicketI';
import { StoreD, TicketD } from '../../dataClass/TicketImpl';
import TicketC from './TicketC';
const s: StoreD = new StoreD("Aldi");
const DATA: Array<TicketD> = [new TicketD(new Date(), s, "lala"), new TicketD(new Date(), s, "tralalala")];
const TicketViewC = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <TicketC data={item} />}
        keyExtractor={(item: ITicket) => item.id}
      />
    </View>
  )
}

export default TicketViewC
