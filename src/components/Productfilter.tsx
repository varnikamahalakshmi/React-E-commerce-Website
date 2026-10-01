import { useState } from "react";
import type { Product } from "../data/products";

type ProductFiltersProps = {
  products: Product[];
  onApply: (products: Product[]) => void;
};

function ProductFilters({ products, onApply }: ProductFiltersProps) {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [discount, setDiscount] = useState("");
  const [combo, setCombo] = useState(false);

  const isComboProduct = (product: Product) => {
    const text = product.title.toLowerCase();

    return (
      text.includes("combo") ||
      text.includes("set") ||
      text.includes("pack") ||
      text.includes("kit")
    );
  };

  const getCategoryMatch = (product: Product, selectedCategory: string) => {
    const text = `
      ${product.title}
      ${product.category}
      ${product.subcategory}
    `.toLowerCase();

    const keywords: Record<string, string[]> = {
      Women: [
        "women",
        "saree",
        "kurti",
        "lehenga",
        "gown",
        "top",
        "tunic",
        "skirt",
        "jeans",
        "jeggings",
        "palazzo",
        "jacket",
        "shrug",
        "nightdress",
        "nightsuit",
      ],
      Men: [
        "men",
        "shirt",
        "t-shirt",
        "jeans",
        "dhoti",
        "lungi",
        "cargo",
        "trouser",
        "kurta",
        "wallet",
      ],
      Kids: [
        "kids",
        "frock",
        "dress",
        "polo",
        "toy",
        "game",
        "baby",
        "party",
      ],
      "Home & Kitchen": [
        "home",
        "kitchen",
        "cookware",
        "storage",
        "organizer",
        "furniture",
        "clock",
        "wall",
        "pooja",
        "glass",
        "barware",
        "shoe rack",
        "study table",
      ],
      "Beauty & Health": [
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
      "Jewellery & Accessories": [
        "jewellery",
        "watch",
        "hair accessories",
        "scarves",
        "stoles",
        "wallet",
      ],
      "Bags & Footwear": [
        "bag",
        "footwear",
        "sling",
        "clutch",
        "backpack",
        "trolley",
        "luggage",
        "shoe",
        "sneaker",
      ],
    };

    return keywords[selectedCategory]?.some((keyword) =>
      text.includes(keyword)
    );
  };

  const handleApply = () => {
    let filteredProducts = [...products];

    if (category) {
      filteredProducts = filteredProducts.filter((product) =>
        getCategoryMatch(product, category)
      );
    }

    if (price === "under500") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price < 500
      );
    }

    if (price === "500-1000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 500 && product.price <= 1000
      );
    }

    if (price === "above1000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price > 1000
      );
    }

    if (rating) {
      const minimumRating = Number(rating);

      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= minimumRating
      );
    }

    if (discount) {
      const minimumDiscount = Number(discount);

      filteredProducts = filteredProducts.filter((product) => {
        if (product.originalPrice <= 0) return false;

        const productDiscount =
          ((product.originalPrice - product.price) /
            product.originalPrice) *
          100;

        return productDiscount >= minimumDiscount;
      });
    }

    if (combo) {
      filteredProducts = filteredProducts.filter((product) =>
        isComboProduct(product)
      );
    }

    onApply(filteredProducts);
  };

  const handleClear = () => {
    setCategory("");
    setPrice("");
    setRating("");
    setDiscount("");
    setCombo(false);

    onApply(products);
  };

  return (
    <aside className="filters">
      <h3>Filters</h3>

      <div className="filter-section">
        <h4>Category</h4>

        {[
          "Women",
          "Men",
          "Kids",
          "Home & Kitchen",
          "Beauty & Health",
          "Jewellery & Accessories",
          "Bags & Footwear",
        ].map((item) => (
          <label key={item}>
            <input
              type="radio"
              name="category"
              value={item}
              checked={category === item}
              onChange={(e) => setCategory(e.target.value)}
            />
            {item}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Price</h4>

        <label>
          <input
            type="radio"
            name="price"
            value="under500"
            checked={price === "under500"}
            onChange={(e) => setPrice(e.target.value)}
          />
          Under ₹500
        </label>

        <label>
          <input
            type="radio"
            name="price"
            value="500-1000"
            checked={price === "500-1000"}
            onChange={(e) => setPrice(e.target.value)}
          />
          ₹500 - ₹1000
        </label>

        <label>
          <input
            type="radio"
            name="price"
            value="above1000"
            checked={price === "above1000"}
            onChange={(e) => setPrice(e.target.value)}
          />
          Above ₹1000
        </label>
      </div>

      <div className="filter-section">
        <h4>Rating</h4>

        {["4", "3", "2"].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              checked={rating === value}
              onChange={(e) => setRating(e.target.value)}
            />
            {value}★ & above
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Discount</h4>

        {["10", "20", "30", "50"].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="discount"
              value={value}
              checked={discount === value}
              onChange={(e) => setDiscount(e.target.value)}
            />
            {value}% & above
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Product Type</h4>

        <label>
          <input
            type="checkbox"
            checked={combo}
            onChange={(e) => setCombo(e.target.checked)}
          />
          Combo Products
        </label>
      </div>

      <div className="filter-actions">
        <button className="primary-button" onClick={handleApply}>
          Apply
        </button>

        <button className="secondary-button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </aside>
  );
}

export default ProductFilters;