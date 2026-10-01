import { dropdownItems } from "./navigation";

export type Product = {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  specifications?: string[];
};

/* Reliable image source */
const photo = (id: string) =>
  id.startsWith("http")
    ? id
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

/* Category-wise images */
const categoryImages: Record<string, string[]> = {
  "Georgette Sarees": [
    "photo-1610030469983-98e550d6193c",
    "https://images.meesho.com/images/products/539608462/5ixzf_512.avif?width=360",
    "https://images.meesho.com/images/products/406282018/nxhod_512.avif?width=360",
    "https://images.meesho.com/images/products/211587638/fxyqo_512.avif?width=360"
  ],

  "Chiffon Sarees": [
    
    "https://images.meesho.com/images/products/408514865/jrafj_512.avif?width=512",
    "https://images.meesho.com/images/products/653651093/8higo_512.avif?width=512",
    "https://images.meesho.com/images/products/492767536/e5vzb_512.avif?width=360",
    "https://images.meesho.com/images/products/406533406/xlcqg_512.avif?width=360"
    ],

  "Cotton Sarees": [
    "https://images.meesho.com/images/products/438377875/wayio_512.avif?width=360",
    "https://images.meesho.com/images/products/83208109/uae5z_512.avif?width=360",
    "https://images.meesho.com/images/products/325765908/dzpuu_512.avif?width=360",
    "https://images.meesho.com/images/products/425305883/irtbf_512.avif?width=360",
    "https://images.meesho.com/images/products/432035561/hmift_512.avif?width=360"
  ],

  "Anarkali Kurtis": [
    "https://images.meesho.com/images/products/322477082/ukmrm_512.avif?width=360",
    "https://images.meesho.com/images/products/276746304/6loug_512.avif?width=360",
    "https://images.meesho.com/images/products/441638608/pwucr_512.avif?width=360",
    "https://images.meesho.com/images/products/17264076/otpxq_512.avif?width=360",
    "https://images.meesho.com/images/products/360007825/iwhgl_512.avif?width=360",
  ],

  "Rayon Kurtis": [
    "https://images.meesho.com/images/products/480179648/fhsvn_512.avif?width=360",
    "https://images.meesho.com/images/products/191005346/mocgn_512.avif?width=360",
    "https://images.meesho.com/images/products/128544553/q7ecp_512.avif?width=360",
    "https://images.meesho.com/images/products/537792045/dpq72_512.avif?width=360",
    "https://images.meesho.com/images/products/499566831/iv6zv_512.avif?width=360"
    
  ],
  

  "Cotton Kurtis": [
    "https://images.meesho.com/images/products/177625233/dx5gu_512.avif?width=360",
    "https://images.meesho.com/images/products/497051184/md6hc_512.avif?width=360",
    "https://images.meesho.com/images/products/473311793/reycq_512.avif?width=360",
    "https://images.meesho.com/images/products/436086843/cwxt5_512.avif?width=360",
    "https://images.meesho.com/images/products/434661752/wwnhx_512.avif?width=360",
    "https://images.meesho.com/images/products/438661298/nmlem_512.avif?width=360"
  ],

  "Long Kurtis": [
  "https://images.meesho.com/images/products/298489115/e9yxk_512.avif?width=360",
  "photo-1605763240000-7e93b172d754",
  "https://images.meesho.com/images/products/403652262/hw6r7_512.avif?width=360",
  "https://images.meesho.com/images/products/545708211/kohhm_512.avif?width=360",
  "https://images.meesho.com/images/products/465111071/uew79_512.avif?width=360"
  ],
  "Trending Lehengas":[
   "https://images.meesho.com/images/products/430415819/iwmah_512.avif?width=360",
   "https://images.meesho.com/images/products/540687995/39qa7_512.avif?width=360",
   "https://images.meesho.com/images/products/435642521/vlvro_512.avif?width=360",
   "https://images.meesho.com/images/products/591581497/0cqta_512.avif?width=360",
   "https://images.meesho.com/images/products/671160239/efcfd_512.avif?width=360"
  ],
  "Tops & Tunics": [
    "photo-1525507119028-ed4c629a60a3",
    "https://images.meesho.com/images/products/532504111/skuha_512.avif?width=360",
    "https://images.meesho.com/images/products/507286436/mdfyc_512.avif?width=360",
    "https://images.meesho.com/images/products/546180865/xwti0_512.avif?width=360",
    "https://images.meesho.com/images/products/536894014/sfgcr_512.avif?width=360",
    "https://images.meesho.com/images/products/131000007/xfiyn_512.avif?width=360"
  ],

  "T-shirts": [
    "photo-1529139574466-a303027c1d8b",
    "https://images.meesho.com/images/products/504057288/3vhj7_512.avif?width=360",
    "https://images.meesho.com/images/products/540380235/guirk_512.avif?width=360",
    "https://images.meesho.com/images/products/544057919/4lnws_512.avif?width=360",
    "https://images.meesho.com/images/products/528172568/xgcc2_512.avif?width=360",
    "https://images.meesho.com/images/products/472681137/y5q4u_512.avif?width=360"
  ],

  "Gowns": [
    "photo-1566174053879-31528523f8ae",
    "https://images.meesho.com/images/products/470429982/f1evl_512.avif?width=360",
    "https://images.meesho.com/images/products/463220186/cf3ko_512.avif?width=360",
    "https://images.meesho.com/images/products/444204272/1axvi_512.avif?width=360",
    "https://images.meesho.com/images/products/484935770/ggyxt_512.avif?width=360",
    "https://images.meesho.com/images/products/46955505/2jilk_512.avif?width=360",
    "https://images.meesho.com/images/products/476730286/3djtm_512.avif?width=360"
  ],

  "All Bottomwear": [
    "photo-1541099649105-f69ad21f3246",
    "https://images.meesho.com/images/products/417302659/v1s47_512.avif?width=360",
    "https://images.meesho.com/images/products/542242104/uhqhh_512.avif?width=360",
    "https://images.meesho.com/images/products/346913247/jqoi6_512.avif?width=360",
    "https://images.meesho.com/images/products/495055374/eopc0_512.avif?width=360",
    "https://images.meesho.com/images/products/493935107/icl1s_512.avif?width=360"
  ],

  "Shorts & Skirts": [
    "https://images.meesho.com/images/products/507068127/jo4lh_512.avif?width=360",
    "https://images.meesho.com/images/products/420821008/fxaek_512.avif?width=360",
    "https://images.meesho.com/images/products/354614401/nko0s_512.avif?width=360",
    "https://images.meesho.com/images/products/498926744/kpvoh_512.avif?width=360",
    "https://images.meesho.com/images/products/346913247/jqoi6_512.avif?width=360",
    "https://images.meesho.com/images/products/455402195/wpsbw_512.avif?width=360"
  ],

  "Jeans & Jeggings": [
    "photo-1541099649105-f69ad21f3246",
    "photo-1582552938357-32b906df40cb",
    "https://images.meesho.com/images/products/318750332/ryr5j_512.avif?width=360",
    "https://images.meesho.com/images/products/301724764/ycux6_512.avif?width=360",
    "https://images.meesho.com/images/products/418535662/0ysic_512.avif?width=360",
    "https://images.meesho.com/images/products/422771683/1pyxk_512.avif?width=360"
  ],

  "Palazzos": [
    "https://images.meesho.com/images/products/308814113/j2j6u_512.avif?width=360",
    "https://images.meesho.com/images/products/417302659/v1s47_512.avif?width=360",
    "https://images.meesho.com/images/products/12386317/z78nx_512.avif?width=360",
    "https://images.meesho.com/images/products/268308409/g7ezu_512.avif?width=360",
    "https://images.meesho.com/images/products/268298260/lbswp_512.avif?width=360",
    "https://images.meesho.com/images/products/468407059/vkz3b_512.avif?width=360"
  ],

  "Jackets": [
    "photo-1551028719-00167b16eac5",
    "photo-1543076447-215ad9ba6923",
    "https://images.meesho.com/images/products/449138854/cu4qd_512.avif?width=360",
    "https://images.meesho.com/images/products/546434128/kmved_512.avif?width=360",
    "https://images.meesho.com/images/products/364616625/ubw7t_512.avif?width=360",
    "https://images.meesho.com/images/products/563403028/7mam4_512.avif?width=360"
  ],

  "Capes, Shrug & Ponchos": [
    "photo-1551028719-00167b16eac5",
    "photo-1529139574466-a303027c1d8b",
    "https://images.meesho.com/images/products/509931055/czpzv_512.avif?width=360",
    "https://images.meesho.com/images/products/339796762/4svxu_512.avif?width=360"
  ],

  "Women Nightsuits": [
    "https://images.meesho.com/images/products/432686109/uhmod_512.avif?width=360",
    "photo-1576566588028-4147f3842f27",
    "https://images.meesho.com/images/products/492118294/1vbe2_512.avif?width=360",
    "https://images.meesho.com/images/products/450057989/1upex_512.avif?width=360",
    "https://images.meesho.com/images/products/484115247/8stu0_512.avif?width=360",
    "https://images.meesho.com/images/products/276689789/cysvo_512.avif?width=512"
  ],

  "Women Nightdress": [
    "photo-1576566588028-4147f3842f27",
    "https://images.meesho.com/images/products/539407017/ckaqm_512.avif?width=360",
    "https://images.meesho.com/images/products/536888636/h8fis_512.avif?width=360",
    "https://images.meesho.com/images/products/399146278/aiyou_512.avif?width=360",
    "https://images.meesho.com/images/products/466505995/s274s_512.avif?width=360",
    "https://images.meesho.com/images/products/357846251/qouao_512.avif?width=360"
  ],

  "Sports Bottomwear": [
    "photo-1506629905607-d9d2c3d6d4d5",
    "photo-1518611012118-696072aa579a",
  ],

  "Top & Bottom Sets": [
    "photo-1518611012118-696072aa579a",
    "photo-1506629905607-d9d2c3d6d4d5",
  ],

  "Summer T-Shirts": [
    "photo-1521572163474-6864f9cf17ab",
    "photo-1529139574466-a303027c1d8b",
  ],
  
  "Cookware": [
  "photo-1556911220-e15b29be8c8f",
  "photo-1584990347449-a0c6f7f5c7c3",
],

  "Shirts": [
    "photo-1602810318383-e386cc2a3ccf",
    "photo-1598033129183-c4f50c736f10",
  ],

  "Jeans": [
    "photo-1541099649105-f69ad21f3246",
    "photo-1582552938357-32b906df40cb",
  ],

  "Dhotis/Lungis": [
    "photo-1620799140408-edc6dcb6d633",
    "photo-1598033129183-c4f50c736f10",
  ],

  "Cargos/Trousers": [
    "photo-1515886657613-9f3515b0c78f",
    "photo-1541099649105-f69ad21f3246",
  ],

  "Kurtas": [
    "photo-1596755389378-c31d21fd1273",
    "photo-1617127365659-c47fa864d8bc",
  ],

  "Kurta Sets": [
    "photo-1617127365659-c47fa864d8bc",
    "photo-1596755389378-c31d21fd1273",
  ],

  "Bags & Backpacks": [
    "photo-1553062407-98eeb64c6a62",
    "photo-1548036328-c9fa89d128fa",
  ],

  "Party Items": [
    "photo-1530103862676-de8c9debad1d",
    "photo-1513151233558-d860c5398176",
  ],

  "Toys & Games": [
    "photo-1596461404969-9ae70f2830c1",
    "photo-1566576912321-d58ddd7a6088",
  ],

  "Summer Picks": [
    "photo-1596461404969-9ae70f2830c1",
    "photo-1503919545889-aef636e10ad4",
  ],

  "Baby Gears": [
    "photo-1519689680058-324335c77eba",
    "photo-1544126592-807ade215a0b",
  ],

  "Frocks & Dresses": [
    "photo-1518831959646-742c3a14ebf7",
    "photo-1596870230751-ebdfce98ec42",
  ],

  "T-Shirt & Polos": [
    "photo-1519238263530-99bdd11df2ea",
    "photo-1521572163474-6864f9cf17ab",
  ],

  "Pooja Needs": [
    "photo-1603006905003-be475563bc59",
    "photo-1604881988758-f76ad2f7aac1",
  ],

  "Clocks & Wall Decor": [
    "photo-1513506003901-1e6a229e2d15",
    "photo-1524758631624-e2822e304c36",
  ],

  "Wallpapers & Stickers": [
    "photo-1618220179428-22790b461013",
    "photo-1616486338812-3dadae4b4ace",
  ],

  "Storage & Organizers": [
    "photo-1558997519-83ea9252edf8",
    "photo-1586023492125-27b2c045efd7",
  ],

  "Cookware": [
    "photo-1556910103-1c02745aae4d",
    "photo-1584990347449-a0e9d4c4e8f5",
  ],

  "Glasses & Barware": [
    "photo-1513558161293-cdaf765ed2fd",
    "photo-1572119865084-43c285814d63",
  ],

  "Kitchen Tools": [
    "photo-1556911220-e15b29be8c8f",
    "photo-1590794056226-79ef3a8147e1",
  ],

  "Shoe Racks": [
    "photo-1558997519-83ea9252edf8",
    "photo-1618221195710-dd6b41faaea6",
  ],

  "Study Tables": [
    "photo-1518455027359-f3f8164ba6bd",
    "photo-1497366754035-f200968a6e72",
  ],

  "Lipstick": [
    "photo-1586495777744-4413f21062fa",
    "photo-1596462502278-27bfdc403348",
  ],

  "Eye Shadow and Liner": [
    "photo-1512496015851-a90fb38ba796",
    "photo-1596462502278-27bfdc403348",
  ],

  "Nail Makeup": [
    "photo-1604654894610-df63bc536371",
    "photo-1631729371254-42c2892f0e6e",
  ],

  "Body Lotion": [
    "photo-1556228578-8c89e6adf883",
    "photo-1611930022073-b7a4ba5fcccd",
  ],

  "Hair Oil & Shampoo": [
    "photo-1556229010-aa3c4b1f3b54",
    "photo-1522337360788-8b13dee7a37e",
  ],

  "Face Wash": [
    "photo-1556228720-195a672e8a03",
    "photo-1571781926291-c477ebfd024b",
  ],

  "Soaps & Scrubs": [
    "photo-1607006344380-b6775a0824b7",
    "photo-1556228578-8c89e6adf883",
  ],

  "Winter Healthcare": [
    "photo-1584308666744-24d5c474f2ae",
    "photo-1576091160399-112ba8d25d1d",
  ],

  "Health Monitor & Massagers": [
    "photo-1580281658223-9b93f18ae9ae",
    "photo-1559757148-5c350d0d3c56",
  ],

  "Women Watches": [
    "photo-1524805444758-089113d48a6d",
    "photo-1523275335684-37898b6baf30",
  ],

  "Hair Accessories": [
    "photo-1522337360788-8b13dee7a37e",
    "photo-1515886657613-9f3515b0c78f",
  ],

  "Scarves, Stoles & Gloves": [
    "photo-1523779917675-b6ed3a42a561",
    "photo-1601924994987-69e26d50dc26",
  ],

  "Men Watches": [
    "photo-1523275335684-37898b6baf30",
    "photo-1524805444758-089113d48a6d",
  ],

  "Wallets": [
    "photo-1627123424574-724758594e93",
    "photo-1553062407-98eeb64c6a62",
  ],

  "Handbags": [
    "photo-1584917865442-de89df76afd3",
    "photo-1566150905458-1bf1fc113f0d",
  ],

  "Slingbags": [
    "photo-1566150905458-1bf1fc113f0d",
    "photo-1584917865442-de89df76afd3",
  ],

  "Clutches": [
    "photo-1594223274512-ad4803739b7c",
    "photo-1566150905458-1bf1fc113f0d",
  ],

  "Backpacks": [
    "photo-1553062407-98eeb64c6a62",
    "photo-1556306535-38febf6782e7",
  ],

  "waist Backs": [
    "photo-1553062407-98eeb64c6a62",
    "photo-1548036328-c9fa89d128fa",
  ],

  "Crossbody Bags & Sling Bags": [
    "photo-1566150905458-1bf1fc113f0d",
    "photo-1584917865442-de89df76afd3",
  ],

  "Duffel & Trolley Bags": [
    "photo-1553062407-98eeb64c6a62",
    "photo-1553531384-cc64ac80f931",
  ],

  "Laptop & Messenger Bags": [
    "photo-1496181133206-80ce9b88a853",
    "photo-1553062407-98eeb64c6a62",
  ],

  "Footwear": [
    "photo-1542291026-7eec264c27ff",
    "photo-1549298916-b41d501d3772",
  ],

  "Smartphones": [
    "photo-1511707171634-5f897ff02aa9",
    "photo-1598327105666-5b89351aff97",
  ],
  "Shimla Apples":[
    "https://images.meesho.com/images/products/656007775/tzq59_512.avif?width=512",
    "https://images.meesho.com/images/products/671044413/2a2gu_512.avif?width=512",
  ],
  "Jewellery":[
    "https://images.meesho.com/images/products/17410354/nqilr_512.avif?width=512",
    "https://images.meesho.com/images/products/3047775/1_512.avif?width=512"
  ],
  "Men Fashion":[
    "https://images.meesho.com/images/products/67346469/qf4bn_512.avif?width=512",
    "https://images.meesho.com/images/products/50094957/zgqcm_512.avif?width=360",
    "https://images.meesho.com/images/products/41980623/inueq_512.avif?width=360",
    "https://images.meesho.com/images/products/2653067/1_512.avif?width=360"

  ],
  "Kids":[
    "https://images.meesho.com/images/products/401835855/kcldm_512.avif?width=360",
    "https://images.meesho.com/images/products/479407806/b6op2_512.avif?width=360",
    "https://images.meesho.com/images/products/443187772/gtjgk_512.avif?width=360",
    "https://images.meesho.com/images/products/370869644/qppy7_512.avif?width=360"
  ],
  "Grocery":[
    "https://images.meesho.com/images/products/317220478/0abak_512.avif?width=360",
    "https://images.meesho.com/images/products/439473689/p8naz_512.avif?width=360",
    "https://images.meesho.com/images/products/430377850/a30zw_512.avif?width=360",
    "https://images.meesho.com/images/products/378742541/onxvg_512.avif?width=360"
  ],
  "Bags & Luggage":[
    "https://images.meesho.com/images/products/689574248/4fsyb_512.avif?width=360",
    "https://images.meesho.com/images/products/509526342/zkrf0_512.avif?width=360",
    "https://images.meesho.com/images/products/540259503/ymzhz_512.avif?width=360",
    "https://images.meesho.com/images/products/194885424/detoe_512.avif?width=360"
  ],
  "Stationery & Office Supplies":[
    "https://images.meesho.com/images/products/168555137/n0nxo_512.avif?width=360",
    "https://images.meesho.com/images/products/80429562/eykiz_512.avif?width=360",
    "https://images.meesho.com/images/products/246196018/azsdw_512.avif?width=360",
    "https://images.meesho.com/images/products/198461506/vmcrw_512.avif?width=360"
  ]
  
};

/* Fallback images */
const fallbackImages = [
  "photo-1483985988355-763728e1935b",
  "photo-1525507119028-ed4c629a60a3",
  "photo-1445205170230-053b83016050",
  "photo-1490481651871-ab68de25d43d",
  "photo-1529139574466-a303027c1d8b",
  "photo-1551028719-00167b16eac5",
];

/* Get images based on exact product category */
const getCategoryImages = (subcategory: string, index = 0): string[] => {
  const images = categoryImages[subcategory];

  if (images && images.length > 0) {
    return [
      images[index % images.length],
      images[(index + 1) % images.length],
    ];
  }

  return [
    fallbackImages[index % fallbackImages.length],
    fallbackImages[(index + 1) % fallbackImages.length],
  ];
};

/* Main products */
const coreData = [
  ["kurti-rose", "Floral Rayon Anarkali Kurti", "Rayon Kurtis", 499, 1199],
  ["saree-blue", "Blue Printed Georgette Saree", "Georgette Sarees", 649, 1599],
  ["dress-lilac", "Lilac Casual Midi Dress", "Gowns", 579, 1299],
  ["shirt-olive", "Olive Cotton Regular Shirt", "Shirts", 449, 999],
  ["sneaker-white", "Comfort White Everyday Sneakers", "Footwear", 899, 1999],
  ["handbag-tan", "Elegant Tan Shoulder Handbag", "Handbags", 699, 1499],
  ["watch-gold", "Minimal Gold Tone Watch", "Women Watches", 799, 1799],
  ["cushion-set", "Set of 5 Velvet Cushion Covers", "Clocks & Wall Decor", 359, 899],
  ["lip-kit", "Matte Lip Colour Kit", "Lipstick", 299, 699],
  ["kids-set", "Kids Printed T-Shirt & Shorts Set", "T-Shirt & Polos", 399, 899],
  ["smartphone-neo", "Neo 5G Smartphone, 128 GB", "Smartphones", 12999, 16999],
  ["laptop-air", "AirBook 14 Inch Laptop", "Laptop & Messenger Bags", 45999, 58999],
];

const core: Product[] = coreData.map(
  ([id, title, subcategory, price, originalPrice], index) => {
    const images = getCategoryImages(String(subcategory), index);

    return {
      id: String(id),
      title: String(title),
      subcategory: String(subcategory),
      category: String(subcategory),
      price: Number(price),
      originalPrice: Number(originalPrice),
      rating: 4 + (index % 6) / 10,
      reviews: 620 + index * 271,
      image: photo(images[0]),
      images: [photo(images[0]), photo(images[1])],
      description: `Thoughtfully selected ${String(
        subcategory
      ).toLowerCase()} with dependable quality, comfortable use and excellent value.`,
      specifications: [
        "Quality checked",
        "Easy care",
        "Securely packed",
        "7-day returns",
      ],
    };
  }
);

/* Generate category products */
const labels = [
  ...new Set(dropdownItems.map((item) => item.label)),
];

const titleWords = [
  "Essential",
  "Signature",
  "Everyday",
  "Premium",
  "Classic",
  "Modern",
  "Comfort",
  "Studio",
  "Luxe",
  "Fresh",
];

const generated: Product[] = labels.flatMap(
  (subcategory, labelIndex) =>
    Array.from({ length: 10 }, (_, index) => {
      const productNumber = index + 1;
      const images = getCategoryImages(subcategory, index);

      const price =
        249 + ((labelIndex * 91 + index * 73) % 1350);

      return {
        id: `${subcategory
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}-${productNumber}`,

        title: `${titleWords[index]} ${subcategory} ${productNumber}`,

        category: subcategory,
        subcategory,

        price,

        originalPrice: price + 400 + index * 75,

        rating:
          4 + ((labelIndex + index) % 7) / 10,

        reviews:
          114 +
          labelIndex * 37 +
          index * 83,

        image: photo(images[0]),

        images: [
          photo(images[0]),
          photo(images[1]),
        ],

        description: `A versatile ${subcategory.toLowerCase()} pick, designed for everyday quality and effortless style.`,

        specifications: [
          "Quality checked",
          "Easy to use",
          "Secure packaging",
          "7-day returns",
        ],
      };
    })
);

const coreIds = new Set(
  core.map((product) => product.id)
);

export const products = [
  ...core,
  ...generated.filter(
    (product) => !coreIds.has(product.id)
  ),
];

export const getProduct = (id: string) =>
  products.find((product) => product.id === id);

export const getProductsForCategory = (label: string) =>
  products.filter(
    (product) =>
      product.subcategory.toLowerCase() ===
      label.toLowerCase()
  );