import { StyleSheet} from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/components/UI/ThemedView'
import ThemedText from '@/components/UI/ThemedText'
import ThemedInput from '@/components/UI/ThemedInput'
import ThemedLabel from '@/components/UI/ThemedLabel'
import Spacer from '@/components/UI/Spacer'
import ThemedButton from '@/components/UI/ThemedButton'
import { Link } from 'expo-router'
import { Colors } from '@/constants/Colors'

const login = () => {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log("Login button pressed")
        console.log("Email: ", email)
        console.log("Password: ", password);
        
    }

  return (
    <ThemedView style={[styles.container]}  >
        <ThemedView  style={[styles.innerContainer]} >
        <ThemedText title={true} style={[styles.headText]} > Welcome Back !!! </ThemedText>

        <Spacer height={40} />

        <ThemedView  >
          <ThemedLabel  > Email </ThemedLabel>
            <ThemedInput value={email} setValue={setEmail} placeholder={"Enter your Email"}  type={"email-address"} />
        </ThemedView>

        <Spacer height={15} />

        <ThemedView>
          <ThemedLabel  > Password </ThemedLabel>
            <ThemedInput value={password} setValue={setPassword} placeholder={"Enter your Password"} type={"password"}  />
        </ThemedView>

        <Spacer height={40} />

     <ThemedButton content='Login' onPressed={handleLogin} />

     <Spacer height={20} />
     <ThemedText style={{textAlign: 'center'}} > Don't have an account? <Link href={"/register"} > <ThemedText style={{ color: Colors.blue400, padding:30 }} > Sign Up Now </ThemedText> </Link>  </ThemedText>

        </ThemedView>
       
    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    innerContainer: {
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: '#0c0a09',
    },
    
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        
        textAlign: 'center',
        padding: 10, 
      },
    
      
    

})