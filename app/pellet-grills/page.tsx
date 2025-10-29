import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

const pelletGrills = [
  {
    id: "traeger-pro-575",
    name: "Traeger Pro 575",
    category: "Best Overall",
    rating: 4.7,
    image: "/traeger-pellet-grill-smoker-black-outdoor.jpg",
    description: "WiFi-enabled pellet grill perfect for low and slow cooking with consistent results.",
    features: [
      "575 sq. in. cooking capacity",
      "WiFIRE technology for app control",
      "Temperature range: 165°F to 500°F",
      "20-pound hopper capacity",
      "Digital Pro Controller",
      "Porcelain-coated grill grates",
      "All-terrain wheels",
    ],
    pros: [
      "Excellent smoke flavor",
      "WiFi connectivity for remote monitoring",
      "Consistent temperature control",
      "Versatile cooking options",
      "User-friendly app interface",
    ],
    cons: ["Requires electricity", "Pellet costs add up over time", "Hopper can run out during long cooks"],
    author: "Mike Rodriguez",
    testingNote: "Tested for 5 months with various meats and smoking sessions",
    detailedReview:
      "The Traeger Pro 575 represents the sweet spot in pellet grilling—offering premium features without the premium price tag. The WiFIRE technology is genuinely useful, allowing us to monitor and adjust temperatures from anywhere via smartphone. The Digital Pro Controller maintained remarkably consistent temperatures, rarely varying more than 10°F from the set point. Smoke flavor was excellent across all our tests, from brisket to salmon. The 575 square inches of cooking space is sufficient for most families, easily accommodating two full racks of ribs or a large brisket. Build quality is solid, with heavy-gauge steel construction and a durable powder-coat finish. The all-terrain wheels make moving the grill easy, even on grass or gravel.",
    performanceNotes:
      "Temperature consistency was impressive throughout our testing. The grill held 225°F for 12+ hour brisket cooks without intervention. Heat-up time was reasonable—reaching 350°F in about 15 minutes. The pellet consumption was efficient, using approximately 1-2 pounds per hour depending on temperature. We successfully smoked brisket, pork shoulder, ribs, chicken, and fish, all with excellent results. The grill also performed well at higher temperatures for grilling burgers and steaks, though it doesn't match the searing capability of gas or charcoal.",
  },
  {
    id: "camp-chef-woodwind-24",
    name: "Camp Chef Woodwind WiFi 24",
    category: "Best Features",
    rating: 4.6,
    image: "/camp-chef-pellet-grill.jpg",
    description: "Feature-packed pellet grill with sear box and ash cleanout system.",
    features: [
      "811 sq. in. total cooking space",
      "WiFi and Bluetooth connectivity",
      "Slide and Grill technology for direct flame",
      "Ash cleanout system",
      "Optional Sidekick attachment",
      "PID controller for precise temps",
      "Stainless steel construction",
    ],
    pros: [
      "Large cooking capacity",
      "Easy ash removal",
      "Direct flame grilling option",
      "Excellent temperature stability",
      "Versatile with Sidekick options",
    ],
    cons: ["Bulky and heavy", "Takes up significant space", "Complex features may overwhelm beginners"],
    author: "David Thompson",
    testingNote: "Tested for 4 months including low-and-slow and high-heat cooking",
    detailedReview:
      "The Camp Chef Woodwind WiFi 24 is a feature-rich pellet grill that stands out for its innovative Slide and Grill technology. This system allows you to expose food directly to flames for searing, combining the convenience of pellet smoking with the high-heat capabilities of traditional grilling. The 811 square inches of cooking space is genuinely massive—we easily cooked for groups of 20+ people. The ash cleanout system is brilliantly simple, making maintenance much easier than competing models. WiFi connectivity worked reliably, and the PID controller maintained temperatures within 5°F of the set point. Build quality is excellent, with heavy-gauge steel and stainless steel components throughout. The optional Sidekick attachments add even more versatility, turning this into a complete outdoor cooking station.",
    performanceNotes:
      "Temperature control was exceptional. The PID controller adjusted pellet feed rates automatically to maintain precise temperatures. We held 225°F for 14-hour brisket cooks with minimal temperature swing. The Slide and Grill feature worked brilliantly for searing steaks—we achieved 700°F+ temperatures for perfect crusts. The large cooking area maintained even temperatures throughout, with no significant hot or cold spots. Pellet consumption was reasonable given the size, averaging 1.5-2 pounds per hour at smoking temperatures.",
  },
  {
    id: "pit-boss-pro-series-850",
    name: "Pit Boss Pro Series 850",
    category: "Best Budget",
    rating: 4.4,
    image: "/pit-boss-pellet-grill-black.jpg",
    description: "Affordable pellet grill with impressive cooking space and solid performance.",
    features: [
      "850 sq. in. cooking area",
      "Digital control board",
      "Flame broiler for direct grilling",
      "Porcelain-coated cooking grates",
      "Large pellet hopper",
      "Meat probe included",
      "Folding front shelf",
    ],
    pros: [
      "Great value for the size",
      "Versatile cooking methods",
      "Good temperature range",
      "Solid construction",
      "Flame broiler adds versatility",
    ],
    cons: [
      "No WiFi connectivity",
      "Temperature fluctuations in cold weather",
      "Build quality not as refined as premium models",
    ],
    author: "Jennifer Park",
    testingNote: "Tested for 3 months in various weather conditions",
    detailedReview:
      "The Pit Boss Pro Series 850 delivers impressive value, offering a massive cooking area and solid performance at an accessible price point. The 850 square inches of space is genuinely useful—we cooked multiple racks of ribs, whole chickens, and briskets simultaneously. The flame broiler feature is a standout, allowing direct flame access for searing without needing a separate grill. The digital control board is straightforward and easy to use, though it lacks the sophistication of WiFi-enabled models. Build quality is good for the price, with powder-coated steel construction that held up well during our testing. The included meat probe is a nice touch. While it doesn't have the premium feel of higher-end models, it gets the job done reliably.",
    performanceNotes:
      "Temperature control was generally good, maintaining set temperatures within 15-20°F in moderate weather. Cold weather performance was less impressive—we saw larger temperature swings below 40°F. The flame broiler worked well for searing, reaching high temperatures quickly. Smoke flavor was good across all our tests. Heat-up time was reasonable at 12-15 minutes to reach 350°F. The large cooking area had some temperature variation—the center ran slightly hotter than the edges. Pellet consumption was average, using about 2 pounds per hour at smoking temperatures.",
  },
  {
    id: "green-mountain-davy-crockett",
    name: "Green Mountain Davy Crockett",
    category: "Best Portable",
    rating: 4.5,
    image: "/green-mountain-portable-pellet-grill.jpg",
    description: "Compact and portable pellet grill perfect for tailgating and camping.",
    features: [
      "219 sq. in. cooking surface",
      "WiFi enabled with app control",
      "Runs on 12V or 120V power",
      "Foldable legs for portability",
      "Weighs only 57 pounds",
      "Sense-Mate thermal sensor",
      "Digital WiFi controller",
    ],
    pros: [
      "Highly portable",
      "WiFi connectivity",
      "Can run on car battery",
      "Great for small spaces",
      "Surprisingly capable for its size",
    ],
    cons: [
      "Limited cooking capacity",
      "Smaller hopper requires frequent refills",
      "Not ideal as primary grill for families",
    ],
    author: "Skyler Lee",
    testingNote: "Tested on camping trips and tailgating events over 3 months",
    detailedReview:
      "The Green Mountain Davy Crockett is a marvel of portable pellet grill engineering. Despite its compact size, it delivers performance that rivals full-size models. The ability to run on 12V power is genuinely useful—we powered it from our truck battery at tailgates and campsites without issue. WiFi connectivity is impressive for a portable grill, allowing remote monitoring from inside the RV or tent. The foldable legs and 57-pound weight make it genuinely portable, though it's still substantial enough to feel stable. Build quality is excellent, with heavy-gauge steel construction. The Sense-Mate thermal sensor provides accurate temperature readings. While the 219 square inches of cooking space is limited, it's sufficient for 2-4 people.",
    performanceNotes:
      "Temperature control was excellent, maintaining set temperatures within 10°F consistently. The smaller size actually helped with efficiency—it reached temperature quickly and used pellets sparingly. We successfully smoked ribs, chicken, and even a small brisket. The compact hopper holds about 9 pounds of pellets, providing 6-8 hours of smoking at 225°F. High-heat grilling worked well, reaching 450°F+ for burgers and steaks. The smaller cooking area meant more even heat distribution with no hot spots.",
  },
  {
    id: "recteq-rt-700",
    name: "RecTeq RT-700",
    category: "Premium Pick",
    rating: 4.8,
    image: "/recteq-pellet-grill-stainless-steel.jpg",
    description: "Premium pellet grill with exceptional build quality and precise temperature control.",
    features: [
      "702 sq. in. cooking area",
      "WiFi enabled with RT app",
      "Stainless steel construction",
      "40-pound hopper capacity",
      "6-year warranty",
      "PID controller",
      "Ceramic ignition system",
    ],
    pros: [
      "Exceptional build quality",
      "Precise temperature control",
      "Large pellet capacity",
      "Excellent warranty",
      "Stainless steel won't rust",
    ],
    cons: ["Premium price point", "Heavy (195 pounds)", "Overkill for casual grillers"],
    author: "Mike Rodriguez",
    testingNote: "Tested for 6 months with extensive smoking and grilling",
    detailedReview:
      "The RecTeq RT-700 is a premium pellet grill that justifies its position with exceptional build quality and performance. The all-stainless steel construction is impressive—this grill will last decades with minimal maintenance. The 40-pound hopper capacity is massive, providing 20+ hours of smoking without refills. The PID controller is the most sophisticated we've tested, maintaining temperatures within 5°F consistently. WiFi connectivity through the RT app is reliable and feature-rich. The 6-year warranty is industry-leading and demonstrates RecTeq's confidence in their product. Build quality is outstanding, with heavy-gauge stainless steel, welded construction, and premium components throughout. The ceramic ignition system is more reliable than traditional hot rods.",
    performanceNotes:
      "Temperature control was exceptional—the best we've tested in any pellet grill. The PID controller made micro-adjustments to maintain precise temperatures regardless of weather conditions. We held 225°F for 16-hour brisket cooks with less than 5°F variation. Heat distribution across the 702 square inches was remarkably even. The grill performed equally well at high temperatures, reaching 500°F+ for grilling. Pellet efficiency was excellent despite the size. The massive hopper meant we never worried about running out during long cooks. Cold weather performance was outstanding—it maintained temperatures in sub-freezing conditions.",
  },
]

export default function PelletGrillsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="border-b">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                PELLET GRILLS
              </Badge>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                The Best Pellet Grills
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Our comprehensive testing reveals the top pellet grills that combine convenience, flavor, and
                versatility for both smoking and grilling.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pelletGrills.map((grill) => (
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
                        <div className="mt-2 flex items-center gap-4">
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

                      {/* Detailed Review and Performance Notes */}
                      {grill.detailedReview && (
                        <div className="mt-6">
                          <h3 className="mb-2 font-semibold text-foreground">Detailed Review:</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{grill.detailedReview}</p>
                        </div>
                      )}
                      {grill.performanceNotes && (
                        <div className="mt-6">
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
            <h2 className="font-serif text-3xl font-bold text-foreground">Pellet Grill Buying Guide</h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">How Pellet Grills Work</h3>
                <p className="leading-relaxed">
                  Pellet grills use compressed wood pellets as fuel, feeding them automatically into a fire pot. A
                  digital controller maintains precise temperatures, making them ideal for both low-and-slow smoking and
                  high-heat grilling.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Pellet Types and Flavors</h3>
                <p className="leading-relaxed">
                  Different wood pellets impart different flavors. Hickory and mesquite provide strong smoke flavor,
                  while apple and cherry offer milder, sweeter notes. Many pitmasters blend pellets to create custom
                  flavor profiles.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Maintenance Tips</h3>
                <p className="leading-relaxed">
                  Clean the fire pot and grease tray regularly, vacuum out ash buildup, and store pellets in a dry
                  place. Most pellet grills require minimal maintenance compared to other grill types.
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
