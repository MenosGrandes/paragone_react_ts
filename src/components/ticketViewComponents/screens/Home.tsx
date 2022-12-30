import React from 'react'
import { Button, View } from 'react-native'

export const Home = ({navigation} : {navigation : any}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}
