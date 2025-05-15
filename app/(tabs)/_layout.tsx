import { StyleSheet} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors';

import {Ionicons} from "@expo/vector-icons";

const  TabsLayout  = () => {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.blue400,
      tabBarInactiveTintColor: "#888",
      tabBarStyle: {
        backgroundColor: "black",
        borderTopColor: "blue"
      },

      
    }}
    >

        <Tabs.Screen name='feed' options={{
          title: "Feed",
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
            name={focused ? "home" : "home-outline"}
            size={size}
            color={color}
            />
          ),

        }} />

              <Tabs.Screen
        name="connection"
        options={{
          title: 'Connections',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

 <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'briefcase' : 'briefcase-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

       <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />


    </Tabs>
  )
}

export default  TabsLayout 

const styles = StyleSheet.create({})