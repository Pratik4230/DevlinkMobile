import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ThemedView from '@/components/UI/ThemedView';
import ThemedText from '@/components/UI/ThemedText';
import ThemedLabel from '@/components/UI/ThemedLabel';
import ThemedInput from '@/components/UI/ThemedInput';
import Spacer from '@/components/UI/Spacer';
import ThemedButton from '@/components/UI/ThemedButton';
import { Colors } from '@/constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/utils/api';
import Toast from 'react-native-toast-message';
import { useAuthStore } from '@/store/authStore';
import { router } from 'expo-router';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

const RegisterScreen = () => {

    useAuthRedirect();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setToken } = useAuthStore();

 

  const signupMutation = useMutation({
    mutationFn: async (data: {
      fullname: string;
      email: string;
      password: string;
    }) => {
      const response = await api.post('/user/register', data);
      return response.data;
    },
    onSuccess: async (data: any) => {
      Toast.show({
        type: 'success',
        text1: data.message ?? 'Registered Successfully',
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
        text1: error?.response?.data?.message ?? 'Registration Failed!',
      });
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={ { flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}  >
        <ThemedView style={styles.container}>
          <ThemedText title style={styles.headText}>
            Welcome to Devlink
          </ThemedText>

          <Spacer height={40} />

          <ThemedLabel>Full Name</ThemedLabel>
          <ThemedInput
            value={name}
            setValue={setName}
            placeholder="Enter your name"
          />

          <Spacer height={15} />

          <ThemedLabel>Email</ThemedLabel>
          <ThemedInput
            value={email}
            setValue={setEmail}
            placeholder="Enter your email"
            type="email-address"
          />

          <Spacer height={15} />

          <ThemedLabel>Password</ThemedLabel>
          <ThemedInput
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
            type="password"
          />

          <Spacer height={40} />

          <ThemedButton
            content="Register"
            onPressed={() =>
              signupMutation.mutate({ fullname: name, email, password })
            }
            isPending={signupMutation.isPending}
          />

          <Spacer height={20} />

          <ThemedText style={styles.centerText}>
            Already have an account?{' '}
            <ThemedText
              style={styles.linkText}
              onPress={() => router.replace('/login')}
            >
              Login Now
            </ThemedText>
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    
  },
  headText: {
    fontSize: 25,
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
