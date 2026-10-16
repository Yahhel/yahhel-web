"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useAuthStore } from "../../stores/auth.store";
import { sellerAuthKeys } from "./keys";
import { sellerAuthService } from "./service";

export function useSignIn() {
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: sellerAuthService.signIn,
    onSuccess: (session) => {
      setSession(session);
    },
  });
}

export function useSignUp() {
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: sellerAuthService.signUp,
    onSuccess: (session) => {
      setSession(session);
    },
  });
}

export function useSellerMe() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: sellerAuthKeys.me(),
    queryFn: sellerAuthService.me,
    enabled: Boolean(accessToken),
  });
}

export function useSellerVerifyEmail() {
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: sellerAuthService.verifyEmail,
    onSuccess: (session) => {
      setSession(session);
    },
  });
}

export function useSellerForgotPassword() {
  return useMutation({
    mutationFn: sellerAuthService.forgotPassword,
  });
}

export function useSellerChangePassword() {
  const clearSession = useAuthStore((state) => state.clearSession);

  return useMutation({
    mutationFn: sellerAuthService.changePassword,
    onSuccess: () => {
      clearSession();
    },
  });
}


export function useSignOut() {
  const queryClient = useQueryClient();
  const clearSession = useAuthStore((state) => state.clearSession);

  return useMutation({
    mutationFn: sellerAuthService.signOut,
    onSettled: () => {
      clearSession();
      queryClient.clear();
    },
  });
}
