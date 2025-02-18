import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const isAuth = ref(false);

    return { isAuth };
});
