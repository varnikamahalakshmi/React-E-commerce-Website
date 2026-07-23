import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Header() { const [query, setQuery] = useState(""); const navigate = useNavigate(); const { count } = useCart(); const search = (event: React.FormEvent) => { event.preventDefault(); navigate(`/search?q=${encodeURIComponent(query)}`); }; return <><header className="home"><Link className="brand-link" to="/">Lumora</Link><form className="search-wrap" onSubmit={search}><FontAwesomeIcon icon={faMagnifyingGlass} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, brands and more" aria-label="Search products" /></form><Link className="header-link" to="/supplier">Become a supplier</Link><Link className="header-link" to="/orders">Orders</Link><Link className="header-icon" to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link><Link className="header-icon cart-link" to="/cart"><FontAwesomeIcon icon={faCartShopping} /> Cart {count > 0 && <b>{count}</b>}</Link></header></> }
export default Header;
