import api from "@/config/axios";
import type { User, UserCredentials } from "@/models/user";
import { LocalStorageUtils } from "@/utils/local-storage";
import { defineStore } from "pinia";

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  token?: string;
  success?: boolean;
  message?: string;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    loading: false,
    isAuthenticated: false,
    user: null,
    token: LocalStorageUtils.getItem("token"),
  }),
  actions: {
    async login(user: UserCredentials) {
      this.$state.loading = true;
      try {
        const response = await api.post("/auth/login", user);
        // console.log(response.data.data);
        this.$state.token = response.data.data;
        LocalStorageUtils.setItem("token", response.data.data);
        this.isAuthenticated = true;
        // this.user = response.data.user;
        this.success = true;
        this.message = "Login successful";
      } catch (error: any) {
        console.error(error);
        this.success = false;
        this.message = error.message || "Login failed";
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      LocalStorageUtils.removeItem("token");
      useAuthStore().$reset();
    },
  },
  getters: {
    isUserAuthenticated: (state) => state.isAuthenticated,
    token: (state) => state.token,
  },
});
