import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";
type WishlistValue = { items: Product[]; toggle: (product: Product) => void; has: (id: string) => boolean };
const WishlistContext = createContext<WishlistValue | undefined>(undefined);
const readWishlist = (): Product[] => { try { return JSON.parse(localStorage.getItem("lumora-wishlist") ?? "[]") as Product[]; } catch { return []; } };
export function WishlistProvider({ children }: { children: ReactNode }) { const [items, setItems] = useState<Product[]>(readWishlist); useEffect(() => localStorage.setItem("lumora-wishlist", JSON.stringify(items)), [items]); const value = useMemo(() => ({ items, toggle: (product: Product) => setItems((current) => current.some((item) => item.id === product.id) ? current.filter((item) => item.id !== product.id) : [...current, product]), has: (id: string) => items.some((item) => item.id === id) }), [items]); return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>; }
// eslint-disable-next-line react-refresh/only-export-components
export function useWishlist() { const context = useContext(WishlistContext); if (!context) throw new Error("useWishlist must be used within WishlistProvider"); return context; }
