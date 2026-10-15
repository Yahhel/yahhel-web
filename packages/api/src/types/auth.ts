export type SellerUser = {
  id: string;
  email: string;
  name?: string | null;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type AuthSession = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
  sellerIntent: boolean;
  accessToken: string;
  refreshToken?: string;
};

export type VerifyEmailPayload = {
  email: string;
  token: string;
}