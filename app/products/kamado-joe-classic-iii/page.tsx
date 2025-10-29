import { Star, Check, X } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function KamadoJoePage() {
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
              <span className="text-foreground">Kamado Joe Classic III</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Ceramic Grills</div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Kamado Joe Classic III</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-foreground text-foreground" />
                    <span className="text-lg font-semibold">4.9</span>
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-sm text-muted-foreground">Tested by Casey Woo</span>
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Premium ceramic grill that excels at grilling, smoking, and even baking pizza. The Kamado Joe Classic
                  III is the ultimate versatile outdoor cooker.
                </p>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/kamado-joe-ceramic-grill-red-outdoor-cooking.jpg"
                  alt="Kamado Joe Classic III"
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
                    The Kamado Joe Classic III is a masterpiece of ceramic grill engineering. Its thick-walled ceramic
                    construction provides unmatched heat retention and fuel efficiency, while the innovative features
                    like the SlōRoller hyperbolic smoke chamber and Kontrol Tower top vent make it incredibly versatile.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    During our extensive testing, we grilled steaks at 700°F, smoked brisket at 225°F for 14 hours, and
                    baked pizzas at 600°F. The Kamado Joe handled every task flawlessly. The ceramic construction holds
                    temperature rock-solid, and a single load of lump charcoal can last for multiple cooks.
                  </p>
                </div>
              </section>

              {/* Image Gallery */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">Product Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/kamado-joe-pizza-stone-cooking.jpg"
                      alt="Pizza on Kamado Joe"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/kamado-joe-sloroller-insert.jpg"
                      alt="Kamado Joe SlōRoller"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/kamado-joe-smoking-brisket.jpg"
                      alt="Smoking on Kamado Joe"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/kamado-joe-divide-and-conquer-system.jpg"
                      alt="Kamado Joe cooking system"
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
                    <h3 className="mb-3 text-xl font-semibold">Heat Retention & Efficiency</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The ceramic walls are incredibly thick and provide exceptional insulation. Once the Kamado Joe
                      reaches temperature, it holds steady with minimal fuel consumption. We conducted a 14-hour brisket
                      smoke using only one basket of lump charcoal. The temperature varied by less than 10°F throughout
                      the entire cook. Even in cold weather, the grill maintains temperature effortlessly.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Versatility</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      This is where the Kamado Joe truly shines. The Divide & Conquer flexible cooking system allows you
                      to set up multiple cooking zones at different heights. We've grilled steaks directly over coals,
                      smoked ribs low and slow, baked pizzas on a stone, and even roasted whole chickens. The SlōRoller
                      hyperbolic smoke chamber creates perfect smoke circulation for competition-quality results.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Build Quality</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The construction quality is outstanding. The ceramic body is thick and durable, the stainless
                      steel hardware is premium grade, and the gasket seals perfectly. The Air Lift Hinge makes opening
                      the heavy lid effortless. After months of testing in various weather conditions, we see no
                      deterioration. The powder-coated steel cart is sturdy and includes convenient side shelves.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Temperature Control</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      The Kontrol Tower top vent provides precise airflow control. Small adjustments make significant
                      temperature changes, and once dialed in, the temperature stays locked. The bottom vent is equally
                      precise. We achieved temperatures from 225°F for smoking to over 700°F for searing steaks. The
                      learning curve is minimal, and after a few cooks, temperature control becomes second nature.
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
                        <span>Exceptional heat retention and fuel efficiency</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Incredibly versatile cooking capabilities</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Premium build quality and materials</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Precise temperature control</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>SlōRoller and Divide & Conquer systems</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Lifetime warranty on ceramic components</span>
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
                        <span>Premium pricing</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Heavy and not portable (250+ lbs)</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Longer startup time than gas grills</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Requires lump charcoal (more expensive)</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Ceramic can crack if dropped or thermal shocked</span>
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
                    <dd className="font-medium">Lump Charcoal</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Cooking Area</dt>
                    <dd className="font-medium">250 sq. in.</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Grill Diameter</dt>
                    <dd className="font-medium">18 inches</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Temperature Range</dt>
                    <dd className="font-medium">225°F - 750°F</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Material</dt>
                    <dd className="font-medium">Ceramic</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Dimensions</dt>
                    <dd className="font-medium">48" W × 29" D × 48" H</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="font-medium">250 lbs</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Warranty</dt>
                    <dd className="font-medium">Lifetime (ceramic)</dd>
                  </div>
                </dl>
              </div>

              {/* Related Products */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold">Also Consider</h3>
                <div className="space-y-4">
                  <Link href="/charcoal-grills" className="group block">
                    <div className="mb-2 aspect-video overflow-hidden rounded bg-muted">
                      <img
                        src="/weber-kettle-charcoal-grill-black-classic.jpg"
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
