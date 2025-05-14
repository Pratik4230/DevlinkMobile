import { View, Text, useColorScheme, ColorSchemeName } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '@/constants/Colors'
   import Toast from 'react-native-toast-message';
   import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const  RootLayout  = () => {

 const colorScheme: ColorSchemeName = useColorScheme()
 const theme = Colors[colorScheme ?? "dark"] 


 const queryClient = new QueryClient();

  return (
    <>
<QueryClientProvider client={queryClient}>
    <Stack screenOptions={{
      headerStyle: {backgroundColor: theme.navBackground },
      headerTintColor: theme.title
    }} >

      <Stack.Screen name='(auth)' options={{headerShown: false}} />
     <Stack.Screen name='(tabs)' options={{ headerShown: false }}   />
 
      


    </Stack>
 
        <Toast />
        </QueryClientProvider> 
    </>
  )
}

export default  RootLayout 