export const sellerAuthEndpoints = {
  signIn: "/auth/login",
  signUp: "/auth/signup",
  signOut: "/auth/logout",
  me: "/auth/me",
  verifyEmail: "/auth/verify-email/public"
} as const;
