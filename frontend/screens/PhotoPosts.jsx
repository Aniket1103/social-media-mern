import { View, Text } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import Header from '../components/Header'
import PhotoCard from '../components/PhotoCard'
import React from 'react'

export default function PhotoPosts() {
  return (
    <ScreenWrapper>
      <Header />
      <PhotoCard />
    </ScreenWrapper>
  )
}