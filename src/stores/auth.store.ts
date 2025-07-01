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
  }),
  actions: {
    async login(user: UserCredentials) {
      this.loading = true;
      try {
        const response = await api.post("/auth/login", user);
        this.token = response.data.token;
        LocalStorageUtils.setItem("token", this.token);
        this.isAuthenticated = true;
        this.user = response.data.user;
        this.success = true;
        this.message = "Login successful";
      } catch (error: any) {
        this.success = false;
        this.message = error.response?.data?.message || "Login failed";
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
    isAuthenticated: (state) => state.isAuthenticated,
    token: (state) => state.token,
  },
});
