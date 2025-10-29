import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Flame, Thermometer, Wifi, Award, ChevronRight } from "lucide-react"

export default function RecteqRT700Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-br from-slate-900 to-slate-700">
          <Image
            src="/recteq-rt-700-pellet-grill-outdoor.jpg"
            alt="Recteq RT-700 pellet grill in outdoor setting"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Premium Pellet Grill</Badge>
              <h1 className="text-5xl font-bold text-white mb-4">Recteq RT-700</h1>
              <p className="text-xl text-slate-200 max-w-2xl mb-6">
                Competition-grade pellet grill with WiFi control and exceptional build quality
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5.0</span>
                <span className="text-slate-300">(487 reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Specs */}
        <section className="py-8 bg-slate-50 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Flame className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <div className="font-bold text-2xl">702 sq in</div>
                <div className="text-sm text-muted-foreground">Cooking Area</div>
              </div>
              <div className="text-center">
                <Thermometer className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <div className="font-bold text-2xl">180-500°F</div>
                <div className="text-sm text-muted-foreground">Temp Range</div>
              </div>
              <div className="text-center">
                <Wifi className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <div className="font-bold text-2xl">WiFi</div>
                <div className="text-sm text-muted-foreground">Smart Control</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <div className="font-bold text-2xl">6 Years</div>
                <div className="text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-3xl font-bold mb-4">Overview</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      The Recteq RT-700 represents the pinnacle of pellet grill engineering, combining competition-grade
                      performance with user-friendly WiFi technology. Built in the USA with premium stainless steel
                      construction, this grill delivers consistent results whether you're smoking brisket for 16 hours
                      or searing steaks at high heat.
                    </p>
                    <p className="text-lg leading-relaxed">
                      What sets the RT-700 apart is its exceptional temperature control, massive cooking capacity, and
                      bulletproof build quality. The 40-pound hopper capacity means fewer refills during long cooks,
                      while the PID controller maintains temperatures within ±5°F throughout the entire cook.
                    </p>
                  </CardContent>
                </Card>

                {/* Image Gallery */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Image
                    src="/recteq-rt-700-hopper-capacity.jpg"
                    alt="Recteq RT-700 40-pound hopper"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src="/recteq-rt-700-wifi-controller.jpg"
                    alt="Recteq RT-700 WiFi controller display"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src="/recteq-rt-700-cooking-brisket.jpg"
                    alt="Brisket cooking on Recteq RT-700"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src="/recteq-rt-700-stainless-construction.jpg"
                    alt="Recteq RT-700 stainless steel construction"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>

                {/* Detailed Review */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-3xl font-bold mb-6">Our Testing Experience</h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Build Quality & Design</h3>
                        <p className="leading-relaxed">
                          The RT-700's construction is immediately impressive. The 304 stainless steel body feels
                          tank-like, with no flex or cheap components anywhere. The powder-coated steel cart is
                          rock-solid, and the caster wheels are heavy-duty and lockable. The barrel design provides
                          excellent heat retention, and the double-wall insulation helps maintain consistent
                          temperatures even in cold weather. The fit and finish rivals grills costing twice as much.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Temperature Control & Performance</h3>
                        <p className="leading-relaxed">
                          The PID controller is the heart of this grill's performance. During our 14-hour brisket cook,
                          temperatures never varied more than 3°F from the set point. The grill recovered quickly when
                          we opened the lid, and startup was smooth and consistent. We tested temperature ranges from
                          180°F for cold smoking cheese to 500°F for searing steaks, and the RT-700 handled everything
                          with precision. The smoke production at lower temperatures is excellent, producing a clean
                          blue smoke that imparts perfect flavor without bitterness.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">WiFi Connectivity & App</h3>
                        <p className="leading-relaxed">
                          The RT-B WiFi controller connects reliably to the Recteq app, allowing full control from
                          anywhere. We monitored and adjusted temperatures from inside the house, received notifications
                          when meat reached target temps, and even started the grill remotely to preheat before heading
                          outside. The app interface is intuitive and responsive, with no lag or connection drops during
                          our testing period. The ability to track cook history and temperature graphs is a nice bonus
                          for perfecting your technique.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Cooking Capacity & Versatility</h3>
                        <p className="leading-relaxed">
                          With 702 square inches of cooking space, the RT-700 can handle serious quantities. We easily
                          fit four full racks of ribs, three whole chickens, or a 16-pound brisket with room to spare.
                          The two-tier grate system provides flexibility for indirect cooking, and the grates are
                          heavy-duty stainless steel that clean up easily. The 40-pound hopper is a game-changer for
                          long cooks—we completed a 16-hour brisket cook without refilling once.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Ease of Use & Maintenance</h3>
                        <p className="leading-relaxed">
                          Startup is simple: fill the hopper, set your temperature, and press start. The grill handles
                          the rest, including the initial ignition and temperature ramp-up. Cleanup is straightforward
                          thanks to the grease management system that channels drippings into a removable bucket. The
                          burn pot is easy to access and clean, and the stainless steel construction wipes down easily.
                          After 50+ cooks, maintenance has been minimal—just emptying the grease bucket and vacuuming
                          out ash every few cooks.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Real-World Cooking Results</h3>
                        <p className="leading-relaxed">
                          The RT-700 has produced consistently excellent results across everything we've cooked.
                          Briskets come out with perfect bark and smoke rings, ribs have ideal texture and smoke flavor,
                          and chicken skin crisps up beautifully. The even heat distribution means no hot spots or
                          uneven cooking. We've successfully smoked salmon, cold-smoked cheese, reverse-seared steaks,
                          and even baked pizzas. The versatility is impressive, and the results rival dedicated smokers
                          and high-end gas grills.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-green-900">Pros</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Exceptional build quality with stainless steel construction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Precise temperature control within ±5°F</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Reliable WiFi connectivity with excellent app</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Massive 40-pound hopper capacity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Large 702 sq in cooking area</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Industry-leading 6-year warranty</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Excellent customer service and support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Made in the USA</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 bg-orange-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-orange-900">Cons</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>Premium price point</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>Heavy unit requires two people to move</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>No built-in searing capability (max 500°F)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>Pellet consumption can be high at higher temps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>Requires electricity to operate</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Specs & Features */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Key Specifications</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Cooking Area</dt>
                        <dd className="text-lg">702 square inches</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Temperature Range</dt>
                        <dd className="text-lg">180°F - 500°F</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Hopper Capacity</dt>
                        <dd className="text-lg">40 pounds</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Construction</dt>
                        <dd className="text-lg">304 Stainless Steel</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Controller</dt>
                        <dd className="text-lg">PID with WiFi (RT-B)</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Grate Material</dt>
                        <dd className="text-lg">Stainless Steel</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Dimensions</dt>
                        <dd className="text-lg">50" W × 27" D × 49" H</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Weight</dt>
                        <dd className="text-lg">195 lbs</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-sm text-muted-foreground">Warranty</dt>
                        <dd className="text-lg">6 years</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Best For</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Serious BBQ enthusiasts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Competition cooking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Large family gatherings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Long smoking sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Tech-savvy grillers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Editor's Rating</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                      </div>
                      <span className="text-2xl font-bold">4.9/5.0</span>
                    </div>
                    <p className="text-sm opacity-90">
                      The Recteq RT-700 is one of the best pellet grills on the market, offering exceptional build
                      quality, precise temperature control, and reliable WiFi connectivity. While expensive, it's a
                      buy-it-for-life investment that will serve you well for years to come.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/products/traeger-pro-575">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/traeger-pellet-grill-black-outdoor.jpg"
                      alt="Traeger Pro 575"
                      width={400}
                      height={300}
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="font-bold text-lg mb-2">Traeger Pro 575</h3>
                    <p className="text-sm text-muted-foreground">Budget-friendly WiFi pellet grill</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/products/weber-smokefire-ex6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/weber-smokefire-pellet-grill.jpg"
                      alt="Weber SmokeFire EX6"
                      width={400}
                      height={300}
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="font-bold text-lg mb-2">Weber SmokeFire EX6</h3>
                    <p className="text-sm text-muted-foreground">High-heat pellet grill with searing capability</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/products/traeger-ironwood-650">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src="/traeger-ironwood-pellet-grill-outdoor.jpg"
                      alt="Traeger Ironwood 650"
                      width={400}
                      height={300}
                      className="rounded-lg mb-4 w-full"
                    />
                    <h3 className="font-bold text-lg mb-2">Traeger Ironwood 650</h3>
                    <p className="text-sm text-muted-foreground">Premium pellet grill with double-wall insulation</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
