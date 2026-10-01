import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StoreLayout from "../components/StoreLayout";
import ProductImage from "../components/ProductImage";
import { getMeeshoProductDetails } from "../services/productApi";
import { getProduct } from "../data/products";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetailsPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);

        // First check local products
        const localProduct = getProduct(id);

        if (localProduct) {
          setProduct(localProduct);
          return;
        }

        // If not found locally, fetch from Meesho API
        const data = await getMeeshoProductDetails(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <StoreLayout>
        <main className="empty-state">
          <h1>Loading product...</h1>
        </main>
      </StoreLayout>
    );
  }

  if (!product) {
    return (
      <StoreLayout>
        <main className="empty-state">
          <h1>Product not found</h1>
          <Link to="/">Continue shopping</Link>
        </main>
      </StoreLayout>
    );
  }

  const specifications = product.specifications ?? [
    "Premium quality material",
    "Comfortable regular fit",
    "Easy care",
    "Made for everyday use",
  ];

  const isWishlisted = isInWishlist(product.id);

  const buyNow = () => {
    navigate("/checkout", {
      state: {
        item: {
          ...product,
          quantity,
        },
      },
    });
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <StoreLayout>
      <main className="details">

        {/* PRODUCT IMAGES */}
        <div className="details-gallery">

          <div className="thumbnails">
            {product.images.map((image, index) => (
              <button
                key={image}
                className={selected === index ? "selected" : ""}
                onClick={() => setSelected(index)}
              >
                <ProductImage
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                />
              </button>
            ))}
          </div>

          <ProductImage
            className="main-product-image"
            src={product.images[selected] ?? product.image}
            alt={product.title}
          />

        </div>

        {/* PRODUCT DETAILS */}
        <section className="details-info">

          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="rating">
            ★ {product.rating}{" "}
            <small>{product.reviews} ratings</small>
          </p>

          <div className="details-price">
            ₹{product.price}{" "}

            <span>
              ₹{product.originalPrice}
            </span>

            <em>
              {Math.round(
                (1 - product.price / product.originalPrice) * 100
              )}
              % off
            </em>
          </div>

          <p>{product.description}</p>

          {/* SPECIFICATIONS */}
          <section className="specifications">

            <h2>Product specifications</h2>

            <ul>
              {specifications.map((specification) => (
                <li key={specification}>
                  {specification}
                </li>
              ))}
            </ul>

          </section>

          <p className="delivery">
            ✓ Free delivery · ✓ 7-day easy returns · ✓ Cash on delivery
          </p>

          {/* QUANTITY */}
          <div className="quantity">

            <span>Quantity</span>

            <button
              onClick={() =>
                setQuantity(Math.max(1, quantity - 1))
              }
            >
              −
            </button>

            <b>{quantity}</b>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              +
            </button>

          </div>

          {/* ACTION BUTTONS */}
          <div className="action-row">

            <button
              className="secondary-button"
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>

            <button
              className="primary-button"
              onClick={buyNow}
            >
              Buy Now
            </button>

          </div>

          {/* WISHLIST */}
          <button
            className={`wishlist-details-button ${
              isWishlisted ? "active" : ""
            }`}
            onClick={handleWishlist}
          >
            {isWishlisted
              ? "♥ Added to Wishlist"
              : "♡ Add to Wishlist"}
          </button>

          {/* REVIEWS */}
          <section className="reviews">

            <h2>Customer reviews</h2>

            <p>
              ★★★★★ &nbsp; Lovely quality and exactly as shown.
              <b> — Priya</b>
            </p>

            <p>
              ★★★★☆ &nbsp; Great value for money.
              <b> — Ananya</b>
            </p>

          </section>

        </section>
      </main>
    </StoreLayout>
  );
}

export default ProductDetailsPage;