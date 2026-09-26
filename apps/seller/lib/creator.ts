import { products } from "./dummy"

export function getCreatorStats() {
    const liveProducts = products.filter((p) => p.status === "live")
    return {
      productCount: liveProducts.length,
      buyerCount: liveProducts.reduce((sum, p) => sum + p.buyers, 0),
      viewCount: liveProducts.reduce((sum, p) => sum + p.views, 0),
    }
  }