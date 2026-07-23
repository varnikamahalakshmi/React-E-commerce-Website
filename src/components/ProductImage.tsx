import type { ImgHTMLAttributes } from "react";
const fallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='700'%3E%3Crect width='100%25' height='100%25' fill='%23f3edf2'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%234d39c9' font-family='Arial' font-size='30'%3ELumora%3C/text%3E%3C/svg%3E";
function ProductImage(props: ImgHTMLAttributes<HTMLImageElement>) { return <img {...props} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallback; }} />; }
export default ProductImage;
