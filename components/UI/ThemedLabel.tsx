import { useColorScheme, Text, StyleSheet} from 'react-native'

import React from 'react'
import { Colors } from '@/constants/Colors'


const ThemedLabel = ({style , title = false,  ...props} : any) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme ?? "dark"]

    const textColor = title ? theme.title : theme.text

  return (
    <Text style={[ styles.label , { color: textColor }, style]}
    {...props}
    />
   
  )
}

export default ThemedLabel

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,

    }
})