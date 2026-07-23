import MyRoutes from "./MyRoutes";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return <CartProvider><WishlistProvider><OrderProvider><MyRoutes /></OrderProvider></WishlistProvider></CartProvider>;
}

export default App;
