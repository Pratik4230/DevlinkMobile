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
import Toast from 'react-native-toast-message'
import { useAuthStore } from "../../store/authStore"
import {api} from "../../utils/api"
import {useMutation} from "@tanstack/react-query"
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = () => {

     const [email, setEmail] = useState<string>('')
     const [password, setPassword] = useState <string> ('')

     const {user, sayHello, setUser, setToken } = useAuthStore();

     const loginMutation = useMutation({
       mutationFn: async (data : {email: string, password: string}) => {
        const response = await api.post("/user/login", data);
        return response.data;
       },
       onSuccess: (data: any) => {
        console.log("Data is : " , data);
        Toast.show({
          type: "success",
          text1: data?.message ?? "Login Successful"
        });

        setUser(data.data);
        setToken(data.token)

        const loggedInUser = JSON.stringify(data.token) 

         AsyncStorage.setItem('token', data.token);
         AsyncStorage.setItem('User', data.data )
       },
       onError: (error: any) => {
        console.log(" Error is : ", error);
        Toast.show({
          type: "error",
          text1: error.response.data.message ?? "Login Failed"
        })
       }
     })

    const handleLogin = () => {
        console.log("Login button pressed")
        console.log("Email: ", email)
        console.log("Password: ", password);

        loginMutation.mutate({email: email, password: password})
        
    }

    

  return (
    <ThemedView style={[styles.container]}  >
        <ThemedView  style={[styles.innerContainer]} >
        <ThemedText title={true} style={[styles.headText]} > Welcome Back !!! </ThemedText>

        <Spacer height={40} />

        <ThemedView  >
          <ThemedLabel  > Email </ThemedLabel>
            <ThemedInput value={email} setValue={setEmail} placeholder={"Enter your Email"}  type={"email-address"}  />
        </ThemedView>
<ThemedText> {user?.name} </ThemedText>
<ThemedText> {user?.name} </ThemedText>
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