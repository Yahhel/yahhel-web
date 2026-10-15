import { apiClient } from '../../lib/api-client';
import type {
  AuthSession,
  SignInPayload,
  SignUpPayload,
  VerifyEmailPayload,
} from '../../types/auth';
import { sellerAuthEndpoints } from './endpoints';

export const sellerAuthService = {
  signIn: async (payload: SignInPayload) => {
    const { data } = await apiClient.post<AuthSession>(
      sellerAuthEndpoints.signIn,
      payload,
    );

    return data;
  },
  signUp: async (payload: SignUpPayload) => {
    const { data } = await apiClient.post<AuthSession>(
      sellerAuthEndpoints.signUp,
      payload,
    );

    return data;
  },
  me: async () => {
    const { data } = await apiClient.get<Pick<AuthSession, 'email' | 'firstName' | "lastName">>(
      sellerAuthEndpoints.me,
    );

    return data;
  },
  verifyEmail: async (payload: VerifyEmailPayload) => {
    const { data } = await apiClient.post<AuthSession>(
      sellerAuthEndpoints.verifyEmail,
      payload,
    );

    return data;
  },
  signOut: async () => {
    await apiClient.post(sellerAuthEndpoints.signOut);
  },
};
