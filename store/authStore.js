import {create} from "zustand";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    sayHello: () => console.log("Hiii"),
    setUser: (user) => set({user: user}),
    setToken: (token) => set({token:token}),

  restoreAuth: async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const user = await AsyncStorage.getItem('user');
      if (token) {
        set({ token });
      }
      if (user) {
        set({ user: JSON.parse(user) });
      }
    } catch (error) {
      console.error('Failed to restore auth state', error);
      set({ token: null, user: null });
    }
  },

   logout: async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    set({ user: null, token: null });
  },

}) )