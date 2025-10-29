import { Star, Check, X } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WeberKettlePage() {
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
              <Link href="/charcoal-grills" className="hover:text-foreground">
                Charcoal Grills
              </Link>
              <span>/</span>
              <span className="text-foreground">Weber Original Kettle</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Charcoal Grills</div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Weber Original Kettle</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-foreground text-foreground" />
                    <span className="text-lg font-semibold">4.6</span>
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-sm text-muted-foreground">Tested by Melanie Chow</span>
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  The classic charcoal grill that delivers authentic BBQ flavor. Simple, reliable, and time-tested for
                  over 70 years.
                </p>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/weber-kettle-charcoal-grill-black-classic.jpg"
                  alt="Weber Original Kettle"
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
                    The Weber Original Kettle is an American icon for good reason. Its simple yet brilliant design has
                    remained largely unchanged since 1952 because it simply works. The kettle shape creates perfect
                    airflow for even heat distribution, while the porcelain-enameled bowl and lid are built to last
                    decades.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    During our testing, we appreciated the straightforward approach to charcoal grilling. There are no
                    complicated features or electronics—just pure, simple grilling that delivers authentic charcoal
                    flavor. The 22-inch model provides ample cooking space for family meals while remaining affordable
                    and easy to use.
                  </p>
                </div>
              </section>

              {/* Image Gallery */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">Product Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/weber-kettle-grilling-burgers.jpg"
                      alt="Grilling burgers on Weber Kettle"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/weber-kettle-charcoal-arrangement.jpg"
                      alt="Charcoal setup in Weber Kettle"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/weber-kettle-ash-catcher-system.jpg"
                      alt="Weber Kettle ash catcher"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/weber-kettle-indirect-cooking-setup.jpg"
                      alt="Indirect cooking on Weber Kettle"
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
                    <h3 className="mb-3 text-xl font-semibold">Cooking Performance</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The kettle design creates excellent airflow and heat circulation. We achieved consistent
                      temperatures across the cooking grate with proper charcoal arrangement. Direct grilling produces
                      beautiful sear marks and authentic charcoal flavor. For indirect cooking, we set up a two-zone
                      fire and successfully roasted whole chickens and pork shoulders. The damper system provides good
                      temperature control once you learn how to use it.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Build Quality & Durability</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The porcelain-enameled steel construction is incredibly durable. The coating resists rust and
                      weathering, and the bowl retains its appearance even after months of use. The one-touch cleaning
                      system is simple but effective. The lid-mounted thermometer provides a general temperature
                      reading. The legs are sturdy, and the wheels make it easy to move around the patio.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Ease of Use</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      Charcoal grilling requires more hands-on involvement than gas, but the Weber Kettle makes it as
                      easy as possible. Lighting charcoal with a chimney starter takes about 15 minutes. The hinged
                      cooking grate allows you to add charcoal during long cooks without removing food. The one-touch
                      cleaning system sweeps ash into the removable catcher for easy disposal. Cleanup is
                      straightforward.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Value</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The Weber Original Kettle offers exceptional value. It's affordable, durable, and delivers
                      authentic charcoal flavor that gas grills can't match. The simple design means fewer parts to
                      break or replace. With proper care, this grill will last for decades. It's the perfect choice for
                      anyone who wants traditional charcoal grilling without breaking the bank.
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
                        <span>Affordable and excellent value</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Authentic charcoal flavor</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Durable porcelain-enameled construction</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Simple and reliable design</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Easy to clean with one-touch system</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>10-year warranty</span>
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
                        <span>Requires charcoal lighting and management</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Longer startup time than gas grills</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Temperature control requires practice</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Ash disposal needed after each use</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>No side tables or storage</span>
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
                    <dd className="font-medium">Charcoal</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Cooking Area</dt>
                    <dd className="font-medium">363 sq. in.</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Grill Diameter</dt>
                    <dd className="font-medium">22 inches</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Material</dt>
                    <dd className="font-medium">Porcelain-Enameled Steel</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Grate Material</dt>
                    <dd className="font-medium">Plated Steel</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Dimensions</dt>
                    <dd className="font-medium">39" W × 27" D × 41" H</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="font-medium">32 lbs</dd>
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
                  <Link href="/products/kamado-joe-classic-iii" className="group block">
                    <div className="mb-2 aspect-video overflow-hidden rounded bg-muted">
                      <img
                        src="/kamado-joe-ceramic-grill-red-outdoor-cooking.jpg"
                        alt="Kamado Joe Classic III"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-semibold group-hover:underline">Kamado Joe Classic III</h4>
                    <p className="text-sm text-muted-foreground">Premium ceramic option</p>
                  </Link>

                  <Link href="/charcoal-grills" className="group block">
                    <div className="mb-2 aspect-video overflow-hidden rounded bg-muted">
                      <img
                        src="/char-griller-akorn-kamado-grill.jpg"
                        alt="More charcoal grills"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-semibold group-hover:underline">View All Charcoal Grills</h4>
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
