import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/components/UI/ThemedView'
import ThemedText from '@/components/UI/ThemedText'
import ThemedLabel from '@/components/UI/ThemedLabel'
import ThemedInput from '@/components/UI/ThemedInput'
import Spacer from '@/components/UI/Spacer'
import ThemedButton from '@/components/UI/ThemedButton'
import { Colors } from '@/constants/Colors'
import { Link } from 'expo-router'

const register = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleRegister = () => {
        console.log("Register button pressed")
        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Password: ", password);
    }

  return (
    <ThemedView  style={styles.container}> 
      

 <ThemedView style={styles.innerContainer} >
      <ThemedText title={true}  style={styles.headText} > Welcome to Devlink </ThemedText>

<Spacer height={40} />

   <ThemedView>
     <ThemedLabel> Full Name </ThemedLabel>
     <ThemedInput value={name} setValue={setName}  placeholder={"Enter your name"}   />
   </ThemedView>

   <Spacer height={15} />

    <ThemedView>
      <ThemedLabel> Email </ThemedLabel>
      <ThemedInput value={email} setValue={setEmail}  placeholder={"Enter your email"} type={"email-address"}  />
      </ThemedView>


<Spacer height={15} />

    <ThemedView>
      <ThemedLabel> Password </ThemedLabel>
      <ThemedInput value={password} setValue={setPassword}  placeholder={"Enter your password"} type={"password"} />
      </ThemedView>

<Spacer height={40} />

  <ThemedButton content='Register' onPressed={handleRegister} />
  <Spacer height={20} />

  <ThemedText style={{textAlign: 'center'}} > Already have an account? <Link href={"/login"} > <ThemedText style={{ color: Colors.blue400, padding:30 }} > Login Now </ThemedText> </Link>  </ThemedText>

 </ThemedView>

    </ThemedView>
  )
}

export default register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       
    },
    innerContainer: {
        padding: 20,
        elevation: 5,
    },

    headText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },


})