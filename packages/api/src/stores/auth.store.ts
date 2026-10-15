"use client";

import { deleteCookie, setCookie } from "cookies-next";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { AUTH_COOKIE_NAME } from "../lib/constants";
import type { AuthSession } from "../types/auth";

type AuthState = {
  user: AuthSession | null;
  accessToken: string | null;
  setSession: (session: AuthSession) => void;
  clearSession: () => void;
};

const memoryStorage: Storage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
  key: () => null,
  length: 0,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      setSession: (session) => {
        setCookie(AUTH_COOKIE_NAME, session.accessToken, { path: "/" });
        set({ user: session, accessToken: session.accessToken });
      },
      clearSession: () => {
        deleteCookie(AUTH_COOKIE_NAME, { path: "/" });
        set({ user: null, accessToken: null });
      },
    }),
    {
      name: "vaad-seller-auth",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
      }),
    },
  ),
);
