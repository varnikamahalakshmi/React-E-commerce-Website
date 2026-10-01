import { Link, useNavigate } from "react-router-dom";
import StoreLayout from "../components/StoreLayout";
import ProductImage from "../components/ProductImage";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
function CartPage() { const { items, total, updateQuantity, removeFromCart, clearCart } = useCart(); const { placeOrder } = useOrders(); const navigate = useNavigate();
  const listPrice = items.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0); const discount = listPrice - total; const delivery = total >= 499 ? 0 : 49; const finalAmount = total + delivery;
  if (!items.length) return <StoreLayout><main className="empty-state"><h1>Your cart is empty</h1><p>Add your favourites and they will appear here.</p><Link className="primary-button" to="/">Continue shopping</Link></main></StoreLayout>;
const checkout = () => { placeOrder(items, "COD"); clearCart(); navigate("/orders?placed=1"); };
  return <StoreLayout><main className="cart-page"><section><h1>My Cart ({items.length})</h1>{items.map((item) => <article className="cart-item" key={item.id}><ProductImage src={item.image} alt={item.title} /><div><h3>{item.title}</h3><p>{item.category}</p><strong>₹{item.price}</strong><div className="quantity"><button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button><b>{item.quantity}</b><button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button><button className="text-button" onClick={() => removeFromCart(item.id)}>Remove</button></div></div><b>₹{item.price * item.quantity}</b></article>)}</section><aside className="cart-summary"><h2>Price Details</h2><p>Price ({items.length} items) <b>₹{listPrice}</b></p><p>Discount <b className="free">− ₹{discount}</b></p><p>Delivery charges <b>{delivery ? `₹${delivery}` : <span className="free">Free</span>}</b></p><hr /><h3>Total Amount <b>₹{finalAmount}</b></h3><p className="savings">You will save ₹{discount} on this order</p><button className="primary-button" onClick={checkout}>Proceed to Checkout</button></aside></main></StoreLayout>; }
export default CartPage;
