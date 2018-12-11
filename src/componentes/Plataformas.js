import React from 'react'
import { Button, View, Alert, ToastAndroid, Platform } from 'react-native' 

export default props => {
  const notificar = msg => {
    if(Platform.OS === 'android'){
      ToastAndroid.show(msg, ToastAndroid.LONG)
    } else {
      Alert.alert('Informação', msg)
    }
  }

  return (
    <View style={{flex:1 , marginTop:50}} >
      <Button title='Plataforma?'
        onPress={() => notificar('Congratulations!')}
      />
    </View>
  )
}