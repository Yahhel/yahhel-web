export type ProductStatus = "live" | "retired";
export type ProductDelivery = "protected" | "download";

export interface Product {
    id: string;
    title: string;
    description: string;
    category: string; 
    coverColors: [string, string];
    status: ProductStatus;
    price: number;
    views: number;
    buyers: number;
    delivery: ProductDelivery;
    revenue: number; 
    publishedAt: string; 
  }

export const products: Product[] = [
    {
      id: "quiet-engineer",
      title: "The Quiet Engineer",
      description: "Essays on craft, systems, and staying sane in Lagos traffic",
      category: "Engineering",
      coverColors: ["#333749", "#262a3a"],
      status: "live",
      price: 1800,
      views: 5214,
      buyers: 313,
      delivery: "protected",
      revenue: 563400,
      publishedAt: "2026-04-20",
    },
    {
      id: "naira-dust-time",
      title: "Naira, Dust, and Time",
      description: "A novella about Lagos and what money costs",
      category: "Fiction",
      coverColors: ["#5c2723", "#6e3430"],
      status: "live",
      price: 3200,
      views: 2893,
      buyers: 156,
      delivery: "protected",
      revenue: 499200,
      publishedAt: "2026-07-01",
    },
    {
      id: "first-draft",
      title: "First Draft",
      description: "How to ship your first book without perfectionism killing it",
      category: "Self-help",
      coverColors: ["#7c7c7c", "#727272"],
      status: "retired",
      price: 600,
      views: 1820,
      buyers: 340,
      delivery: "download",
      revenue: 204000,
      publishedAt: "2025-11-05",
    },
    {
      id: "become-a-billionaire",
      title: "How to become a billionaire",
      description: "Billionaire Mindset",
      category: "Business",
      coverColors: ["#6b2f39", "#8a4c54"],
      status: "live",
      price: 4000,
      views: 2,
      buyers: 0,
      delivery: "protected",
      revenue: 0,
      publishedAt: "2026-08-25",
    },
  ];