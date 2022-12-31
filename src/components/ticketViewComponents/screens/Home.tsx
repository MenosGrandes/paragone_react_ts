import React from 'react'
import { Button, View } from 'react-native'
import TicketsC from '../TicketsC'

export const Home = ({navigation} : {navigation : any}) => {
  return (
    <View >
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <TicketsC/>
    </View>
  )
}
