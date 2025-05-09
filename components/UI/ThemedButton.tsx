import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import ThemedText from './ThemedText'

interface ThemedButtonProps {
    content: string,
    onPressed: () => void,
}

const ThemedButton = ({ content , onPressed } : ThemedButtonProps ) => {
  return (
    <Pressable 
    onPress={onPressed}
    style={({pressed}) =>  [styles.btn] }> 
    

    <ThemedText style={{ fontWeight: 'bold', fontSize: 17,  }} title>
  {content}
</ThemedText>

    </Pressable>

  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.blue500,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        

    }
})