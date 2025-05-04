import { View, Text } from 'react-native'
import React from 'react'
import ThemedView from '@/components/UI/ThemedView'
import Spacer from '@/components/UI/Spacer'
import ThemedText from '@/components/UI/ThemedText'

const index = () => {
  return (
    <ThemedView style={{flex: 1}} >
      <Spacer height={80} />
      <ThemedText  >index</ThemedText>
    </ThemedView>
  )
}

export default index