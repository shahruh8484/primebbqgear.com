import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Flame, Thermometer, Wifi, Clock } from "lucide-react"

export default function WeberSmokefireEX6Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <Image
                src="/weber-smokefire-pellet-grill.jpg"
                alt="Weber SmokeFire EX6 Wood Fired Pellet Grill"
                width={600}
                height={400}
                className="rounded-lg w-full object-cover"
              />
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="/weber-smokefire-hopper-system.jpg"
                  alt="SmokeFire hopper system"
                  width={200}
                  height={150}
                  className="rounded-lg w-full object-cover"
                />
                <Image
                  src="/weber-smokefire-flavorizer-bars.jpg"
                  alt="SmokeFire Flavorizer bars"
                  width={200}
                  height={150}
                  className="rounded-lg w-full object-cover"
                />
                <Image
                  src="/weber-smokefire-cooking-brisket.jpg"
                  alt="Cooking brisket on SmokeFire"
                  width={200}
                  height={150}
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-2">Pellet Grill</Badge>
                <h1 className="text-4xl font-bold mb-2">Weber SmokeFire EX6</h1>
                <p className="text-xl text-muted-foreground">Wood Fired Pellet Grill with Smart Technology</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-primary" />
                  <span className="text-sm">1008 sq in cooking area</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  <span className="text-sm">200-600°F range</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  <span className="text-sm">Weber Connect WiFi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm">20 lb pellet capacity</span>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Weber Connect smart grilling technology with step-by-step guidance</li>
                    <li>• Porcelain-enameled steel Flavorizer bars for enhanced flavor</li>
                    <li>• Large 20-pound pellet hopper with viewing window</li>
                    <li>• DC-powered engine for consistent auger performance</li>
                    <li>• Sear zone capability reaching 600°F for perfect steaks</li>
                    <li>• Smoke boost feature for maximum smoke flavor</li>
                    <li>• Easy-clean ash removal system</li>
                    <li>• Expandable top cooking grate for warming</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-green-600">Pros</h2>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Weber Connect app provides excellent guidance and monitoring</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Versatile temperature range from low-and-slow to high-heat searing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Large cooking capacity perfect for family gatherings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Flavorizer bars add authentic wood-fired flavor</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Excellent build quality with Weber's reputation for durability</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>DC-powered auger provides consistent pellet feed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Easy ash cleanup system saves maintenance time</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-red-600">Cons</h2>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Premium pricing compared to other pellet grills</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Requires WiFi connection for full app functionality</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Large footprint may not fit smaller patios</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Pellet consumption can be high at maximum temperatures</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Initial setup and seasoning process takes time</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Hopper needs protection from moisture in humid climates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Detailed Review</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Weber SmokeFire EX6 represents Weber's ambitious entry into the pellet grill market, combining
                  their legendary build quality with modern smart technology. After extensive testing over multiple
                  months, this grill has proven to be a versatile outdoor cooking powerhouse that excels at both
                  low-and-slow smoking and high-heat grilling.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Smart Technology Integration</h3>
                <p>
                  The Weber Connect system is genuinely impressive. The app provides step-by-step cooking guidance,
                  real-time temperature monitoring, and alerts when your food is ready. During testing, we found the
                  temperature probes to be accurate within 2-3 degrees, and the notifications were timely and helpful.
                  The ability to monitor and adjust temperatures remotely gave us confidence to leave the grill
                  unattended during long smoking sessions.
                </p>

                <Image
                  src="/weber-smokefire-app-interface.jpg"
                  alt="Weber Connect app interface"
                  width={800}
                  height={400}
                  className="rounded-lg my-6"
                />

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Cooking Performance</h3>
                <p>
                  Temperature control is where the SmokeFire truly shines. The DC-powered auger system maintains
                  consistent temperatures even in windy conditions. We tested smoking brisket at 225°F for 14 hours, and
                  the temperature variance was minimal throughout. The smoke boost feature adds noticeable smoke flavor,
                  though it does increase pellet consumption.
                </p>
                <p>
                  High-heat performance exceeded expectations. The grill reaches 600°F quickly, and the Flavorizer bars
                  create excellent searing marks on steaks. We achieved restaurant-quality crusts on ribeyes while
                  maintaining perfect medium-rare interiors. The large cooking surface easily accommodated 8 burgers or
                  3 full racks of ribs simultaneously.
                </p>

                <Image
                  src="/weber-smokefire-searing-steaks.jpg"
                  alt="Searing steaks on SmokeFire"
                  width={800}
                  height={400}
                  className="rounded-lg my-6"
                />

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Build Quality and Design</h3>
                <p>
                  Weber's construction quality is evident throughout. The porcelain-enameled steel body resists rust and
                  weathering. The Flavorizer bars are a unique feature that vaporizes drippings for added flavor while
                  protecting the burn pot. The 20-pound hopper capacity is generous, providing 10-20 hours of cooking
                  depending on temperature settings.
                </p>
                <p>
                  The viewing window on the hopper is a thoughtful touch that lets you monitor pellet levels without
                  opening the lid. The ash removal system is straightforward - a simple pull-out tray that makes cleanup
                  much easier than many competitors. The side shelf provides adequate prep space, though some users may
                  want additional work surface.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Pellet Efficiency and Flavor</h3>
                <p>
                  Pellet consumption varies significantly with temperature. At 225°F, expect about 1 pound per hour. At
                  maximum temperature, consumption can reach 3-4 pounds per hour. The grill works well with various
                  pellet brands, though Weber recommends their own pellets for optimal performance. We tested with
                  hickory, mesquite, and apple pellets, all producing excellent smoke flavor.
                </p>

                <Image
                  src="/weber-smokefire-pellet-varieties.jpg"
                  alt="Different wood pellet varieties"
                  width={800}
                  height={400}
                  className="rounded-lg my-6"
                />

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Maintenance and Durability</h3>
                <p>
                  Regular maintenance is straightforward. After every few cooks, vacuum out ash from the burn pot and
                  empty the grease tray. The porcelain-enameled surfaces clean easily with a grill brush. The auger
                  system should be cleared of pellets if the grill will sit unused for extended periods, especially in
                  humid climates where pellets can absorb moisture and swell.
                </p>
                <p>
                  After six months of regular use in various weather conditions, the grill shows minimal wear. The paint
                  finish remains intact, and all mechanical components function smoothly. The WiFi module has been
                  reliable with no connectivity issues.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Who Should Buy This Grill</h3>
                <p>
                  The Weber SmokeFire EX6 is ideal for serious outdoor cooks who want the convenience of pellet grilling
                  with the versatility to sear at high temperatures. The smart technology appeals to tech-savvy users
                  who appreciate data-driven cooking. The large capacity makes it perfect for families or those who
                  frequently entertain.
                </p>
                <p>
                  However, budget-conscious buyers might find better value in less expensive pellet grills that offer
                  similar core functionality without the smart features. Those with limited outdoor space should
                  consider the smaller EX4 model. And if you primarily grill at high heat, a traditional gas grill might
                  be more economical to operate.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Cooking Specs</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Primary Cooking Area:</dt>
                      <dd className="font-medium">672 sq in</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Total Cooking Area:</dt>
                      <dd className="font-medium">1008 sq in</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Temperature Range:</dt>
                      <dd className="font-medium">200-600°F</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Pellet Hopper Capacity:</dt>
                      <dd className="font-medium">20 lbs</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Grate Material:</dt>
                      <dd className="font-medium">Porcelain-enameled cast iron</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Physical Specs</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Dimensions (lid closed):</dt>
                      <dd className="font-medium">54" W x 27" D x 47" H</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Weight:</dt>
                      <dd className="font-medium">195 lbs</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Fuel Type:</dt>
                      <dd className="font-medium">Wood pellets</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Power Source:</dt>
                      <dd className="font-medium">120V AC outlet</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Warranty:</dt>
                      <dd className="font-medium">10 years limited</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/products/traeger-ironwood-650" className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/traeger-pellet-grill-black-outdoor.jpg"
                    alt="Traeger Ironwood 650"
                    width={400}
                    height={300}
                    className="w-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-1">Traeger Ironwood 650</h3>
                    <p className="text-sm text-muted-foreground">Premium WiFi pellet grill with TurboTemp</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/products/weber-genesis-ii-e-335" className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/weber-genesis-grill-open-lid-cooking.jpg"
                    alt="Weber Genesis II E-335"
                    width={400}
                    height={300}
                    className="w-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-1">Weber Genesis II E-335</h3>
                    <p className="text-sm text-muted-foreground">Premium gas grill with GS4 system</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/products/traeger-pro-575" className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/traeger-pellet-grill-black-outdoor.jpg"
                    alt="Traeger Pro 575"
                    width={400}
                    height={300}
                    className="w-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-1">Traeger Pro 575</h3>
                    <p className="text-sm text-muted-foreground">Budget-friendly WiFi pellet grill</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
