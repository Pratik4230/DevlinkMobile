import { useColorScheme, View } from 'react-native'

import React from 'react'
import { Colors } from '@/constants/Colors'


const ThemedView = ({style , ...props} : any) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme ?? "dark"]

  return (
    <View style={[{backgroundColor: theme.background}, style]}
    {...props}
    />
   
  )
}

export default ThemedView