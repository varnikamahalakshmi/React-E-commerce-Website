import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Supplier from "./Supplier";
import { SupplierInfoPage } from "./Supplier";
import CategoryPage from "./pages/CategoryPage";
import { dropdownItems } from "./data/navigation";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import { AuthPage, OrdersPage, ProfilePage, WishlistPage } from "./pages/AccountPages";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/supplier" element={<Supplier />} />
      <Route path="/supplier/:page" element={<SupplierInfoPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/register" element={<AuthPage mode="register" />} />
      {dropdownItems.map((item) => (
        <Route key={item.path} path={item.path} element={<CategoryPage item={item} />} />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
