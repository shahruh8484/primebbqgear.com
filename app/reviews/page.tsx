import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const allProducts = [
  // Gas Grills
  {
    slug: "weber-genesis-ii-e-335",
    name: "Weber Genesis II E-335",
    category: "Gas Grills",
    image: "/weber-gas-grill-stainless-steel-three-burners.jpg",
    rating: 4.8,
    summary: "Our favorite gas grill delivers consistent heat and exceptional build quality.",
    author: "Blake Harrison", // Updated author name
  },
  {
    slug: "blackstone-2450az-28-omnivore-griddle-bundle",
    name: "Blackstone 2450AZ 28 Omnivore Griddle Bundle",
    category: "Gas Grills",
    image: "https://m.media-amazon.com/images/I/71QLgJ5R+IL._AC_SX679_.jpg",
    rating: 4.9,
    summary: "Perfect for camping, backyard cooking, or tailgating.",
    author: "Morgan Fletcher", // Updated author name
  },
  {
    slug: "sophia-william-propane-gas-grill",
    name: "Sophia & William Propane Gas Grill and Griddle Combo",
    category: "Gas Grills",
    image: "https://m.media-amazon.com/images/I/61nq7SidALL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    rating: 4.8,
    summary: "Perfect for families, backyard BBQ lovers, and weekend entertainers.",
    author: "Reese Sullivan", // Updated author name
  },
  {
    slug: "napoleon-prestige-500",
    name: "Napoleon Prestige 500",
    category: "Gas Grills",
    image: "/napoleon-gas-grill.jpg",
    rating: 4.7,
    summary: "Premium gas grill with infrared burners and excellent heat distribution.",
    author: "Blake Harrison", // Updated author name
  },
  {
    slug: "big-horn-outdoors-1500",
    name: "BIG HORN OUTDOORS 1500°F Small Infrared Propane Gas Grill",
    category: "Gas Grills",
    image: "https://m.media-amazon.com/images/I/81JStQrSSNL._AC_SX679_.jpg",
    rating: 4.9,
    summary: "If you're serious about grilling and want restaurant-quality.",
    author: "Parker Bennett", // Updated author name
  },
  // Pellet Grills
  {
    slug: "traeger-pro-575",
    name: "Traeger Pro 575",
    category: "Pellet Grills",
    image: "/traeger-pellet-grill-smoker-black-outdoor.jpg",
    rating: 4.7,
    summary: "WiFi-enabled pellet grill perfect for low and slow cooking with consistent results.",
    author: "Avery Mitchell", // Updated author name
  },
  {
    slug: "pit-boss-10697-table-top",
    name: "PIT BOSS 10697 Table Top Wood Grill With Temperature Control",
    category: "Pellet Grills",
    image: "https://m.media-amazon.com/images/I/71EATm+utGL._AC_SX679_.jpg",
    rating: 4.6,
    summary: "Solid choice for anyone who wants woody, smoky flavor in a small-footprint unit.",
    author: "Quinn Reynolds", // Updated author name
  },
  {
    slug: "camp-chef-smokepro-dlx",
    name: "Camp Chef SmokePro DLX",
    category: "Pellet Grills",
    image: "/camp-chef-pellet-grill.jpg",
    rating: 4.5,
    summary: "Affordable pellet grill with excellent temperature control and large cooking area.",
    author: "Avery Mitchell", // Updated author name
  },
  // Ceramic Grills
  {
    slug: "kamado-joe-classic-iii",
    name: "Kamado Joe Classic III",
    category: "Ceramic Grills",
    image: "/kamado-joe-ceramic-grill-red-outdoor-cooking.jpg",
    rating: 4.9,
    summary: "Premium ceramic grill that excels at grilling, smoking, and even baking pizza.",
    author: "Sage Montgomery", // Updated author name
  },
  {
    slug: "big-green-egg-large",
    name: "Big Green Egg Large",
    category: "Ceramic Grills",
    image: "/big-green-egg-ceramic-grill.jpg",
    rating: 4.8,
    summary: "The original ceramic grill with exceptional heat retention and versatility.",
    author: "Sage Montgomery", // Updated author name
  },
  // Charcoal Grills
  {
    slug: "char-griller-portable-charcoal-grill",
    name: "Char-Griller Portable Charcoal Grill",
    category: "Charcoal Grills",
    image: "https://m.media-amazon.com/images/I/61B4Vt96xQL._AC_SX679_.jpg",
    rating: 4.7,
    summary: "A compact, heavy-duty grill that doubles as a true Texas-style smoker.",
    author: "River Caldwell", // Updated author name
  },
  {
    slug: "weber-original-kettle", // Fixed slug to match review detail page
    name: "Weber Original Kettle 22-Inch Charcoal Grill",
    category: "Charcoal Grills",
    image: "https://m.media-amazon.com/images/I/71CYJCS4+qL._AC_SY879_.jpg",
    rating: 4.7,
    summary: "A timeless classic reinvented for the modern backyard cook.",
    author: "Parker Bennett", // Updated author name
  },

  // Electric Grills
  {
    slug: "hmilton-bech-electric-indoor-searing-grill",
    name: "Hamilton Beach Electric Indoor Searing Grill with Viewing Window",
    category: "Electric Grills",
    image: "https://m.media-amazon.com/images/I/81QXVkhCpwL._AC_SX679_.jpg",
    rating: 4.7,
    summary: "Enjoy real grill flavor — indoors, anytime.",
    author: "River Caldwell", // Updated author name
  },
  {
    slug: "chefman-xl-electric-griddle-with-removable-temperature-control",
    name: "Chefman XL Electric Griddle with Removable Temperature Control",
    category: "Electric Grills",
    image: "https://m.media-amazon.com/images/I/61-Mjaq73QL._AC_SX679_.jpg",
    rating: 4.5,
    summary: "For home cooks looking to replicate a griddle-style cooking experience indoors.",
    author: "River Caldwell", // Updated author name
  },

  // Accessories
  {
    slug: "oxo-good-grips-tongs",
    name: "OXO Good Grips 16-Inch Locking Tongs",
    category: "Accessories",
    image: "/oxo-good-grips-16-inch-locking-tongs.jpg",
    rating: 4.8,
    summary: "Best overall grilling tongs with comfortable grip and precise control.",
    author: "Blake Harrison", // Updated author name
  },
  {
    slug: "weber-original-spatula",
    name: "Weber Original Stainless Steel Spatula",
    category: "Accessories",
    image: "/weber-stainless-steel-spatula-grilling-tool.jpg",
    rating: 4.6,
    summary: "Durable stainless steel spatula with angled head for easy flipping.",
    author: "Blake Harrison", // Updated author name
  },
  {
    slug: "thermo-tp826-500ft-ireless-meat",
    name: "ThermoPro TP826 500FT Wireless Meat Thermometer",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/71MNNzM6hdL._AC_SX679_.jpg",
    rating: 4.8,
    summary: "Reliable, long-range temperature monitoring for the perfect cook every time.",
    author: "Morgan Fletcher", // Updated author name
  },
  {
    slug: "grill-heat-aid-gloves",
    name: "Grill Heat Aid Extreme Heat Resistant BBQ Gloves",
    category: "Accessories",
    image: "/grill-heat-aid-extreme-heat-resistant-bbq-gloves.jpg",
    rating: 4.7,
    summary: "Heat-resistant gloves rated to 932°F for safe handling of hot items.",
    author: "Quinn Reynolds", // Updated author name
  },
  // Brushes
  {
    slug: "weber-3-sided-grill-brush",
    name: "Weber 3-Sided Grill Brush",
    category: "Brushes",
    image: "/weber-3-sided-stainless-steel-grill-brush.jpg",
    rating: 4.7,
    summary: "Best overall grill brush with three-sided design for efficient cleaning.",
    author: "Reese Sullivan", // Updated author name
  },
  {
    slug: "grill-rescue-brush",
    name: "Grill Rescue BBQ Grill Brush and Scraper",
    category: "Brushes",
    image: "/grill-rescue-wire-free-cleaning-brush.jpg",
    rating: 4.6,
    summary: "Bristle-free brush that's safe and effective for all grate types.",
    author: "Reese Sullivan", // Updated author name
  },
  // Covers
  {
    slug: "weber-premium-grill-cover",
    name: "Weber Premium Grill Cover",
    category: "Covers",
    image: "/weber-premium-black-grill-cover-on-outdoor-grill.jpg",
    rating: 4.8,
    summary: "Best overall grill cover with heavy-duty construction and perfect fit.",
    author: "Parker Bennett", // Updated author name
  },
  {
    slug: "classic-accessories-veranda",
    name: "Classic Accessories Veranda Grill Cover",
    category: "Covers",
    image: "/classic-accessories-veranda-cappuccino-brown-grill.jpg",
    rating: 4.6,
    summary: "Budget-friendly cover with good weather protection and ventilation.",
    author: "Parker Bennett", // Updated author name
  },
  {
    slug: "icover-grill-cover-for-weber-22-inch-charcoal-kettle",
    name: "iCOVER Grill Cover for Weber 22 Inch Charcoal Kettle",
    category: "Covers",
    image: "https://m.media-amazon.com/images/I/61clk-BFGlL._AC_SX679_.jpg",
    rating: 4.4,
    summary: "Cover for Weber 22 Inch Charcoal Kettle.",
    author: "Parker Bennett", // Updated author name
  },
  // Sauces
  {
    slug: "sweet-baby-rays-original",
    name: "Sweet Baby Ray's Original Barbecue Sauce",
    category: "Sauces",
    image: "/sweet-baby-rays-original-bbq-sauce-bottle.jpg",
    rating: 4.5,
    summary: "Classic sweet and tangy sauce that's perfect for ribs and chicken.",
    author: "Avery Mitchell", // Updated author name
  },
  {
    slug: "stubbs-original-bar-b-q-sauce",
    name: "Stubb's Original Bar-B-Q Sauce",
    category: "Sauces",
    image: "/stubbs-original-bbq-sauce-bottle-texas-style.jpg",
    rating: 4.6,
    summary: "Texas-style sauce with bold flavor and natural ingredients.",
    author: "Avery Mitchell", // Updated author name
  },
  {
    slug: "o-food-gochujang-authentic-koren-red-chili-paste",
    name: "O’food Gochujang – Authentic Korean Red Chili Paste",
    category: "Sauces",
    image: "https://m.media-amazon.com/images/I/61EvTGTXcWL._SX679_.jpg",
    rating: 4.5,
    summary: "Made with all-natural ingredients.",
    author: "Avery Mitchell", // Updated author name
  },
  {
    slug: "kraft-sweet-brown-sugar-slow-simmered-brbeque-sauce",
    name: "Kraft Sweet Brown Sugar Slow-Simmered Barbecue Sauce",
    category: "Sauces",
    image: "https://m.media-amazon.com/images/I/71lBhl5zPaL._SX679_.jpg",
    rating: 3.9,
    summary: "Classic barbecue sauce.",
    author: "Avery Mitchell", // Updated author name
  },
  {
    slug: "hickory-brown-sugar-bbq-sauce",
    name: "Hickory Brown Sugar Bbq Sauce",
    category: "Sauces",
    image: "https://m.media-amazon.com/images/I/41nJ2DbovlL._SX679_.jpg",
    rating: 4.2,
    summary: "Classic American barbecue experience.",
    author: "Avery Mitchell", // Updated author name
  },
]

const categoryData = [
  {
    name: "Gas Grills",
    image: "/category-gas-grills.jpg",
    description: "High-performance gas grills for quick and convenient cooking",
  },
  {
    name: "Pellet Grills",
    image: "/category-pellet-grills.jpg",
    description: "Wood-fired flavor with precise temperature control",
  },
  {
    name: "Ceramic Grills",
    image: "/category-ceramic-grills.jpg",
    description: "Premium ceramic grills for exceptional heat retention",
  },
  {
    name: "Charcoal Grills",
    image: "/category-charcoal-grills.jpg",
    description: "Classic charcoal grills for authentic smoky flavor",
  },
  {
    name: "Electric Grills",
    image: "/category-electric-grills.jpg",
    description: "Indoor and outdoor electric grilling solutions",
  },
  {
    name: "Accessories",
    image: "/category-accessories.jpg",
    description: "Essential tools and gadgets for better grilling",
  },
  {
    name: "Brushes",
    image: "/category-brushes.jpg",
    description: "Keep your grill clean with the best brushes",
  },
  {
    name: "Covers",
    image: "/category-covers.jpg",
    description: "Protect your investment with quality grill covers",
  },
  {
    name: "Sauces",
    image: "/category-sauces.jpg",
    description: "Elevate your BBQ with premium sauces and marinades",
  },
]

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-border pb-8">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">All Reviews</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Comprehensive reviews of every grill, accessory, and product we've tested
            </p>
          </div>

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">Browse by Category</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryData.map((category) => (
                <a
                  key={category.name}
                  href={`#${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group block overflow-hidden border border-border transition-all hover:border-foreground hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {categoryData.map((categoryInfo) => {
            const categoryProducts = allProducts.filter((product) => product.category === categoryInfo.name)

            if (categoryProducts.length === 0) return null

            return (
              <section
                key={categoryInfo.name}
                id={categoryInfo.name.toLowerCase().replace(/\s+/g, "-")}
                className="mb-16"
              >
                <h2 className="mb-8 text-3xl font-bold">{categoryInfo.name}</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <a
                      key={product.slug}
                      href={`/reviews/${product.slug}`}
                      className="group block overflow-hidden border border-border transition-all hover:border-foreground hover:shadow-lg"
                    >
                      <div className="relative h-64 overflow-hidden bg-muted">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2 flex items-center gap-2">
                          <div className="flex items-center">
                            <span className="text-lg font-bold">{product.rating}</span>
                            <span className="ml-1 text-yellow-500">★</span>
                          </div>
                          <span className="text-sm text-muted-foreground">• {product.author}</span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold leading-tight group-hover:text-primary">
                          {product.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
