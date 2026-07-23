import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductImage from "./ProductImage";
function ProductCard({ product }: { product: Product }) { const { addToCart } = useCart(); const { has, toggle } = useWishlist(); const saved = has(product.id); const discount = Math.round((1 - product.price / product.originalPrice) * 100); return <article className="product-card"><button className={saved ? "wishlist-button saved" : "wishlist-button"} aria-label="Toggle wishlist" onClick={() => toggle(product)}><FontAwesomeIcon icon={saved ? faHeartSolid : faHeart} /></button><Link to={`/product/${product.id}`}><ProductImage src={product.image} alt={product.title} /><p className="product-category">{product.category}</p><h3>{product.title}</h3></Link><div className="price-row"><strong>₹{product.price}</strong><span>₹{product.originalPrice}</span><em>{discount}% off</em></div><p className="rating">★ {product.rating} <small>({product.reviews})</small></p><button className="outline-button" onClick={() => addToCart(product)}>Add to Cart</button></article>; }
export default ProductCard;
