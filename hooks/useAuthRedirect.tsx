import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { router } from 'expo-router';

export function useAuthRedirect() {
  const { user, token } = useAuthStore();

  useEffect(() => {
    if (user && token) {
      // User is logged in, redirect to Feed or main tab
      router.replace('/(tabs)/feed');
    }
  }, [user, token]);
}
