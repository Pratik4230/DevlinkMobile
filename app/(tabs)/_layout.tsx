import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const  TabsLayout  = () => {
  return (
    <Tabs>
        <Tabs.Screen name='feed' options={{}} />
                <Tabs.Screen name='connection' options={{}} />
                        <Tabs.Screen name='jobs' options={{}} />
                                <Tabs.Screen name='chat' options={{}} />
    </Tabs>
  )
}

export default  TabsLayout 

const styles = StyleSheet.create({})