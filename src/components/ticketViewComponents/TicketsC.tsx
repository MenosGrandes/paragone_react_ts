import React from 'react'
import { FlatList, View, Text } from 'react-native';
import { IProduct, ITicket, ProductTypeE } from '../../dataClass/TicketI';
import * as IMPL from '../../dataClass/TicketImpl';
import TicketC from './TicketC';
import * as constants from '../../data'




import styles from '../../styles/style.css'

const TicketsC= () => {
  return (
    <View>
      <FlatList className={styles.flex} className={styles.Store}
        data={constants.DATA}
        renderItem={({ item }) => <TicketC data={item} />}
        keyExtractor={(item: ITicket) => item.id}
      />
    </View>
  )
}

export default TicketsC;
