import {create} from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    sayHello: () => console.log("Hiii"),
    setUser: (user) => set({user: user}),
    setToken: (token) => set({token:token})

}) )