import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { router } from 'expo-router';

export function useAuthRedirect() {
  const { user, token } = useAuthStore();

  useEffect(() => {
    if (user && token) {
      // If user is already authenticated, immediately redirect to main feed
      router.replace('/(tabs)/feed');
    }
  }, [user, token]);
}
