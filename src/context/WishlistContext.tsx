import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";

type WishlistContextValue = {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
};

const WishlistContext =
  createContext<WishlistContextValue | undefined>(undefined);

const storageKey = "lumora-wishlist";

const readWishlist = (): Product[] => {
  try {
    return JSON.parse(
      localStorage.getItem(storageKey) ?? "[]"
    ) as Product[];
  } catch {
    return [];
  }
};

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] =
    useState<Product[]>(readWishlist);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(items)
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,

      toggleWishlist: (product: Product) => {
        setItems((current) => {
          const exists = current.some(
            (item) => item.id === product.id
          );

          if (exists) {
            return current.filter(
              (item) => item.id !== product.id
            );
          }

          return [...current, product];
        });
      },

      isInWishlist: (productId: string) => {
        return items.some(
          (item) => item.id === productId
        );
      },
    }),
    [items]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used within WishlistProvider"
    );
  }

  return context;
}