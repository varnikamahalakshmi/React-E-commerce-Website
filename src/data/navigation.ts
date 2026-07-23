export type NavigationItem = { label: string; path: string; section: string; menu: string };
export type NavigationGroup = { heading: string; items: NavigationItem[] };
export type NavigationMenu = { label: string; groups: NavigationGroup[]; alignEnd?: boolean };

const slug = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const menu = (label: string, groups: Array<[string, string[]]>, alignEnd = false): NavigationMenu => ({
  label,
  alignEnd,
  groups: groups.map(([heading, labels]) => ({
    heading,
    items: labels.map((itemLabel) => ({
      label: itemLabel,
      path: `/category/${slug(label)}/${slug(heading)}/${slug(itemLabel)}`,
      section: heading,
      menu: label,
    })),
  })),
});

export const navigationMenus: NavigationMenu[] = [
  menu("Popular", [["Featured On Lumora", ["Smartphones", "Top Brands", "Shimla Apples"]], ["All Popular", ["Jewellery", "Men Fashion", "Kids", "Footwear", "Grocery", "Bags & Luggage", "Stationery & Office Supplies"]]]),
  menu("Kurti,Saree & Lehenga", [["Sarees", ["Georgette Sarees", "Chiffon Sarees", "Cotton Sarees"]], ["Kurtis", ["Anarkali Kurtis", "Rayon Kurtis", "Cotton Kurtis", "Long Kurtis"]], ["Lehenga", ["Shoppers Favourite", "Trending Lehengas"]]]),
  menu("Women Western", [["Topwear", ["Tops & Tunics", "T-shirts", "Gowns"]], ["Bottom Wear", ["All Bottomwear", "Shorts & Skirts", "Jeans & Jeggings", "Palazzos"]], ["Winterwear", ["Jackets", "Capes, Shrug & Ponchos"]]]),
  menu("Lingerie", [["Sleepwear", ["Women Nightsuits", "Women Nightdress"]], ["Sports Wear", ["Sports Bottomwear", "Top & Bottom Sets"]]]),
  menu("Men", [["Top Wear", ["Summer T-Shirts", "Shirts"]], ["Bottom Wear", ["Jeans", "Dhotis/Lungis", "Cargos/Trousers"]], ["Ethnic Wear", ["Kurtas", "Kurta Sets"]]]),
  menu("Kids & Toys", [["Kids Accessories", ["Bags & Backpacks", "Party Items"]], ["Kids Toys", ["Toys & Games", "Summer Picks", "Baby Gears"]], ["Kids Clothing", ["Frocks & Dresses", "T-Shirt & Polos"]]]),
  menu("Home & Kitchen", [["Home Decor", ["Pooja Needs", "Clocks & Wall Decor", "Wallpapers & Stickers"]], ["Kitchen & Appliances", ["Storage & Organizers", "Cookware", "Glasses & Barware", "Kitchen Tools"]], ["Furniture", ["Shoe Racks", "Study Tables"]]]),
  menu("Beauty & Health", [["Makeup", ["Lipstick", "Eye Shadow and Liner", "Nail Makeup"]], ["Personal Care", ["Body Lotion", "Hair Oil & Shampoo", "Face Wash", "Soaps & Scrubs"]], ["Healthcare", ["Winter Healthcare", "Health Monitor & Massagers"]]]),
  menu("Jewellery & Accessories", [["Women Accessories", ["Women Watches", "Hair Accessories", "Scarves, Stoles & Gloves"]], ["Men Accessories", ["Men Watches", "Wallets"]]]),
  menu("Bags & Footwear", [["Men Bags", ["Backpacks", "waist Backs", "Crossbody Bags & Sling Bags"]], ["Women Bags", ["Backpacks", "Handbags", "Slingbags", "Clutches"]], ["Travel Bags, Luggage and Accessories", ["Duffel & Trolley Bags", "Laptop & Messenger Bags"]]], true),
];

export const dropdownItems = navigationMenus.flatMap((menuItem) => menuItem.groups.flatMap((group) => group.items));
