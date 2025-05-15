// app/_layout.tsx

import { Stack } from 'expo-router';
import { useColorScheme, ColorSchemeName } from 'react-native';
import { Colors } from '@/constants/Colors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import React from 'react';

const RootLayout = () => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const theme = Colors[colorScheme ?? 'dark'];
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <Toast />
    </QueryClientProvider>
  );
};

export default RootLayout;
