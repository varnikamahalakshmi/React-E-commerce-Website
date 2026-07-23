import type { ReactNode } from "react";
import Header from "./Header";
import CategoryNavigation from "./CategoryNavigation";
import Footer from "./Footer";
import "../Home.css";

function StoreLayout({ children }: { children: ReactNode }) {
  return <><Header /><CategoryNavigation />{children}<Footer /></>;
}

export default StoreLayout;
