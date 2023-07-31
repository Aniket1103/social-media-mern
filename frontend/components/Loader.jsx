import { View, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <ActivityIndicator size={49} color={"grey"}/>
    </View>
  )
}