export const sellerAuthEndpoints = {
  signIn: "/auth/login",
  signUp: "/auth/signup",
  signOut: "/auth/logout",
  me: "/auth/me",
  verifyEmail: "/auth/verify-email/public",
  forgotPassword: "/auth/forgot-password/public",
  changePassword: "/auth/reset-password/public"
} as const;
