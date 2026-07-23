import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";

export type Order = { id: string; items: Array<Product & { quantity: number }>; total: number; createdAt: string; status: "Confirmed" | "Delivered" };
type OrderContextValue = { orders: Order[]; placeOrder: (items: Array<Product & { quantity: number }>) => Order };
const OrderContext = createContext<OrderContextValue | undefined>(undefined);
const storageKey = "lumora-orders";
const readOrders = (): Order[] => { try { return JSON.parse(localStorage.getItem(storageKey) ?? "[]") as Order[]; } catch { return []; } };

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(readOrders);
  useEffect(() => localStorage.setItem(storageKey, JSON.stringify(orders)), [orders]);
  const value = useMemo(() => ({ orders, placeOrder: (items: Array<Product & { quantity: number }>) => {
    const order: Order = { id: `LMR${Date.now().toString().slice(-8)}`, items, total: items.reduce((sum, item) => sum + item.price * item.quantity, 0), createdAt: new Date().toISOString(), status: "Confirmed" };
    setOrders((current) => [order, ...current]);
    return order;
  } }), [orders]);
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}
// eslint-disable-next-line react-refresh/only-export-components
export function useOrders() { const context = useContext(OrderContext); if (!context) throw new Error("useOrders must be used within OrderProvider"); return context; }
