import { products, type Product } from "./dummy"

export function getStorefrontProducts(): Product[] {
  return products.filter((p) => p.status === "live")
}

export function getStorefrontCategories(sellerProducts: Product[]): string[] {
  const unique = Array.from(new Set(sellerProducts.map((p) => p.category)))
  return ["All", ...unique]
}