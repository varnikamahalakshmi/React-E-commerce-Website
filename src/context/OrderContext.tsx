import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";

export type OrderStatus = "Confirmed" | "Delivered" | "Cancelled";

export type Order = {
  id: string;
  items: Array<Product & { quantity: number }>;
  total: number;
  createdAt: string;
  status: OrderStatus;
  paymentMethod: "COD" | "UPI" | "Card";
};

type OrderContextValue = {
  orders: Order[];
  placeOrder: (
    items: Array<Product & { quantity: number }>,
    paymentMethod: "COD" | "UPI" | "Card"
  ) => Order;
  cancelOrder: (orderId: string) => void;
};

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

const storageKey = "lumora-orders";

const readOrders = (): Order[] => {
  try {
    return JSON.parse(
      localStorage.getItem(storageKey) ?? "[]"
    ) as Order[];
  } catch {
    return [];
  }
};

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(readOrders);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(orders));
  }, [orders]);

  const value = useMemo(
    () => ({
      orders,

      placeOrder: (
        items: Array<Product & { quantity: number }>,
        paymentMethod: "COD" | "UPI" | "Card"
      ) => {
        const order: Order = {
          id: `LMR${Date.now().toString().slice(-8)}`,

          items,

          total: items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),

          createdAt: new Date().toISOString(),

          status: "Confirmed",

          paymentMethod,
        };

        setOrders((current) => [order, ...current]);

        return order;
      },

      cancelOrder: (orderId: string) => {
        setOrders((current) =>
          current.map((order) =>
            order.id === orderId
              ? { ...order, status: "Cancelled" }
              : order
          )
        );
      },
    }),
    [orders]
  );

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrders must be used within OrderProvider"
    );
  }

  return context;
}