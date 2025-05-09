import { View, Text, useColorScheme, ColorSchemeName } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '@/constants/Colors'

const  RootLayout  = () => {

 const colorScheme: ColorSchemeName = useColorScheme()
 const theme = Colors[colorScheme ?? "dark"] 

  return (
    <Stack screenOptions={{
      headerStyle: {backgroundColor: theme.navBackground },
      headerTintColor: theme.title
    }} >

      <Stack.Screen name='(auth)' options={{headerShown: false}} />


      


    </Stack>
  )
}

export default  RootLayout 