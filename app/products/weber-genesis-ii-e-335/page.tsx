import { Star, Check, X } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WeberGenesisPage() {
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
              <Link href="/gas-grills" className="hover:text-foreground">
                Gas Grills
              </Link>
              <span>/</span>
              <span className="text-foreground">Weber Genesis II E-335</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Gas Grills</div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Weber Genesis II E-335</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-foreground text-foreground" />
                    <span className="text-lg font-semibold">4.8</span>
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-sm text-muted-foreground">Tested by Alice Thompson</span>
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Our favorite gas grill delivers consistent heat and exceptional build quality. After months of
                  testing, the Weber Genesis II E-335 stands out as the best overall gas grill for most people.
                </p>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/weber-gas-grill-stainless-steel-three-burners.jpg"
                  alt="Weber Genesis II E-335"
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
                    The Weber Genesis II E-335 represents the pinnacle of gas grilling technology. With three powerful
                    burners delivering 39,000 BTUs of heat, this grill provides exceptional temperature control and even
                    heat distribution across its 669 square inches of cooking space.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    During our extensive testing period, we cooked everything from delicate fish to thick steaks, and
                    the Genesis II E-335 handled it all with ease. The GS4 grilling system, featuring improved infinity
                    ignition, burners, and grease management, makes this grill incredibly reliable and easy to use.
                  </p>
                </div>
              </section>

              {/* Image Gallery */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">Product Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/weber-genesis-grill-open-lid-cooking.jpg"
                      alt="Weber Genesis with open lid"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/weber-genesis-side-burner-detail.jpg"
                      alt="Weber Genesis side burner"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/weber-genesis-cooking-steaks.jpg"
                      alt="Cooking steaks on Weber Genesis"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/weber-genesis-storage-cabinet.jpg"
                      alt="Weber Genesis storage cabinet"
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
                    <h3 className="mb-3 text-xl font-semibold">Heat Performance</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The three stainless steel burners provide excellent heat distribution. We measured consistent
                      temperatures across the entire cooking surface, with minimal hot or cold spots. The grill reaches
                      500°F in about 10 minutes with the lid closed, perfect for searing steaks. Low-temperature cooking
                      is equally impressive, maintaining steady 225°F for smoking.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Build Quality</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      Weber's legendary build quality shines through. The porcelain-enameled cast iron cooking grates
                      retain heat exceptionally well and create beautiful sear marks. The stainless steel construction
                      feels solid and premium. After six months of outdoor exposure, we noticed no rust or
                      deterioration.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Ease of Use</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The infinity ignition system started reliably every single time during our testing. The
                      side-mounted control knobs are easy to adjust, even while wearing grill gloves. The built-in
                      thermometer is accurate and easy to read. The grease management system works flawlessly,
                      channeling drippings away from the burners into a removable drip tray.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Cooking Capacity</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      With 669 square inches of total cooking space (513 square inches on the main grates plus 156 on
                      the warming rack), this grill easily handles meals for 6-8 people. We comfortably fit 20 burgers,
                      12 chicken pieces, or 8 large steaks at once. The side burner is perfect for sauces or side
                      dishes.
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
                        <span>Exceptional heat distribution and temperature control</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Premium build quality with durable materials</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Large cooking surface for entertaining</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Reliable ignition system</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Easy to clean and maintain</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>10-year warranty on major components</span>
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
                        <span>Premium pricing compared to competitors</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Assembly required (1-2 hours)</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Heavy and difficult to move once assembled</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>No built-in smart features or WiFi</span>
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
                    <dd className="font-medium">Liquid Propane / Natural Gas</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Burners</dt>
                    <dd className="font-medium">3 Stainless Steel</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">BTU Output</dt>
                    <dd className="font-medium">39,000 BTU</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Cooking Area</dt>
                    <dd className="font-medium">669 sq. in.</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Primary Grates</dt>
                    <dd className="font-medium">513 sq. in.</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Warming Rack</dt>
                    <dd className="font-medium">156 sq. in.</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Side Burner</dt>
                    <dd className="font-medium">12,000 BTU</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Dimensions</dt>
                    <dd className="font-medium">62" W × 29" D × 47" H</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="font-medium">155 lbs</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Warranty</dt>
                    <dd className="font-medium">10 years</dd>
                  </div>
                </dl>
              </div>

              {/* Related Products */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold">Also Consider</h3>
                <div className="space-y-4">
                  <Link href="/products/weber-spirit-ii-e-310" className="group block">
                    <div className="mb-2 aspect-video overflow-hidden rounded bg-muted">
                      <img
                        src="/weber-spirit-gas-grill-compact.jpg"
                        alt="Weber Spirit II E-310"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-semibold group-hover:underline">Weber Spirit II E-310</h4>
                    <p className="text-sm text-muted-foreground">Budget-friendly option</p>
                  </Link>

                  <Link href="/gas-grills" className="group block">
                    <div className="mb-2 aspect-video overflow-hidden rounded bg-muted">
                      <img
                        src="/char-broil-gas-grill-four-burners.jpg"
                        alt="More gas grills"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-semibold group-hover:underline">View All Gas Grills</h4>
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
