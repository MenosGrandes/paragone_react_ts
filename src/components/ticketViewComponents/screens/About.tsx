
import React from 'react'
import { Button, View } from 'react-native'

export const About = ({navigation} : {navigation : any}) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}