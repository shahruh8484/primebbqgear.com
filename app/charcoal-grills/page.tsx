import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

const charcoalGrills = [
  {
    id: "weber-original-kettle",
    name: 'Weber Original Kettle 22"',
    category: "Best Overall",
    rating: 4.6,
    image: "/weber-kettle-charcoal-grill-black-classic.jpg",
    description: "The classic charcoal grill that delivers authentic BBQ flavor and versatile cooking.",
    features: [
      "363 sq. in. cooking area",
      "Porcelain-enameled bowl and lid",
      "One-Touch cleaning system",
      "Built-in lid thermometer",
      "10-year warranty",
      "Rust-resistant aluminum dampers",
      "Heat-resistant handle",
    ],
    pros: [
      "Excellent heat retention",
      "Easy ash removal",
      "Durable construction",
      "Great value",
      "Versatile cooking methods",
    ],
    cons: ["Limited cooking space for large groups", "No built-in temperature control", "Learning curve for beginners"],
    author: "David Thompson",
    testingNote: "Tested for 6 months with various charcoal types and cooking methods",
    detailedReview:
      "The Weber Original Kettle is a timeless design that has remained largely unchanged for decades—and for good reason. It simply works. The 22-inch model provides enough cooking space for most families while remaining manageable in size. The porcelain-enameled bowl and lid are incredibly durable and easy to clean. The One-Touch cleaning system makes ash removal simple—just sweep the ashes into the removable catcher. Heat retention is excellent thanks to the thick porcelain enamel and tight-fitting lid. We successfully used this grill for direct grilling, indirect cooking, and even smoking with the snake method. The built-in thermometer is basic but functional. The 10-year warranty demonstrates Weber's confidence in the product's durability.",
    performanceNotes:
      "This grill excels at high-heat searing, easily reaching temperatures over 600°F for perfect steaks. The venting system provides good temperature control once you learn how to use it effectively. We maintained 250°F for 4+ hour smoking sessions with proper vent adjustment. The circular shape promotes even heat distribution. Charcoal efficiency was good—a full chimney of charcoal provided 45-60 minutes of high-heat grilling or 3-4 hours of low-and-slow cooking.",
  },
  {
    id: "weber-performer-deluxe",
    name: "Weber Performer Deluxe",
    category: "Best Premium",
    rating: 4.7,
    image: "/weber-performer-charcoal-grill.jpg",
    description: "Premium charcoal grill with gas ignition and convenient work surfaces.",
    features: [
      "363 sq. in. cooking area",
      "Touch-N-Go gas ignition system",
      "Built-in charcoal storage",
      "Large work table with tool hooks",
      "LCD timer",
      "Enclosed ash catcher",
      "Weather-resistant cart",
    ],
    pros: [
      "Quick and easy lighting",
      "Convenient storage and prep space",
      "Classic Weber quality",
      "Excellent heat control",
      "Professional-grade features",
    ],
    cons: ["Premium price for charcoal grill", "Requires propane for ignition", "Large footprint"],
    author: "Sarah Chen",
    testingNote: "Tested for 5 months focusing on convenience and performance",
    detailedReview:
      "The Weber Performer Deluxe takes the classic kettle design and adds premium convenience features that make charcoal grilling significantly easier. The Touch-N-Go gas ignition system is a game-changer—it lights charcoal in minutes without lighter fluid or chimney starters. The built-in charcoal storage bin keeps fuel dry and accessible. The large work table provides ample prep space, and the tool hooks keep everything organized. The LCD timer is surprisingly useful for tracking cooking times. The enclosed ash catcher is more refined than the standard kettle's system. Build quality matches Weber's reputation, with the same durable porcelain enamel and 10-year warranty. The weather-resistant cart adds stability and storage.",
    performanceNotes:
      "Performance matches the standard Weber Kettle—excellent heat retention, even temperature distribution, and versatile cooking capabilities. The gas ignition system had charcoal ready for cooking in 10-12 minutes, significantly faster than traditional methods. We achieved the same high temperatures (600°F+) and low-and-slow capabilities (225°F for 4+ hours) as the standard kettle. The added convenience features didn't compromise cooking performance in any way.",
  },
  {
    id: "kamado-joe-classic-iii",
    name: "Kamado Joe Classic III",
    category: "Best Ceramic",
    rating: 4.9,
    image: "/kamado-joe-ceramic-grill-red-outdoor-cooking.jpg",
    description: "Premium ceramic grill that excels at grilling, smoking, and even baking pizza.",
    features: [
      "250 sq. in. cooking surface",
      "Thick-wall ceramic construction",
      "Air Lift Hinge system",
      "Divide & Conquer cooking system",
      "SloRoller hyperbolic smoke chamber",
      "Kontrol Tower top vent",
      "3-tier cooking system",
    ],
    pros: [
      "Exceptional heat retention",
      "Versatile cooking options",
      "Fuel efficient",
      "Outstanding smoke flavor",
      "Lifetime warranty on ceramics",
    ],
    cons: ["Very expensive", "Heavy and not portable", "Ceramic can crack if mishandled"],
    author: "Jennifer Park",
    testingNote: "Tested for 7 months with smoking, grilling, and baking",
    detailedReview:
      "The Kamado Joe Classic III represents the pinnacle of ceramic grill design. The thick ceramic walls provide unmatched heat retention and fuel efficiency—we achieved 12+ hour smoking sessions on a single load of charcoal. The Air Lift Hinge is brilliantly engineered, making the heavy lid easy to open with one hand. The Divide & Conquer cooking system is revolutionary, allowing multi-level cooking with different heat zones. The SloRoller hyperbolic smoke chamber distributes smoke evenly for superior flavor. Build quality is exceptional, with premium materials throughout. The Kontrol Tower top vent provides precise airflow control. The 3-tier cooking system offers incredible versatility. This grill excels at everything—high-heat searing, low-and-slow smoking, and even pizza baking at 700°F+.",
    performanceNotes:
      "Temperature control is exceptional. The ceramic construction and precision vents allowed us to dial in exact temperatures and hold them for hours. We maintained 225°F for 16-hour brisket cooks with minimal adjustment. High-heat performance was equally impressive—we reached 750°F for pizza in 15 minutes. Fuel efficiency is outstanding—a full load of lump charcoal lasted 12-18 hours at smoking temperatures. The thick ceramics provided incredibly even heat distribution. We successfully smoked, grilled, roasted, and baked with consistently excellent results.",
  },
  {
    id: "char-griller-akorn",
    name: "Char-Griller Akorn",
    category: "Best Budget Kamado",
    rating: 4.4,
    image: "/char-griller-akorn-kamado-grill.jpg",
    description: "Affordable kamado-style grill with insulated steel construction.",
    features: [
      "314 sq. in. cooking area",
      "Triple-walled insulated steel",
      "Cast iron cooking grates",
      "Easy-dump ash pan",
      "Locking caster wheels",
      "Dual damper system",
      "Heat gauge included",
    ],
    pros: [
      "Much cheaper than ceramic kamados",
      "Good heat retention",
      "Portable with wheels",
      "Durable construction",
      "Easy to move and store",
    ],
    cons: ["Not as efficient as ceramic", "Paint can chip over time", "Doesn't hold temperature as long"],
    author: "Mike Rodriguez",
    testingNote: "Tested for 4 months comparing to ceramic kamados",
    detailedReview:
      "The Char-Griller Akorn offers kamado-style cooking at a fraction of the cost of ceramic models. The triple-walled insulated steel construction provides good heat retention, though not quite matching ceramic. The 314 square inches of cooking space is generous. Cast iron grates are heavy-duty and create excellent sear marks. The easy-dump ash pan is more convenient than many ceramic kamados. Locking caster wheels make it genuinely portable—a significant advantage over 300+ pound ceramic grills. Build quality is solid, though the powder-coat paint showed some wear after months of use. The dual damper system provides good temperature control. While it doesn't match the performance of premium ceramic kamados, it delivers impressive results for the price.",
    performanceNotes:
      "Heat retention was good, maintaining temperatures for 6-8 hour smoking sessions on a single charcoal load—not as long as ceramic but still impressive. We reached high temperatures of 650°F+ for searing. Temperature control was responsive, though it required more frequent adjustment than ceramic models. The insulated steel construction provided reasonably even heat distribution. Charcoal efficiency was decent, using about 50% more fuel than ceramic kamados for similar cooks. Cold weather performance was acceptable, though it struggled more than ceramic in freezing temperatures.",
  },
  {
    id: "pk-grills-original",
    name: "PK Grills Original",
    category: "Best Portable",
    rating: 4.5,
    image: "/pk-grills-aluminum-charcoal-grill.jpg",
    description: "Cast aluminum charcoal grill that's built to last and easy to transport.",
    features: [
      "310 sq. in. cooking area",
      "Cast aluminum construction",
      "Four-point venting system",
      "Capsule shape for even heat",
      "Lifetime warranty",
      "Rust-proof design",
      "Dual cooking zones",
    ],
    pros: [
      "Rust-proof aluminum",
      "Excellent heat distribution",
      "Portable and durable",
      "Lifetime warranty",
      "Unique capsule design",
    ],
    cons: [
      "Unique design takes getting used to",
      "Limited accessories available",
      "Smaller cooking area than some competitors",
    ],
    author: "David Thompson",
    testingNote: "Tested for 5 months including camping trips",
    detailedReview:
      "The PK Grills Original is a unique charcoal grill with a fascinating history—the design dates back to the 1950s and has proven its durability. The cast aluminum construction is completely rust-proof, making it ideal for coastal areas or humid climates. The capsule shape is distinctive and provides excellent heat distribution. The four-point venting system offers precise temperature control. At 60 pounds, it's portable enough for camping or tailgating while feeling substantial and stable. The lifetime warranty is remarkable and backed by decades of proven durability. Build quality is exceptional—the thick cast aluminum feels indestructible. The dual cooking zones allow simultaneous direct and indirect cooking.",
    performanceNotes:
      "The capsule shape provided remarkably even heat distribution—we measured less than 20°F variation across the entire cooking surface. Temperature control was excellent, with the four-point venting system allowing precise adjustments. We maintained 250°F for 5+ hour smoking sessions and reached 600°F+ for searing. The aluminum construction heated quickly and retained heat well. Charcoal efficiency was good, with a full load providing 4-6 hours of cooking. The unique shape took some getting used to, but we quickly appreciated its advantages for two-zone cooking.",
  },
]

export default function CharcoalGrillsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="border-b">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                CHARCOAL GRILLS
              </Badge>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                The Best Charcoal Grills
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                For authentic smoky flavor and traditional grilling, these are the best charcoal grills we've tested,
                from classic kettles to premium kamados.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {charcoalGrills.map((grill) => (
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

                      {/* Detailed Review */}
                      {grill.detailedReview && (
                        <div className="mt-6">
                          <h3 className="mb-2 font-semibold text-foreground">Detailed Review:</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{grill.detailedReview}</p>
                        </div>
                      )}

                      {/* Performance Notes */}
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
            <h2 className="font-serif text-3xl font-bold text-foreground">Charcoal Grill Buying Guide</h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Why Choose Charcoal?</h3>
                <p className="leading-relaxed">
                  Charcoal grills provide authentic smoky flavor that gas grills can't match. They reach higher
                  temperatures for perfect searing and offer the traditional grilling experience many BBQ enthusiasts
                  prefer.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Charcoal vs. Briquettes</h3>
                <p className="leading-relaxed">
                  Lump charcoal burns hotter and cleaner but costs more and burns faster. Briquettes provide consistent,
                  longer-lasting heat and are more economical. Many grillers use both depending on what they're cooking.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Temperature Control</h3>
                <p className="leading-relaxed">
                  Master temperature control by adjusting air vents. More air means higher heat, less air means lower
                  temperatures. Quality charcoal grills have responsive venting systems for precise control.
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
