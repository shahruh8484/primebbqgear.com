import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

const gasGrills = [
  {
    id: "weber-genesis-ii-e-335",
    name: "Weber Genesis II E-335",
    category: "Best Overall",
    rating: 4.8,
    image: "/weber-gas-grill-stainless-steel-three-burners.jpg",
    description: "Our favorite gas grill delivers consistent heat and exceptional build quality.",
    features: [
      "Three stainless steel burners with 39,000 BTU",
      "669 sq. in. total cooking area",
      "Porcelain-enameled cast-iron grates",
      "Built-in thermometer and side tables",
      "10-year warranty on all parts",
      "GS4 grilling system with infinity ignition",
      "Grease management system",
    ],
    pros: [
      "Excellent heat distribution",
      "Durable construction",
      "Easy to clean",
      "Great warranty coverage",
      "Reliable ignition system",
    ],
    cons: ["Assembly required", "Side tables could be larger"],
    author: "Alice Thompson",
    testingNote: "Tested over 6 months with 50+ grilling sessions",
    detailedReview:
      "After six months of rigorous testing, the Weber Genesis II E-335 proved to be the most reliable and consistent gas grill we tested. The three-burner system provides excellent heat control, allowing us to create distinct temperature zones for different cooking methods. We particularly appreciated the GS4 grilling system, which includes an improved ignition that worked flawlessly in all weather conditions. The porcelain-enameled cast-iron grates retained heat exceptionally well and created beautiful sear marks on steaks. The grease management system made cleanup significantly easier than competing models. Build quality is outstanding, with heavy-duty materials throughout that should last for many years. The 10-year warranty provides excellent peace of mind.",
    performanceNotes:
      "Heat distribution was remarkably even across the entire cooking surface. We measured temperature variations of only 15-20°F between different zones when all burners were set to the same level. The grill reached 500°F in under 10 minutes and maintained steady temperatures throughout long cooking sessions. Low-and-slow cooking was also impressive, with the ability to hold 225°F consistently for hours.",
  },
  {
    id: "napoleon-prestige-500",
    name: "Napoleon Prestige 500",
    category: "Premium Pick",
    rating: 4.7,
    image: "/napoleon-gas-grill.jpg",
    description: "Premium gas grill with infrared technology and exceptional performance.",
    features: [
      "Four main burners plus infrared rear and side burners",
      "500 sq. in. main cooking area",
      "Stainless steel wave cooking grids",
      "Infrared SIZZLE ZONE side burner",
      "LED control knobs",
      "Dual-level stainless steel sear plates",
      "Integrated ice bucket",
    ],
    pros: [
      "Infrared technology for perfect searing",
      "High-quality stainless steel construction",
      "Even heat distribution",
      "Stylish design with LED lights",
      "Excellent temperature range",
    ],
    cons: ["Heavy and difficult to move", "Complex assembly process"],
    author: "Mike Rodriguez",
    testingNote: "Tested for 4 months with various cooking techniques",
    detailedReview:
      "The Napoleon Prestige 500 is a premium grill that justifies its position with exceptional performance and innovative features. The infrared SIZZLE ZONE side burner is a game-changer for searing steaks, reaching temperatures over 900°F and creating restaurant-quality crusts. The wave cooking grids are uniquely designed to vaporize drippings, creating flavorful smoke while preventing flare-ups. LED control knobs are not just a gimmick—they're genuinely useful for evening grilling sessions. The build quality is exceptional, with heavy-gauge stainless steel throughout. We were impressed by the attention to detail, from the integrated ice bucket to the soft-close lid. The dual-level sear plates provide excellent heat distribution and make cleanup easier.",
    performanceNotes:
      "This grill excels at high-heat cooking. The infrared burner reached searing temperatures in under 3 minutes, and the main burners provided consistent heat across the entire cooking surface. We successfully cooked everything from delicate fish to thick ribeyes, with excellent results across the board. The rotisserie function worked flawlessly for whole chickens and roasts.",
  },
  {
    id: "char-broil-performance-475",
    name: "Char-Broil Performance 475",
    category: "Best Budget",
    rating: 4.3,
    image: "/char-broil-gas-grill-four-burners.jpg",
    description: "Affordable four-burner gas grill that doesn't compromise on essential features.",
    features: [
      "Four stainless steel burners with 36,000 BTU",
      "475 sq. in. primary cooking space",
      "Porcelain-coated cast iron grates",
      "Electronic ignition system",
      "Side shelves for prep space",
      "Lidded side burner",
      "Stainless steel control panel",
    ],
    pros: [
      "Excellent value for money",
      "Good heat output",
      "Easy assembly",
      "Reliable ignition",
      "Spacious cooking area",
    ],
    cons: ["Less durable than premium models", "Temperature fluctuations in windy conditions"],
    author: "David Thompson",
    testingNote: "Tested for 3 months with regular use",
    detailedReview:
      "The Char-Broil Performance 475 delivers impressive performance for its price point. While it doesn't have the premium features or build quality of more expensive models, it handles everyday grilling tasks admirably. The four-burner system provides good heat control, and the 475 square inches of cooking space is sufficient for most families. The electronic ignition worked reliably throughout our testing period. The porcelain-coated grates performed well, though they don't retain heat quite as well as cast iron. Assembly was straightforward and took about 90 minutes. The side burner is a nice addition at this price point, perfect for heating sauces or side dishes.",
    performanceNotes:
      "Heat distribution was generally good, though we noticed some hot spots near the burners. The grill reached cooking temperature in about 12-15 minutes. It performed best in calm weather conditions—wind did affect temperature stability more than premium models. For typical burgers, hot dogs, and chicken, it delivered consistent results. More demanding tasks like low-and-slow cooking or high-heat searing were possible but required more attention.",
  },
  {
    id: "broil-king-regal-s590-pro",
    name: "Broil King Regal S590 Pro",
    category: "Best for Large Groups",
    rating: 4.6,
    image: "/broil-king-large-gas-grill-five-burners.jpg",
    description: "Spacious five-burner grill perfect for entertaining and large family gatherings.",
    features: [
      "Five stainless steel Dual-Tube burners with 50,000 BTU",
      "625 sq. in. primary cooking surface",
      "Cast iron cooking grids",
      "Rotisserie kit included",
      "Illuminated control knobs",
      "Stainless steel Flav-R-Wave cooking system",
      "Professional-grade side burner",
    ],
    pros: [
      "Massive cooking space",
      "Powerful heat output",
      "Includes rotisserie",
      "Excellent build quality",
      "Even heat distribution",
    ],
    cons: ["Requires significant space", "Higher propane consumption", "Heavy unit"],
    author: "Jennifer Park",
    testingNote: "Tested with groups of 10+ people over 5 months",
    detailedReview:
      "The Broil King Regal S590 Pro is purpose-built for entertaining large groups, and it excels in this role. The 625 square inches of primary cooking space easily accommodates food for 12-15 people. The five Dual-Tube burners provide exceptional heat control and power, with a total output of 50,000 BTU. The included rotisserie kit is professional-grade and produced perfectly cooked whole chickens and roasts. The Flav-R-Wave cooking system is innovative—it vaporizes drippings to create smoke while protecting burners and distributing heat evenly. Cast iron cooking grids are heavy-duty and create excellent sear marks. The illuminated control knobs are practical for evening entertaining. Build quality is outstanding, with commercial-grade stainless steel throughout.",
    performanceNotes:
      "This grill's power is impressive. It reached 500°F in under 8 minutes and maintained consistent temperatures even when fully loaded with food. We successfully grilled for groups of 15+ people, cooking multiple courses simultaneously. The rotisserie function was particularly impressive, producing evenly cooked, juicy results. Heat distribution across the large cooking surface was remarkably even. The side burner is powerful enough for serious cooking tasks, not just keeping sauces warm.",
  },
]

export default function GasGrillsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="border-b">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                GAS GRILLS
              </Badge>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                The Best Gas Grills
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                After testing dozens of gas grills, we've identified the top performers that deliver consistent heat,
                durability, and exceptional cooking results.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {gasGrills.map((grill, index) => (
              <Card key={grill.id} className="overflow-hidden">
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image src={grill.image || "/placeholder.svg"} alt={grill.name} fill className="object-cover" />
                    <Badge className="absolute left-4 top-4 bg-primary">{grill.category}</Badge>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-6 lg:p-8">
                    <div>
                      <div className="mb-4">
                        <h2 className="font-serif text-3xl font-bold text-foreground">{grill.name}</h2>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 fill-primary text-primary" />
                            <span className="font-semibold">{grill.rating}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg leading-relaxed text-muted-foreground">{grill.description}</p>

                      {/* Features */}
                      <div className="mt-6">
                        <h3 className="mb-3 font-semibold text-foreground">Key Features:</h3>
                        <ul className="space-y-2">
                          {grill.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pros and Cons */}
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <h3 className="mb-2 font-semibold text-green-600">Pros:</h3>
                          <ul className="space-y-1">
                            {grill.pros.map((pro, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                + {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold text-red-600">Cons:</h3>
                          <ul className="space-y-1">
                            {grill.cons.map((con, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                - {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Detailed Review */}
                      {grill.detailedReview && (
                        <div className="mt-6 border-t pt-4">
                          <h3 className="mb-2 font-semibold text-foreground">Our Review:</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{grill.detailedReview}</p>
                        </div>
                      )}

                      {/* Performance Notes */}
                      {grill.performanceNotes && (
                        <div className="mt-4">
                          <h3 className="mb-2 font-semibold text-foreground">Performance Notes:</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{grill.performanceNotes}</p>
                        </div>
                      )}
                    </div>

                    {/* Author and Testing Note */}
                    <div className="mt-6 border-t pt-4">
                      <p className="text-sm text-muted-foreground">
                        Reviewed by <span className="font-medium">{grill.author}</span>
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{grill.testingNote}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Buying Guide */}
          <div className="mt-16 border-t pt-16">
            <h2 className="font-serif text-3xl font-bold text-foreground">Gas Grill Buying Guide</h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">What to Consider When Buying a Gas Grill</h3>
                <p className="leading-relaxed">
                  When shopping for a gas grill, consider the cooking area size, BTU output, build quality, and
                  warranty. A good gas grill should provide even heat distribution, easy temperature control, and
                  durable construction that will last for years.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">BTU vs. Cooking Performance</h3>
                <p className="leading-relaxed">
                  While BTU (British Thermal Units) indicates heat output, it's not the only factor in cooking
                  performance. Heat distribution, grate quality, and lid design are equally important for achieving
                  consistent results.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Maintenance and Care</h3>
                <p className="leading-relaxed">
                  Regular cleaning and maintenance will extend your gas grill's lifespan. Clean grates after each use,
                  check burners and gas connections regularly, and cover your grill when not in use to protect it from
                  the elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
