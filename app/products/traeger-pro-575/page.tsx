import { Star, Check, X } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TraegerProPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href="/pellet-grills" className="hover:text-foreground">
                Pellet Grills
              </Link>
              <span>/</span>
              <span className="text-foreground">Traeger Pro 575</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Pellet Grills</div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Traeger Pro 575</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-foreground text-foreground" />
                    <span className="text-lg font-semibold">4.7</span>
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-sm text-muted-foreground">Tested by Jordan Martinez</span>
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  WiFi-enabled pellet grill perfect for low and slow cooking with consistent results. The Traeger Pro
                  575 combines traditional wood-fired flavor with modern technology.
                </p>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/traeger-pellet-grill-smoker-black-outdoor.jpg"
                  alt="Traeger Pro 575"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">Why We Love It</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="leading-relaxed text-muted-foreground">
                    The Traeger Pro 575 represents the perfect balance of traditional wood-fired cooking and modern
                    convenience. With WiFIRE technology, you can monitor and control your grill from anywhere using your
                    smartphone, making it incredibly easy to achieve perfect results every time.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    During our months of testing, we smoked briskets, ribs, pulled pork, and even baked pizzas. The
                    consistent temperature control and authentic wood smoke flavor impressed us repeatedly. The 575
                    square inches of cooking space is perfect for family gatherings and entertaining.
                  </p>
                </div>
              </section>

              {/* Image Gallery */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">Product Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/traeger-pellet-grill-smoking-ribs.jpg"
                      alt="Smoking ribs on Traeger"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/traeger-wifi-controller-display.jpg"
                      alt="Traeger WiFi controller"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/traeger-pellet-hopper-filled.jpg"
                      alt="Traeger pellet hopper"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/traeger-brisket-finished-cooking.jpg"
                      alt="Finished brisket on Traeger"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* Detailed Review */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">Our Testing Experience</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Temperature Control</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The D2 Direct Drive system maintains incredibly consistent temperatures. We monitored the grill
                      during a 12-hour brisket cook and saw temperature variations of only ±5°F. The WiFIRE controller
                      makes adjustments easy, and you can set it and forget it with confidence. Temperature range from
                      165°F to 500°F covers everything from smoking to searing.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Smoke Flavor</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The wood pellet system delivers authentic smoke flavor that rivals traditional offset smokers. We
                      tested with hickory, mesquite, apple, and cherry pellets, and each imparted distinct, delicious
                      flavors. The smoke ring on our briskets was impressive, and the bark development was excellent.
                      The flavor is noticeably superior to gas or charcoal grills.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">WiFi Connectivity</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The Traeger app is intuitive and reliable. We could monitor grill temperature, adjust settings,
                      and receive notifications from anywhere. The app includes hundreds of recipes with step-by-step
                      instructions. During testing, we never experienced connectivity issues. Being able to check on a
                      long smoke from inside the house is incredibly convenient.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Ease of Use</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      Pellet grills are remarkably easy to use, and the Traeger Pro 575 is no exception. Fill the hopper
                      with pellets, set your temperature, and the grill does the rest. The automatic auger feeds pellets
                      as needed, and the hot rod ignition system starts reliably every time. Cleanup is simple with the
                      grease management system channeling drippings into a bucket.
                    </p>
                  </div>
                </div>
              </section>

              {/* Pros and Cons */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">Pros and Cons</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-green-600">
                      <Check className="h-5 w-5" />
                      Pros
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Excellent temperature consistency</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Authentic wood-fired flavor</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>WiFi connectivity and app control</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Set-it-and-forget-it convenience</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Versatile cooking from smoking to grilling</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Large 18-pound pellet hopper capacity</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-red-600">
                      <X className="h-5 w-5" />
                      Cons
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Requires electricity to operate</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Ongoing cost of wood pellets</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Not ideal for high-heat searing</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Pellets must be stored in dry location</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Longer preheat time than gas grills</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Specifications */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold">Specifications</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Fuel Type</dt>
                    <dd className="font-medium">Wood Pellets</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Cooking Area</dt>
                    <dd className="font-medium">575 sq. in.</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Hopper Capacity</dt>
                    <dd className="font-medium">18 lbs</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Temperature Range</dt>
                    <dd className="font-medium">165°F - 500°F</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">WiFi</dt>
                    <dd className="font-medium">Yes (WiFIRE)</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Dimensions</dt>
                    <dd className="font-medium">41" W × 27" D × 49" H</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="font-medium">124 lbs</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Warranty</dt>
                    <dd className="font-medium">3 years</dd>
                  </div>
                </dl>
              </div>

              {/* Related Products */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold">Also Consider</h3>
                <div className="space-y-4">
                  <Link href="/pellet-grills" className="group block">
                    <div className="mb-2 aspect-video overflow-hidden rounded bg-muted">
                      <img
                        src="/pit-boss-pellet-grill-black.jpg"
                        alt="More pellet grills"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-semibold group-hover:underline">View All Pellet Grills</h4>
                    <p className="text-sm text-muted-foreground">Compare more options</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
