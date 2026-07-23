import { useSearchParams } from "react-router-dom";
import StoreLayout from "../components/StoreLayout";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
function SearchPage() { const [params] = useSearchParams(); const query = params.get("q")?.toLowerCase() ?? ""; const filtered = products.filter((product) => `${product.title} ${product.category}`.toLowerCase().includes(query)); return <StoreLayout><main className="listing-page"><p>Home / Search</p><h1>{query ? `Results for “${query}”` : "All Products"}</h1><div className="listing-layout"><aside className="filters"><h3>Filters</h3><p>Category</p><label><input type="checkbox" /> Women</label><label><input type="checkbox" /> Men</label><label><input type="checkbox" /> Home & Living</label><hr /><p>Price</p><label><input type="checkbox" /> Under ₹500</label><label><input type="checkbox" /> ₹500 - ₹1000</label></aside><div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}{!filtered.length && <p>No matching products found.</p>}</div></div></main></StoreLayout>; }
export default SearchPage;
