import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import StoreLayout from "./components/StoreLayout";
import ProductCard from "./components/ProductCard";
import ProductImage from "./components/ProductImage";
import { searchMeeshoProducts } from "./services/productApi";
import { products } from "./data/products";
import type { Product } from "./data/products";

const categories = [
  "Women Ethnic",
  "Women Western",
  "Men",
  "Kids",
  "Home & Kitchen",
  "Beauty",
];

const categoryImages = [
  "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
];

function ProductSection({
  title,
  items,
}: {
  title: string;
  items: Product[];
}) {
  return (
    <section className="page-section">
      <div className="section-heading">
        <h2>{title}</h2>
        <Link to="/search">View all</Link>
      </div>

      {items.length > 0 ? (
        <div className="product-grid">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </section>
  );
}

async function fetchWithRetry(
  query: string,
  retries = 2
): Promise<Product[]> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const products = await searchMeeshoProducts(query);

      if (products.length > 0) {
        return products;
      }
    } catch (error) {
      console.error(
        `Failed to fetch "${query}" - attempt ${attempt + 1}`,
        error
      );
    }

    // Wait before retrying
    if (attempt < retries) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  return [];
}

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [dealProducts, setDealProducts] = useState<Product[]>([]);
  const [bestSellerProducts, setBestSellerProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadHomeProducts() {
      setLoading(true);

      try {
        const [featured, deals, bestSellers] = await Promise.all([
          fetchWithRetry("kurti"),
          fetchWithRetry("saree"),
          fetchWithRetry("women dress"),
        ]);

        if (cancelled) return;

        setFeaturedProducts(
          featured.length > 0 ? featured.slice(0, 5) : products.slice(0, 5)
        );

        setDealProducts(
          deals.length > 0 ? deals.slice(0, 5) : products.slice(5, 10)
        );

        setBestSellerProducts(
          bestSellers.length > 0 ? bestSellers.slice(0, 5) : products.slice(-5)
        );
      } catch (error) {
        console.error("Failed to load home products:", error);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadHomeProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <StoreLayout>
      <main>
        {/* Hero */}
        <section className="hero">
          <div>
            <p>New styles, every day</p>

            <h1>
              Lowest Prices
              <br />
              Best Quality Shopping
            </h1>

            <p>
              Discover fashion and more, curated just for you.
            </p>

            <Link className="primary-button" to="/search">
              Shop Now
            </Link>
          </div>

          <ProductImage
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85"
            alt="Fashion shopping"
          />
        </section>

        {/* Categories */}
        <section className="page-section">
          <h2>Top Categories to Explore</h2>

          <div className="category-grid">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/search?q=${encodeURIComponent(category)}`}
                className="category-tile"
              >
                <ProductImage
                  src={categoryImages[index]}
                  alt={category}
                />

                <span>{category}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        {loading ? (
          <section className="page-section">
            <h2>Featured Collections</h2>
            <p>Loading products...</p>
          </section>
        ) : (
          <ProductSection
            title="Featured Collections"
            items={featuredProducts}
          />
        )}

        {/* Offer */}
        <section className="offer-strip">
          <p>✨ New user special</p>

          <h2>
            Get up to 50% off on your first order
          </h2>

          <Link to="/register">
            Create free account
          </Link>
        </section>

        {/* Deals */}
        {!loading && (
          <ProductSection
            title="Deals of the Day"
            items={dealProducts}
          />
        )}

        {/* Best Sellers */}
        {!loading && (
          <ProductSection
            title="Best Sellers"
            items={bestSellerProducts}
          />
        )}
      </main>
    </StoreLayout>
  );
}

export default Home;