import { useEffect, useState } from "react";
import type { NavigationItem } from "../data/navigation";
import StoreLayout from "../components/StoreLayout";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/Productfilter";
import { searchMeeshoProducts } from "../services/productApi";
import { products as localProducts } from "../data/products";
import type { Product } from "../data/products";

function CategoryPage({ item }: { item: NavigationItem }) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const localResults = localProducts.filter((product) => {
        const text = `
          ${product.title}
          ${product.category}
          ${product.subcategory}
        `.toLowerCase();

        return text.includes(item.label.toLowerCase());
      });

      if (localResults.length > 0) {
        setAllProducts(localResults);
        setProducts(localResults);
        setLoading(false);
        return;
      }

      try {
        const data = await searchMeeshoProducts(item.label);
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
  }, [item.label]);

  return (
    <StoreLayout>
      <main className="category-page">
        <p className="category-breadcrumb">
          {item.menu} / {item.section}
        </p>

        <h1>{item.label}</h1>

        <p>
          Explore handpicked {item.label} products at great prices.
        </p>

        {loading && <p>Loading products...</p>}

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
                    No products match the selected filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {!loading && allProducts.length === 0 && (
          <div className="empty-category">
            <h2>New arrivals are coming soon</h2>
            <p>
              We are carefully curating {item.label} products
              for you. Check back shortly.
            </p>
          </div>
        )}
      </main>
    </StoreLayout>
  );
}

export default CategoryPage;