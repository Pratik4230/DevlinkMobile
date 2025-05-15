import { ActivityIndicator, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import ThemedText from './ThemedText'

interface ThemedButtonProps {
    content: string,
    onPressed?: () => void,
    isPending?: boolean
}

const ThemedButton = ({ content , onPressed , isPending} : ThemedButtonProps ) => {
  console.log("isp", isPending);
  
  return (
    <Pressable 
    onPress={onPressed}
    style={({pressed}) => [ isPending && {backgroundColor: "black"} , pressed ? styles.btnPressed : styles.btn ]   }
    disabled={isPending}
    > 
    

    <ThemedText style={{ fontWeight: 'bold', fontSize: 17,  }} title>
      { isPending ? <ActivityIndicator color={"white"} />  : content} 
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
    },

    btnPressed: {
      backgroundColor: "black",
      padding: 12,
      borderRadius:10,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10

    }
})