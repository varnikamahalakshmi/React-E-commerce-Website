import type { NavigationItem } from "../data/navigation";
import StoreLayout from "../components/StoreLayout";
import ProductCard from "../components/ProductCard";
import { getProductsForCategory } from "../data/products";

function CategoryPage({ item }: { item: NavigationItem }) {
  const categoryProducts = getProductsForCategory(item.label);
  return (
    <StoreLayout>
      <main className="category-page">
        <p className="category-breadcrumb">{item.menu} / {item.section}</p>
        <h1>{item.label}</h1>
        <p>Explore handpicked {item.label} products at great prices.</p>
        {categoryProducts.length ? <div className="product-grid">{categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-category"><h2>New arrivals are coming soon</h2><p>We are carefully curating {item.label} products for you. Check back shortly.</p></div>}
      </main>
    </StoreLayout>
  );
}

export default CategoryPage;
