import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LikeIcon from "react-native-vector-icons/Octicons";

export default function Like({bottom}) {
  const [ like, setLike ]  = useState(false); 
  return (
    <TouchableOpacity style={{
      position: 'absolute',
      bottom: bottom || 8,
      right: 8,
      backgroundColor: 'transparent',
      padding: 8,
    }} onPress={() => setLike(!like)}>
      {/* Your like button icon */}
      <LikeIcon name={!like ? 'heart' : 'heart-fill'} size={23} color={!like ? "#fff" : "#f44336"}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  likeButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'transparent',
    padding: 8,
  },
})