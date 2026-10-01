import type { Product } from "../data/products";

type MeeshoProduct = {
  product_id: string;
  name: string;
  category?: string;
  price: number;
  original_price?: number | null;
  rating?: number | null;
  review_count?: number | null;
  rating_count?: number | null;
  image_url?: string;
  images?: string[];
  description?: string;
  full_details?: string;
};

type MeeshoResponse = {
  data?: {
    data?: {
      products?: MeeshoProduct[];
    };
  };
};
const getPrice = (value: unknown): number => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const cleaned = value.replace(/[₹,\s]/g, "");
    const parsed = Number(cleaned);

    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
};
export async function searchMeeshoProducts(
  query: string
): Promise<Product[]> {
  const response = await fetch(
    `http://localhost:5000/api/meesho/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Meesho products");
  }

  const json: MeeshoResponse = await response.json();

  const products = json.data?.data?.products ?? [];

 return products.map((p) => {
  console.log("API PRODUCT:", p);

  return {
    id: p.product_id,
    title: p.name,
    category: p.category ?? "Other",
    subcategory: p.category ?? "Other",
    price: Number(p.price ?? 0),
    originalPrice: Number(p.original_price ?? p.price ?? 0),
    rating: Number(p.rating ?? 0),
    reviews: Number(p.review_count ?? p.rating_count ?? 0),
    image: p.image_url ?? p.images?.[0] ?? "",
    images: p.images?.length
      ? p.images
      : p.image_url
      ? [p.image_url]
      : [],
    description: p.description ?? p.full_details ?? p.name,
    specifications: p.full_details
      ? p.full_details
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
      : [],
  };
});
}
export async function getMeeshoProductDetails(
  productId: string
): Promise<Product> {
  const response = await fetch(
    `http://localhost:5000/api/meesho/product/${encodeURIComponent(productId)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  const json = await response.json();
  const p = json.data?.data;
  console.log("MEESHO PRODUCT DETAILS:", p);

  return {
    id: p.product_id,
    title: p.name,
    category: p.category ?? "Other",
    subcategory: p.category ?? "Other",
    price: Number(p.price ?? 0),
    originalPrice: Number(p.original_price ?? p.price ?? 0),
    rating: Number(p.rating ?? 0),
    reviews: Number(p.review_count ?? p.rating_count ?? 0),
    image: p.image_url ?? p.images?.[0] ?? "",
    images: p.images ?? [],
    description: p.description ?? p.full_details ?? p.name,
    specifications: p.full_details
      ? p.full_details
        .split("\n")
        .map((s: string) => s.trim())
        .filter(Boolean)
      : [],
  };
}