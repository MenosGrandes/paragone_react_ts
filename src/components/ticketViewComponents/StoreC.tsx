import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import styles from '../../styles/style.css'
import { StoreD } from '../../dataClass/TicketImpl';
const StoreC = ({ data }: { data: StoreD }) => (
  <View>
    <Text >{data.id}</Text>
  </View>
);

export default StoreC;


