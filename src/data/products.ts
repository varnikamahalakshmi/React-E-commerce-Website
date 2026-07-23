import { dropdownItems } from "./navigation";

export type Product = { id: string; title: string; category: string; subcategory: string; price: number; originalPrice: number; rating: number; reviews: number; image: string; images: string[]; description: string; specifications?: string[] };
const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
const photoIds = ["photo-1483985988355-763728e1935b", "photo-1525507119028-ed4c629a60a3", "photo-1445205170230-053b83016050", "photo-1490481651871-ab68de25d43d", "photo-1529139574466-a303027c1d8b", "photo-1551028719-00167b16eac5", "photo-1542291026-7eec264c27ff", "photo-1517841905240-472988babdf9", "photo-1503602642458-232111445657", "photo-1494438639946-1ebd1d20bf85", "photo-1515372039744-b8f02a3ae446", "photo-1584917865442-de89df76afd3"];
const titleWords = ["Essential", "Signature", "Everyday", "Premium", "Classic", "Modern", "Comfort", "Studio", "Luxe", "Fresh"];

const core: Product[] = [
  ["kurti-rose", "Floral Rayon Anarkali Kurti", "Rayon Kurtis", 499, 1199, "photo-1594633312681-425c7b97ccd1"],
  ["saree-blue", "Blue Printed Georgette Saree", "Georgette Sarees", 649, 1599, "photo-1610189020382-668a07f1ebc4"],
  ["dress-lilac", "Lilac Casual Midi Dress", "Gowns", 579, 1299, "photo-1566174053879-31528523f8ae"],
  ["shirt-olive", "Olive Cotton Regular Shirt", "Shirts", 449, 999, "photo-1602810318383-e386cc2a3ccf"],
  ["sneaker-white", "Comfort White Everyday Sneakers", "Footwear", 899, 1999, "photo-1542291026-7eec264c27ff"],
  ["handbag-tan", "Elegant Tan Shoulder Handbag", "Handbags", 699, 1499, "photo-1584917865442-de89df76afd3"],
  ["watch-gold", "Minimal Gold Tone Watch", "Women Watches", 799, 1799, "photo-1524805444758-089113d48a6d"],
  ["cushion-set", "Set of 5 Velvet Cushion Covers", "Clocks & Wall Decor", 359, 899, "photo-1584100936595-c0654b55a2e2"],
  ["lip-kit", "Matte Lip Colour Kit", "Lipstick", 299, 699, "photo-1586495777744-4413f21062fa"],
  ["kids-set", "Kids Printed T-Shirt & Shorts Set", "T-Shirt & Polos", 399, 899, "photo-1519238360530-638b5e6e8591"],
  ["smartphone-neo", "Neo 5G Smartphone, 128 GB", "Smartphones", 12999, 16999, "photo-1511707171634-5f897ff02aa9"],
  ["laptop-air", "AirBook 14 Inch Laptop", "Laptop & Messenger Bags", 45999, 58999, "photo-1496181133206-80ce9b88a853"],
].map(([id, title, subcategory, price, originalPrice, imageId], index) => ({ id: String(id), title: String(title), subcategory: String(subcategory), category: String(subcategory), price: Number(price), originalPrice: Number(originalPrice), rating: 4 + (index % 6) / 10, reviews: 620 + index * 271, image: photo(String(imageId)), images: [photo(String(imageId)), photo(photoIds[index % photoIds.length])], description: `Thoughtfully selected ${String(subcategory).toLowerCase()} with dependable quality, comfortable use and excellent value.`, specifications: ["Quality checked", "Easy care", "Securely packed", "7-day returns"] }));

const labels = [...new Set(dropdownItems.map((item) => item.label))];
const generated: Product[] = labels.flatMap((subcategory, labelIndex) => Array.from({ length: 10 }, (_, index) => {
  const productNumber = index + 1;
  const imageId = photoIds[(labelIndex + index) % photoIds.length];
  const price = 249 + ((labelIndex * 91 + index * 73) % 1350);
  return { id: `${subcategory.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${productNumber}`, title: `${titleWords[index]} ${subcategory} ${productNumber}`, category: subcategory, subcategory, price, originalPrice: price + 400 + (index * 75), rating: 4 + ((labelIndex + index) % 7) / 10, reviews: 114 + labelIndex * 37 + index * 83, image: photo(imageId), images: [photo(imageId), photo(photoIds[(labelIndex + index + 3) % photoIds.length])], description: `A versatile ${subcategory.toLowerCase()} pick, designed for everyday quality and effortless style.`, specifications: ["Quality checked", "Easy to use", "Secure packaging", "7-day returns"] };
}));

const coreIds = new Set(core.map((product) => product.id));
export const products = [...core, ...generated.filter((product) => !coreIds.has(product.id))];
export const getProduct = (id: string) => products.find((product) => product.id === id);
export const getProductsForCategory = (label: string) => products.filter((product) => product.subcategory.toLowerCase() === label.toLowerCase());
