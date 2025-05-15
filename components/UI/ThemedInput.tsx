import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const ThemedInput = ({ style, value, setValue, placeholder, type, ...props }: any) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? 'dark']

  return (
    <TextInput
      style={[styles.input, { 
        backgroundColor: theme.inputBackground, 
        color: theme.text, 
        borderColor: theme.border 
      }, style]}
      placeholderTextColor={theme.placeholder}
      {...props}

        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={type == 'password'}
        
        
    />
  )
}

export default ThemedInput

const styles = StyleSheet.create({
  input: {
    height: 48,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 16,
  },
})
