export const sellerAuthKeys = {
  all: ["seller", "auth"] as const,
  me: () => [...sellerAuthKeys.all, "me"] as const,
};
