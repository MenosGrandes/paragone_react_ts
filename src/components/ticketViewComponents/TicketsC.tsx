import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native';
import { IIsVisible, IProduct, ITicket, ProductTypeE } from '../../dataClass/TicketI';
import TicketC from './TicketC';
import * as constants from '../../data'

import styles from '../../styles/style.css'

const TicketsC = () => {
  return (
    <View>
      <FlatList className={styles.flex} 
        data={constants.DATA}
        renderItem={({ item }) => <TicketC ticket={item} />}
        keyExtractor={(item: ITicket) => item.id}
      />
    </View>
  )
}

export default TicketsC;
