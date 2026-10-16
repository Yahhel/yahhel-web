import { products, type Product } from "./dummy"

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category && p.status === "live")
    .slice(0, limit)
}

export function getStorefrontProducts(): Product[] {
  return products.filter((p) => p.status === "live")
}

export function getStorefrontCategories(sellerProducts: Product[]): string[] {
  const unique = Array.from(new Set(sellerProducts.map((p) => p.category)))
  return ["All", ...unique]
}


export function searchProducts(products: Product[], query: string): Product[] {
  const q = query.trim().toLowerCase()
  if (!q) return products

  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  )
}