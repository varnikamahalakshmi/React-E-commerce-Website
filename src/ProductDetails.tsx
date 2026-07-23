import image from "./assets/earings.jpg"
import image1 from "./assets/earings1.jpg"
import image2 from "./assets/earing2.jpg"
import image3 from "./assets/earings3.jpg"
import { useState } from "react"
function ProductDetails() {
    const [, setImage] = useState(image1);
    return (
        <>
        {/* // <div>
        //     <div className="home">
        //         <h1 style={{ paddingTop: '10px' }}>Lumora</h1>
        //         <input className="form-control search" type="text" placeholder="⌕ Try Saree,Kurti or Search by Product Code" aria-label="default input example"></input>
        //         <p className="word ">Become a supplier</p>
        //         <p className="word ">Invester Relations</p>
        //         <p className="icon"><FontAwesomeIcon icon={faUser} />profile</p>
        //         <p className="icon"><FontAwesomeIcon icon={faCartShopping} />cart</p>
        //     </div>
        //     <hr style={{ marginTop: '0px' }}></hr>
        //     <ul className="li">
        //         <li className="lists dropdown">Popular
                    
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Featured On Lumora</h6></li>
        //                 <li><a className="dropdown-item" href="#">Smartphones</a></li>
        //                 <li><a className="dropdown-item" href="#">Top Brands</a></li>
        //                 <li><a className="dropdown-item" href="#">Shimla Apples</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">All Popular</h6></li>
        //                 <li><a className="dropdown-item" href="#">Jewellery</a></li>
        //                 <li><a className="dropdown-item" href="#">Men Fashion</a></li>
        //                 <li><a className="dropdown-item" href="#">Kids</a></li>
        //                 <li><a className="dropdown-item" href="#">Footwear</a></li>
        //                 <li><a className="dropdown-item" href="#">Grocery</a></li>
        //                 <li><a className="dropdown-item" href="#">Bags & Luggage</a></li>
        //                 <li><a className="dropdown-item" href="#">Stationery & Office Supplies</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown">Kurti,Saree & Lehenga
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Sarees</h6></li>
        //                 <li><a className="dropdown-item" href="#">Georgette Sarees</a></li>
        //                 <li><a className="dropdown-item" href="#">Chiffon Sarees</a></li>
        //                 <li><a className="dropdown-item" href="#">Cotton Sarees</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Kurtis</h6></li>
        //                 <li><a className="dropdown-item" href="#">Anarkali Kurtis</a></li>
        //                 <li><a className="dropdown-item" href="#">Rayon Kurtis</a></li>
        //                 <li><a className="dropdown-item" href="#">Cotton Kurtis</a></li>
        //                 <li><a className="dropdown-item" href="#">Long Kurtis</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Lehenga</h6></li>
        //                 <li><a className="dropdown-item" href="#">Shoppers Favourite</a></li>
        //                 <li><a className="dropdown-item" href="#">Trending Lehengas</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown">Women Western
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Topwear</h6></li>
        //                 <li><a className="dropdown-item" href="#">Tops & Tunics</a></li>
        //                 <li><a className="dropdown-item" href="#">T-shirts</a></li>
        //                 <li><a className="dropdown-item" href="#">Gowns</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Bottom Wear</h6></li>
        //                 <li><a className="dropdown-item" href="#">All Bottomwear</a></li>
        //                 <li><a className="dropdown-item" href="#">Shorts & Skirts</a></li>
        //                 <li><a className="dropdown-item" href="#">Jeans & Jeggings</a></li>
        //                 <li><a className="dropdown-item" href="#">Palazzos</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Winterwear</h6></li>
        //                 <li><a className="dropdown-item" href="#">Jackets</a></li>
        //                 <li><a className="dropdown-item" href="#">Capes, Shrug & Ponchos</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown">Lingerie
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Sleepwear</h6></li>
        //                 <li><a className="dropdown-item" href="#">Women Nightsuits</a></li>
        //                 <li><a className="dropdown-item" href="#">Women Nightdress</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Sports Wear</h6></li>
        //                 <li><a className="dropdown-item" href="#">Sports Bottomwear</a></li>
        //                 <li><a className="dropdown-item" href="#">Top & Bottom Sets</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown">Men
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Top Wear</h6></li>
        //                 <li><a className="dropdown-item" href="#">Summer T-Shirts</a></li>
        //                 <li><a className="dropdown-item" href="#">Shirts</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Bottom Wear</h6></li>
        //                 <li><a className="dropdown-item" href="#">Jeans</a></li>
        //                 <li><a className="dropdown-item" href="#">Dhotis/Lungis</a></li>
        //                 <li><a className="dropdown-item" href="#">Cargos/Trousers</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Ethnic Wear</h6></li>
        //                 <li><a className="dropdown-item" href="#">Kurtas</a></li>
        //                 <li><a className="dropdown-item" href="#">Kurta Sets</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown">Kids & Toys
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Kids Accessories</h6></li>
        //                 <li><a className="dropdown-item" href="#">Bags & Backpacks</a></li>
        //                 <li><a className="dropdown-item" href="#">Party Items</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Kids Toys</h6></li>
        //                 <li><a className="dropdown-item" href="#">Toys & Games</a></li>
        //                 <li><a className="dropdown-item" href="#">Summer Picks</a></li>
        //                 <li><a className="dropdown-item" href="#">Baby Gears</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Kids Clothing</h6></li>
        //                 <li><a className="dropdown-item" href="#">Frocks & Dresses</a></li>
        //                 <li><a className="dropdown-item" href="#">T-Shirt & Polos</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown">Home & Kitchen
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Home Decor</h6></li>
        //                 <li><a className="dropdown-item" href="#">Pooja Needs</a></li>
        //                 <li><a className="dropdown-item" href="#">Clocks & Wall Decor</a></li>
        //                 <li><a className="dropdown-item" href="#">Wallpapers & Stickers</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Kitchen & Appliances</h6></li>
        //                 <li><a className="dropdown-item" href="#">Storage & Organizers</a></li>
        //                 <li><a className="dropdown-item" href="#">Cookware</a></li>
        //                 <li><a className="dropdown-item" href="#">Glasses & Barware</a></li>
        //                 <li><a className="dropdown-item" href="#">Kitchen Tools</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Furniture</h6></li>
        //                 <li><a className="dropdown-item" href="#">Shoe Racks</a></li>
        //                 <li><a className="dropdown-item" href="#">Study Tables</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown">Beauty & Health
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Makeup</h6></li>
        //                 <li><a className="dropdown-item" href="#">Lipstick</a></li>
        //                 <li><a className="dropdown-item" href="#">Eye Shadow and Liner</a></li>
        //                 <li><a className="dropdown-item" href="#">Nail Makeup</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Personal Care</h6></li>
        //                 <li><a className="dropdown-item" href="#">Body Lotion</a></li>
        //                 <li><a className="dropdown-item" href="#">Hair Oil & Shampoo</a></li>
        //                 <li><a className="dropdown-item" href="#">Face Wash</a></li>
        //                 <li><a className="dropdown-item" href="#">Soaps & Scrubs</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Healthcare</h6></li>
        //                 <li><a className="dropdown-item" href="#">Winter Healthcare</a></li>
        //                 <li><a className="dropdown-item" href="#">Health Monitor & Massagers</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown">Jewellery & Accessories
        //             <ul className="dropdown-menu" >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Women Accessories</h6></li>
        //                 <li><a className="dropdown-item" href="#">Women Watches</a></li>
        //                 <li><a className="dropdown-item" href="#">Hair Accessories</a></li>
        //                 <li><a className="dropdown-item" href="#">Scarves, Stoles & Gloves</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Men Accessories</h6></li>
        //                 <li><a className="dropdown-item" href="#">Men Watches</a></li>
        //                 <li><a className="dropdown-item" href="#">Wallets</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //         <li className="lists dropdown" >Bags & Footwear
        //             <ul className="dropdown-menu" style={{ left: "auto", right: "0" }} >
        //                 <div>
        //                 <li><h6 className="dropdown-header">Men Bags</h6></li>
        //                 <li><a className="dropdown-item" href="#">Backpacks</a></li>
        //                 <li><a className="dropdown-item" href="#">waist Backs</a></li>
        //                 <li><a className="dropdown-item" href="#">Crossbody Bags & Sling Bags</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Women Bags</h6></li>
        //                 <li><a className="dropdown-item" href="#">Backpacks</a></li>
        //                 <li><a className="dropdown-item" href="#">Handbags</a></li>
        //                 <li><a className="dropdown-item" href="#">Slingbags</a></li>
        //                 <li><a className="dropdown-item" href="#">Clutches</a></li>
        //                 </div>
        //                 <div>
        //                 <li><h6 className="dropdown-header">Travel Bags, Luggage and Accessories</h6></li>
        //                 <li><a className="dropdown-item" href="#">Duffel & Trolley Bags</a></li>
        //                 <li><a className="dropdown-item" href="#">Laptop & Messenger Bags</a></li>
        //                 </div>
        //             </ul>
        //         </li>
        //     </ul>
        //     <div className="container-fluid">
        //         <img className="img" src="https://images.example.com/marketing/hero.webp" alt="img" />
        //         <button className="btn-shop">Shop Now</button> */}


                {/* <img className="img" src={ mainImage } alt="earings" style={{width: '430px',height: '400px',border:'2px solid black',padding:'10px'}}/> */}
            {/* // </div> */}
            <div className="my-div">
                <img className="images" onClick={() => setImage(image)} src={image} alt="earings" style={{ width: '100px', height: 'auto' }} />
                <img className="images" onClick={() => setImage(image1)} src={image1} alt="earings" style={{ width: '100px', height: 'auto' }} />
                <img className="images" onClick={() => setImage(image2)} src={image2} alt="earings" style={{ width: '100px', height: 'auto' }} />
                <img className="images" onClick={() => setImage(image3)} src={image3} alt="earings" style={{ width: '100px', height: 'auto' }} />
            </div>
        {/* // </div> */}
        </>
    )
}
export default ProductDetails;
