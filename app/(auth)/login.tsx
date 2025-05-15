import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ThemedView from '@/components/UI/ThemedView';
import ThemedText from '@/components/UI/ThemedText';
import ThemedInput from '@/components/UI/ThemedInput';
import ThemedLabel from '@/components/UI/ThemedLabel';
import Spacer from '@/components/UI/Spacer';
import ThemedButton from '@/components/UI/ThemedButton';
import Toast from 'react-native-toast-message';
import { useAuthStore } from '@/store/authStore';
import { api } from '@/utils/api';
import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
// import { useAuthRedirect } from '@/hooks/useAuthRedirect';

const login = () => {

      // useAuthRedirect();

  

  const [email, setEmail] = useState('pratik@gmail.com');
  const [password, setPassword] = useState('Pratik@123');
  const { user, setUser, setToken } = useAuthStore();

setTimeout(() => {
   if (user.email) {
    router.replace("/(tabs)/feed")
  }
},0 )
 

  const loginMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await api.post('/user/login', data);
      return response.data;
    },
    onSuccess: async (data: any) => {
      Toast.show({
        type: 'success',
        text1: data?.message ?? 'Login Successful',
      });

      setUser(data.data);
      setToken(data.token);

      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('user', JSON.stringify(data.data));

      router.replace('/(tabs)/feed');
    },
    onError: (error: any) => {
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.message ?? 'Login Failed',
      });
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView style={styles.container}>
          <ThemedText title style={styles.headText}>
            Welcome Back !!!
          </ThemedText>

          <Spacer height={40} />

          <ThemedLabel>Email</ThemedLabel>
          <ThemedInput
            value={email}
            setValue={setEmail}
            placeholder="Enter your Email"
            type="email-address"
          />

          <Spacer height={15} />

          <ThemedLabel>Password</ThemedLabel>
          <ThemedInput
            value={password}
            setValue={setPassword}
            placeholder="Enter your Password"
            type="password"
          />

          <Spacer height={40} />

          <ThemedButton
            content="Login"
            onPressed={() => loginMutation.mutate({ email, password })}
            isPending={loginMutation.isPending}
          />

          <Spacer height={20} />

          <ThemedText style={styles.centerText}>
            Don’t have an account?{' '}
            <ThemedText
              style={styles.linkText}
              onPress={() => router.replace('/register')}
            >
              Sign Up Now
            </ThemedText>
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    
  },
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  linkText: {
    color: Colors.blue400,
  },
});
