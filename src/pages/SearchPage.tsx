import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StoreLayout from "../components/StoreLayout";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/Productfilter";
import { searchMeeshoProducts } from "../services/productApi";
import { products as localProducts } from "../data/products";
import type { Product } from "../data/products";

function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("q")?.toLowerCase() ?? "";

  const categoryMap: Record<string, string[]> = {
    "women ethnic": [
      "saree",
      "kurti",
      "lehenga",
    ],

    "women western": [
      "top",
      "tunic",
      "t-shirt",
      "gown",
      "bottomwear",
      "shorts",
      "skirt",
      "jeans",
      "jeggings",
      "palazzo",
      "jacket",
      "cape",
      "shrug",
      "ponchos",
    ],

    men: [
      "t-shirt",
      "shirt",
      "jeans",
      "dhoti",
      "lungi",
      "cargo",
      "trouser",
      "kurta",
    ],

    kids: [
      "bag",
      "backpack",
      "party",
      "toy",
      "games",
      "summer",
      "baby",
      "frock",
      "dress",
      "polo",
    ],

    "home & kitchen": [
      "pooja",
      "clock",
      "wall",
      "storage",
      "organizer",
      "cookware",
      "glass",
      "barware",
      "kitchen",
      "shoe rack",
      "study table",
    ],

    beauty: [
      "lipstick",
      "eye shadow",
      "liner",
      "nail",
      "lotion",
      "hair oil",
      "shampoo",
      "face wash",
      "soap",
      "scrub",
      "healthcare",
      "health monitor",
      "massager",
    ],
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      if (!query) {
        setAllProducts(localProducts);
        setProducts(localProducts);
        return;
      }

      setLoading(true);

      const searchTerms = categoryMap[query] ?? [query];

      const localResults = localProducts.filter((product) => {
        const text = `
          ${product.title}
          ${product.category}
          ${product.subcategory}
        `.toLowerCase();

        return searchTerms.some((term) =>
          text.includes(term)
        );
      });

      if (localResults.length > 0) {
        setAllProducts(localResults);
        setProducts(localResults);
        setLoading(false);
        return;
      }

      try {
        const data = await searchMeeshoProducts(query);

        setAllProducts(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
        setAllProducts([]);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [query]);

  return (
    <StoreLayout>
      <main className="listing-page">
        <p>Home / Search</p>

        <h1>
          {query
            ? `Results for “${query}”`
            : "All Products"}
        </h1>

        {loading && (
          <p>Loading products...</p>
        )}

        {!loading && allProducts.length > 0 && (
          <div className="listing-layout">

            <ProductFilters
              products={allProducts}
              onApply={setProducts}
            />

            <div className="product-grid">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))
              ) : (
                <div className="empty-category">
                  <h2>No products found</h2>

                  <p>
                    No products match the selected
                    filters.
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {!loading && allProducts.length === 0 && (
          <div className="empty-category">
            <h2>No products found</h2>

            <p>
              We couldn't find products for this
              search.
            </p>
          </div>
        )}
      </main>
    </StoreLayout>
  );
}

export default SearchPage;