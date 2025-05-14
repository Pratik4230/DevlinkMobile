import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const AuthLayout = () => {
  return (
    <Tabs 
        screenOptions={
            {
                headerShown: false,
                animation: "none",
                
                
            }}
    >
       
        <Tabs.Screen name='register' options={{headerShown: false}} />
        <Tabs.Screen name='login' options={{headerShown: false}} />
    </Tabs>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})