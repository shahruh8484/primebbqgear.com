import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CharcoalFuelPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/charcoal-briquettes-burning-with-red-hot-coals.jpg"
            alt="Charcoal grilling"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">Charcoal Grilling</h1>
              <p className="mt-4 text-xl text-white/90">Traditional flavor and high-heat performance</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Charcoal grilling is the traditional method that delivers authentic smoky flavor and exceptional searing
              capabilities. Whether you're using briquettes or lump charcoal, this fuel type offers unmatched flavor and
              the ability to reach extremely high temperatures perfect for steaks and burgers.
            </p>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">Pros and Cons</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Pros */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="mb-6 text-2xl font-semibold text-foreground">Advantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Superior Flavor</h4>
                      <p className="text-sm text-muted-foreground">
                        Imparts authentic smoky taste that gas and electric grills cannot replicate
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">High Heat Capability</h4>
                      <p className="text-sm text-muted-foreground">
                        Reaches temperatures of 700°F+ for perfect searing and crust formation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Lower Initial Cost</h4>
                      <p className="text-sm text-muted-foreground">
                        Charcoal grills are generally more affordable than gas or pellet models
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Portability</h4>
                      <p className="text-sm text-muted-foreground">
                        No need for gas lines or electricity - perfect for camping and tailgating
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Versatile Cooking</h4>
                      <p className="text-sm text-muted-foreground">
                        Easy to add wood chunks for smoking and create multiple heat zones
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="mb-6 text-2xl font-semibold text-foreground">Disadvantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Longer Startup Time</h4>
                      <p className="text-sm text-muted-foreground">
                        Takes 15-20 minutes to heat up compared to instant-on gas grills
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Temperature Control</h4>
                      <p className="text-sm text-muted-foreground">
                        Requires practice to maintain consistent temperatures throughout cooking
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">More Cleanup</h4>
                      <p className="text-sm text-muted-foreground">
                        Ash disposal and grate cleaning require more effort than gas grills
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Ongoing Fuel Costs</h4>
                      <p className="text-sm text-muted-foreground">
                        Need to regularly purchase charcoal, which adds up over time
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Weather Sensitivity</h4>
                      <p className="text-sm text-muted-foreground">
                        Wind and rain can affect performance and make lighting more difficult
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Charcoal */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">Types of Charcoal</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/charcoal-briquettes-stacked-in-pile.jpg"
                    alt="Charcoal briquettes"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Briquettes</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Uniform shape and size provide consistent, predictable heat. Made from compressed charcoal dust and
                  additives, briquettes burn longer and more evenly than lump charcoal. They're ideal for beginners and
                  long cooking sessions.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Burns 2-3 hours consistently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Easy to arrange and stack</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>More affordable per pound</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>May contain additives and binders</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-8">
                <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/lump-charcoal-natural-hardwood-pieces.jpg"
                    alt="Lump charcoal"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Lump Charcoal</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Pure hardwood charcoal with no additives or fillers. Burns hotter and cleaner than briquettes,
                  reaching higher temperatures faster. Preferred by purists for its natural composition and minimal ash
                  production.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reaches 1000°F+ temperatures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Lights faster and burns cleaner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>100% natural with no chemicals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>More expensive but premium quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">
              Charcoal Grilling Best Practices
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Lighting Techniques</h3>
                <p className="mt-2 text-muted-foreground">
                  Use a chimney starter for the fastest, most reliable lighting method. Avoid lighter fluid which can
                  impart chemical flavors. Natural fire starters or newspaper work well for chemical-free ignition.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Heat Zone Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Create a two-zone fire by banking coals on one side for direct high heat, leaving the other side empty
                  for indirect cooking. This gives you flexibility to sear and then finish cooking at lower
                  temperatures.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Airflow Control</h3>
                <p className="mt-2 text-muted-foreground">
                  Master your grill's vents to control temperature. Open vents increase oxygen flow and raise
                  temperature, while closing them reduces heat. The bottom vent controls heat intensity, while the top
                  vent manages smoke.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Adding Smoke Flavor</h3>
                <p className="mt-2 text-muted-foreground">
                  Enhance flavor by adding soaked wood chunks directly to hot coals. Hickory, mesquite, apple, and
                  cherry woods each provide distinct flavors. Avoid using too much wood, which can create bitter, acrid
                  smoke.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="border-t border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground">Explore More Fuel Types</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/fuel-types/gas"
                className="rounded-lg border border-border bg-card px-6 py-3 transition-colors hover:border-primary hover:bg-card/80"
              >
                Gas Grilling
              </Link>
              <Link
                href="/fuel-types/pellets"
                className="rounded-lg border border-border bg-card px-6 py-3 transition-colors hover:border-primary hover:bg-card/80"
              >
                Pellet Grilling
              </Link>
              <Link
                href="/fuel-types/electric"
                className="rounded-lg border border-border bg-card px-6 py-3 transition-colors hover:border-primary hover:bg-card/80"
              >
                Electric Grilling
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
