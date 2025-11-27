import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const allProducts = [
  // Gas Grills
  {
    slug: "weber-genesis-ii-e-335",
    name: "Weber Genesis II E-335",
    category: "Gas Grills",
    image: "/weber-gas-grill-stainless-steel-three-burners.jpg",
    rating: 4.8,
    summary: "Our favorite gas grill delivers consistent heat and exceptional build quality.",
    author: "Blake Harrison",
    amazonUrl: "", // Removed amazonUrl to hide "View on Amazon" button
  },
  {
    slug: "blackstone-2450az-28-omnivore-griddle-bundle",
    name: "Blackstone 2450AZ 28 Omnivore Griddle Bundle",
    category: "Gas Grills",
    image: "https://m.media-amazon.com/images/I/71QLgJ5R+IL._AC_SX679_.jpg",
    rating: 4.9,
    summary: "Perfect for camping, backyard cooking, or tailgating.",
    author: "Morgan Fletcher",
    amazonUrl:
      "https://www.amazon.com/Blackstone-2450AZ-Omnivore-Griddle-Spatulas/dp/B0DGY312P1?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=f5bdebae20bb22267bfb99f00c93e54b&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  {
    slug: "sophia-william-propane-gas-grill",
    name: "Sophia & William Propane Gas Grill and Griddle Combo",
    category: "Gas Grills",
    image: "https://m.media-amazon.com/images/I/61nq7SidALL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    rating: 4.8,
    summary: "Perfect for families, backyard BBQ lovers, and weekend entertainers.",
    author: "Reese Sullivan",
    amazonUrl:
      "https://www.amazon.com/Sophia-William-Propane-Porcelain-Enameled-Barbecue/dp/B0DDBPYTXL?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=7984f9bd63c0ba17fde9991da7b7c17c&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  {
    slug: "napoleon-prestige-500",
    name: "Napoleon Prestige 500",
    category: "Gas Grills",
    image: "/napoleon-gas-grill.jpg",
    rating: 4.7,
    summary: "Premium gas grill with infrared burners and excellent heat distribution.",
    author: "Blake Harrison",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "big-horn-outdoors-1500",
    name: "BIG HORN OUTDOORS 1500°F Small Infrared Propane Gas Grill",
    category: "Gas Grills",
    image: "https://m.media-amazon.com/images/I/81JStQrSSNL._AC_SX679_.jpg",
    rating: 4.9,
    summary: "If you're serious about grilling and want restaurant-quality.",
    author: "Parker Bennett",
    amazonUrl:
      "https://www.amazon.com/BIG-HORN-OUTDOORS-Portable-Stainless/dp/B089Y1HXSF?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=0fd55b61a18b48f57a2d990f07b61bd7&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  // Pellet Grills
  {
    slug: "traeger-pro-575",
    name: "Traeger Pro 575",
    category: "Pellet Grills",
    image: "/traeger-pellet-grill-smoker-black-outdoor.jpg",
    rating: 4.7,
    summary: "WiFi-enabled pellet grill perfect for low and slow cooking with consistent results.",
    author: "Avery Mitchell",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "pit-boss-10697-table-top",
    name: "PIT BOSS 10697 Table Top Wood Grill With Temperature Control",
    category: "Pellet Grills",
    image: "https://m.media-amazon.com/images/I/71EATm+utGL._AC_SX679_.jpg",
    rating: 4.6,
    summary: "Solid choice for anyone who wants woody, smoky flavor in a small-footprint unit.",
    author: "Quinn Reynolds",
    amazonUrl:
      "https://www.amazon.com/PIT-BOSS-10697-Pellet-Mahogany/dp/B08Y66479M?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=2916838eecbb0bab161b21de2b2dfb8d&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  {
    slug: "camp-chef-smokepro-dlx",
    name: "Camp Chef SmokePro DLX",
    category: "Pellet Grills",
    image: "/camp-chef-pellet-grill.jpg",
    rating: 4.5,
    summary: "Affordable pellet grill with excellent temperature control and large cooking area.",
    author: "Avery Mitchell",
    amazonUrl: "", // Added empty Amazon URL
  },
  // Ceramic Grills
  {
    slug: "kamado-joe-classic-iii",
    name: "Kamado Joe Classic III",
    category: "Ceramic Grills",
    image: "/kamado-joe-ceramic-grill-red-outdoor-cooking.jpg",
    rating: 4.9,
    summary: "Premium ceramic grill that excels at grilling, smoking, and even baking pizza.",
    author: "Sage Montgomery",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "big-green-egg-large",
    name: "Big Green Egg Large",
    category: "Ceramic Grills",
    image: "/big-green-egg-ceramic-grill.jpg",
    rating: 4.8,
    summary: "The original ceramic grill with exceptional heat retention and versatility.",
    author: "Sage Montgomery",
    amazonUrl: "", // Added empty Amazon URL
  },
  // Charcoal Grills
  {
    slug: "char-griller-portable-charcoal-grill",
    name: "Char-Griller Portable Charcoal Grill",
    category: "Charcoal Grills",
    image: "https://m.media-amazon.com/images/I/61B4Vt96xQL._AC_SX679_.jpg",
    rating: 4.7,
    summary: "A compact, heavy-duty grill that doubles as a true Texas-style smoker.",
    author: "River Caldwell",
    amazonUrl:
      "https://www.amazon.com/Char-Griller-E82424-Charcoal-Grill-Black/dp/B07YNGRRHS?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=07a0889d6d5077873b3624d335e692b6&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  {
    slug: "weber-original-kettle",
    name: "Weber Original Kettle 22-Inch Charcoal Grill",
    category: "Charcoal Grills",
    image: "https://m.media-amazon.com/images/I/71CYJCS4+qL._AC_SY879_.jpg",
    rating: 4.7,
    summary: "A timeless classic reinvented for the modern backyard cook.",
    author: "Parker Bennett",
    amazonUrl:
      "https://www.amazon.com/Weber-741001-Original-22-Inch-Charcoal/dp/B00004RALU?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=4925f3e2c8117bb2451335d384ccf7f7&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },

  // Electric Grills
  {
    slug: "hmilton-bech-electric-indoor-searing-grill",
    name: "Hamilton Beach Electric Indoor Searing Grill with Viewing Window",
    category: "Electric Grills",
    image: "https://m.media-amazon.com/images/I/81QXVkhCpwL._AC_SX679_.jpg",
    rating: 4.7,
    summary: "Enjoy real grill flavor — indoors, anytime.",
    author: "River Caldwell",
    amazonUrl:
      "https://www.amazon.com/Hamilton-Beach-25361-Removable-Stainless/dp/B00KLVY3TW?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=0bf433546b8fa4c609f9542429084e42&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  {
    slug: "chefman-xl-electric-griddle-with-removable-temperature-control",
    name: "Chefman XL Electric Griddle with Removable Temperature Control",
    category: "Electric Grills",
    image: "https://m.media-amazon.com/images/I/61-Mjaq73QL._AC_SX679_.jpg",
    rating: 4.5,
    summary: "For home cooks looking to replicate a griddle-style cooking experience indoors.",
    author: "River Caldwell",
    amazonUrl:
      "https://www.amazon.com/Chefman-Electric-Removable-Temperature-Immersible/dp/B0C4Z39TK9?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=cd8548605d59124fbe570707bb2c3864&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },

  // Accessories
  {
    slug: "oxo-good-grips-tongs",
    name: "OXO Good Grips 16-Inch Locking Tongs",
    category: "Accessories",
    image: "/oxo-good-grips-16-inch-locking-tongs.jpg",
    rating: 4.8,
    summary: "Best overall grilling tongs with comfortable grip and precise control.",
    author: "Blake Harrison",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "weber-original-spatula",
    name: "Weber Original Stainless Steel Spatula",
    category: "Accessories",
    image: "/weber-stainless-steel-spatula-grilling-tool.jpg",
    rating: 4.6,
    summary: "Durable stainless steel spatula with angled head for easy flipping.",
    author: "Blake Harrison",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "thermo-tp826-500ft-ireless-meat",
    name: "ThermoPro TP826 500FT Wireless Meat Thermometer",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/71MNNzM6hdL._AC_SX679_.jpg",
    rating: 4.8,
    summary: "Reliable, long-range temperature monitoring for the perfect cook every time.",
    author: "Morgan Fletcher",
    amazonUrl:
      "https://www.amazon.com/ThermoPro-Wireless-Digital-Cooking-Thermometer/dp/B08KZQG3ZF?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=0be3736575a2c6b1a8eed5f94de3e181&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  {
    slug: "grill-heat-aid-gloves",
    name: "Grill Heat Aid Extreme Heat Resistant BBQ Gloves",
    category: "Accessories",
    image: "/grill-heat-aid-extreme-heat-resistant-bbq-gloves.jpg",
    rating: 4.7,
    summary: "Heat-resistant gloves rated to 932°F for safe handling of hot items.",
    author: "Quinn Reynolds",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "ofargo-stainless-steel-meat-injector",
    name: "Ofargo Stainless Steel Meat Injector Syringe Kit",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/71mc1iwSa7L._AC_SL1500_.jpg",
    rating: 4.7,
    summary: "Professional-grade meat injector for deep flavor infusion and moisture retention.",
    author: "Blake Harrison",
    amazonUrl:
      "https://www.amazon.com/OFG-304-Stainless-Injector-Marinade-Capacity/dp/B086BXVT1H?&linkCode=ll1&tag=urfnjust-20&linkId=049c7e362e34054a6735eee5bd779802&language=en_US&ref_=as_li_ss_tl",
  },
  {
    slug: "meat-thermometer-digital",
    name: "Meat Thermometer Digital",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/71tH5GsFEgL._SL1500_.jpg",
    rating: 4.6,
    summary: "Fast and accurate instant-read thermometer with backlit display and calibration.",
    author: "Morgan Fletcher",
    amazonUrl:
      "https://www.amazon.com/Thermometer-Waterproof-Backlight-Calibration-Function%EF%BC%8CFood/dp/B0DQDB5DRR?th=1&linkCode=ll1&tag=urfnjust-20&linkId=164f012bef0b8d3153b37e8737432250&language=en_US&ref_=as_li_ss_tl",
  },
  {
    slug: "cuisinart-cast-iron-smashed-burger-press",
    name: 'Cuisinart 6.5" Cast Iron Smashed Burger Press',
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/81WqU-lxj5L._AC_SL1500_.jpg",
    rating: 4.8,
    summary: "Heavy-duty cast iron press creates perfectly crispy smash burgers every time.",
    author: "Quinn Reynolds",
    amazonUrl:
      "https://www.amazon.com/Cuisinart-CISB-111-Smashed-Burger-Press/dp/B07SZFHKVZ?th=1&linkCode=ll1&tag=urfnjust-20&linkId=e2ca5f2739357f4c6b35e6f9744fefa5&language=en_US&ref_=as_li_ss_tl",
  },
  {
    slug: "rolling-grill-basket",
    name: "Rolling Grill Basket",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/81QbXyUeF5L._AC_SL1500_.jpg",
    rating: 4.5,
    summary: "Innovative rolling basket makes grilling vegetables and small items effortless.",
    author: "Parker Bennett",
    amazonUrl:
      "https://www.amazon.com/Ivtivfu-Grilling-Accessories-Vegetable-Stainless/dp/B0CGX3ZGBK?&linkCode=ll1&tag=urfnjust-20&linkId=67d5481c5b6487897247434e69f31651&language=en_US&ref_=as_li_ss_tl",
  },
  {
    slug: "alpha-grillers-meat-shredder-claws",
    name: "Alpha Grillers Meat Shredder Claws",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/819XS5o9HbL._AC_SL1500_.jpg",
    rating: 4.9,
    summary: "Ultra-sharp shredding claws make quick work of pulled pork and chicken.",
    author: "Reese Sullivan",
    amazonUrl:
      "https://www.amazon.com/Alpha-Grillers-Claws-Shredding-Shredder/dp/B09J746BHB?&linkCode=ll1&tag=urfnjust-20&linkId=c4338e22c625e0fb46ff55053a9b9ec8&language=en_US&ref_=as_li_ss_tl",
  },
  {
    slug: "comsmart-bbq-gloves",
    name: "Comsmart BBQ Gloves",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/617Ehr+eMYL._AC_SL1000_.jpg",
    rating: 4.6,
    summary: "Heat-resistant silicone gloves with non-slip grip for safe grill handling.",
    author: "Quinn Reynolds",
    amazonUrl:
      "https://www.amazon.com/Resistant-Grilling-Silicone-Non-Slip-Barbecue/dp/B07YTVMRV4?th=1&linkCode=ll1&tag=urfnjust-20&linkId=1176c97731a667ed27aea627d6c7343f&language=en_US&ref_=as_li_ss_tl",
  },
  {
    slug: "griddle-accessories-kit-blackstone",
    name: "27pcs Griddle Accessories Kit for Blackstone",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/81E9Ui5MvtL._AC_SL1500_.jpg",
    rating: 4.7,
    summary: "Complete griddle tool set with everything needed for flat-top cooking.",
    author: "Sarah Martinez",
    amazonUrl:
      "https://www.amazon.com/Grilliance-Blackstone-Accessories-Chef%EF%BC%8CHibachi-Cover%EF%BC%8CBurger/dp/B0D46SH7QG?&linkCode=ll1&tag=urfnjust-20&linkId=ee803ab410b17ca1fb7fb43f0cb2d3e5&language=en_US&ref_=as_li_ss_tl",
  },
  {
    slug: "kosin-barbecue-grill-light",
    name: "KOSIN Barbecue Grill Light Magnetic Base",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/71KvZ2o6bDL._AC_SL1500_.jpg",
    rating: 4.5,
    summary: "Bright LED grill light with magnetic mount for nighttime grilling visibility.",
    author: "River Caldwell",
    amazonUrl:
      "https://www.amazon.com/KOSIN-Light-Resistant-Multi-Purpose-Batteries/dp/B07PHQWR3V?th=1&linkCode=ll1&tag=urfnjust-20&linkId=7ced251f26a83a5bf4402a6f2b546e49&language=en_US&ref_=as_li_ss_tl",
  },
  {
    slug: "marshmallow-roasting-sticks",
    name: "Marshmallow Roasting Sticks",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/71HaGgA5CsL._AC_SL1500_.jpg",
    rating: 4.4,
    summary: "Telescoping roasting sticks perfect for campfire s'mores and hot dogs.",
    author: "Melanie Chow",
    amazonUrl:
      "https://www.amazon.com/Marshmallow-Roasting-Telescoping-Toasting-Barbecue/dp/B09CZ475Q6?th=1&linkCode=ll1&tag=urfnjust-20&linkId=db2a0bd059b382e7866b66e2a58470a8&language=en_US&ref_=as_li_ss_tl",
  },
  // Brushes
  {
    slug: "weber-3-sided-grill-brush",
    name: "Weber 3-Sided Grill Brush",
    category: "Brushes",
    image: "/weber-3-sided-stainless-steel-grill-brush.jpg",
    rating: 4.7,
    summary: "Best overall grill brush with three-sided design for efficient cleaning.",
    author: "Reese Sullivan",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "grill-rescue-brush",
    name: "Grill Rescue BBQ Grill Brush and Scraper",
    category: "Brushes",
    image: "/grill-rescue-wire-free-cleaning-brush.jpg",
    rating: 4.6,
    summary: "Bristle-free brush that's safe and effective for all grate types.",
    author: "Reese Sullivan",
    amazonUrl: "", // Added empty Amazon URL
  },
  // Covers
  {
    slug: "weber-premium-grill-cover",
    name: "Weber Premium Grill Cover",
    category: "Covers",
    image: "/weber-premium-black-grill-cover-on-outdoor-grill.jpg",
    rating: 4.8,
    summary: "Best overall grill cover with heavy-duty construction and perfect fit.",
    author: "Parker Bennett",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "classic-accessories-veranda",
    name: "Classic Accessories Veranda Grill Cover",
    category: "Covers",
    image: "/classic-accessories-veranda-cappuccino-brown-grill.jpg",
    rating: 4.6,
    summary: "Budget-friendly cover with good weather protection and ventilation.",
    author: "Parker Bennett",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "icover-grill-cover-for-weber-22-inch-charcoal-kettle",
    name: "iCOVER Grill Cover for Weber 22 Inch Charcoal Kettle",
    category: "Covers",
    image: "https://m.media-amazon.com/images/I/61clk-BFGlL._AC_SX679_.jpg",
    rating: 4.4,
    summary: "Cover for Weber 22 Inch Charcoal Kettle.",
    author: "Parker Bennett",
    amazonUrl:
      "https://www.amazon.com/iCOVER-Charcoal-Kettle-Waterproof-Char-Broil/dp/B0C3QBBQZG?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=910c19084e5f9ab33e9f77542fcba9a7&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  // Sauces
  {
    slug: "sweet-baby-rays-original",
    name: "Sweet Baby Ray's Original Barbecue Sauce",
    category: "Sauces",
    image: "/sweet-baby-rays-original-bbq-sauce-bottle.jpg",
    rating: 4.5,
    summary: "Classic sweet and tangy sauce that's perfect for ribs and chicken.",
    author: "Avery Mitchell",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "stubbs-original-bar-b-q-sauce",
    name: "Stubb's Original Bar-B-Q Sauce",
    category: "Sauces",
    image: "/stubbs-original-bbq-sauce-bottle-texas-style.jpg",
    rating: 4.6,
    summary: "Texas-style sauce with bold flavor and natural ingredients.",
    author: "Avery Mitchell",
    amazonUrl: "", // Added empty Amazon URL
  },
  {
    slug: "o-food-gochujang-authentic-koren-red-chili-paste",
    name: "O'food Gochujang – Authentic Korean Red Chili Paste",
    category: "Sauces",
    image: "https://m.media-amazon.com/images/I/61EvTGTXcWL._SX679_.jpg",
    rating: 4.5,
    summary: "Made with all-natural ingredients.",
    author: "Avery Mitchell",
    amazonUrl:
      "https://www.amazon.com/OFood-Gochujang-Authentic-Traditional-Gluten-Free/dp/B013HB0CC4?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=323b47602a0e29d76a8deb2f059999cf&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  {
    slug: "kraft-sweet-brown-sugar-slow-simmered-brbeque-sauce",
    name: "Kraft Sweet Brown Sugar Slow-Simmered Barbecue Sauce",
    category: "Sauces",
    image: "https://m.media-amazon.com/images/I/71lBhl5zPaL._SX679_.jpg",
    rating: 3.9,
    summary: "Classic barbecue sauce.",
    author: "Avery Mitchell",
    amazonUrl:
      "https://www.amazon.com/Kraft-Sweet-Barbecue-Sauce-Bottle/dp/B00VC5BWYA?th=1&linkCode=ll1&tag=bestprimebbqg-20&linkId=a83c6cbb37c37fb7a4e4913c001e3290&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
  },
  {
    slug: "hickory-brown-sugar-bbq-sauce",
    name: "Hickory Brown Sugar Bbq Sauce",
    category: "Sauces",
    image: "https://m.media-amazon.com/images/I/41nJ2DbovlL._SX679_.jpg",
    rating: 4.2,
    summary: "Classic American barbecue experience.",
    author: "Avery Mitchell",
    amazonUrl:
      "https://www.amazon.com/Hickory-Barbecue-Marinade-Fructose-Authentic/dp/B0D12MRWKP?&linkCode=ll1&tag=bestprimebbqg-20&linkId=bc4533ee4ab7495586ca87f93a18dc55&language=en_US&ref_=as_li_ss_tl", // Added Amazon URL
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
                    <div
                      key={product.slug}
                      className="group block overflow-hidden border border-border transition-all hover:border-foreground hover:shadow-lg"
                    >
                      <a href={`/reviews/${product.slug}`}>
                        <div className="relative h-64 overflow-hidden bg-muted">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </a>
                      <div className="p-6">
                        <div className="mb-2 flex items-center gap-2">
                          <div className="flex items-center">
                            <span className="text-lg font-bold">{product.rating}</span>
                            <span className="ml-1 text-yellow-500">★</span>
                          </div>
                          <span className="text-sm text-muted-foreground">• {product.author}</span>
                        </div>
                        <a href={`/reviews/${product.slug}`}>
                          <h3 className="mb-2 text-xl font-bold leading-tight group-hover:text-primary">
                            {product.name}
                          </h3>
                        </a>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                        {product.amazonUrl && (
                          <Button
                            size="sm"
                            className="w-full bg-black hover:bg-gray-800 text-white font-semibold"
                            asChild
                          >
                            <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                              View on Amazon
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
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
