import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ElectricFuelPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/electric-grill-heating-element-glowing.jpg"
            alt="Electric grilling"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">Electric Grilling</h1>
              <p className="mt-4 text-xl text-white/90">Indoor-friendly convenience with consistent heat</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Electric grills offer the ultimate in convenience and safety, making them perfect for apartments, condos,
              and indoor use. With no open flames or smoke, these grills provide consistent, controllable heat for
              year-round grilling regardless of weather or living situation restrictions.
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
                      <h4 className="font-semibold text-foreground">Indoor Safe</h4>
                      <p className="text-sm text-muted-foreground">
                        No open flames or carbon monoxide - safe for apartments and balconies
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Instant Heat</h4>
                      <p className="text-sm text-muted-foreground">
                        Ready to cook immediately with consistent temperature control
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Minimal Cleanup</h4>
                      <p className="text-sm text-muted-foreground">
                        No ash, charcoal, or gas residue - just clean the grates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Weather Independent</h4>
                      <p className="text-sm text-muted-foreground">Grill year-round indoors without weather concerns</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Compact Size</h4>
                      <p className="text-sm text-muted-foreground">
                        Perfect for small spaces, countertops, and limited storage
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Low Operating Cost</h4>
                      <p className="text-sm text-muted-foreground">
                        Electricity is cheaper than propane or charcoal per use
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
                      <h4 className="font-semibold text-foreground">No Smoky Flavor</h4>
                      <p className="text-sm text-muted-foreground">
                        Cannot produce authentic BBQ smoke flavor without additives
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Lower Maximum Heat</h4>
                      <p className="text-sm text-muted-foreground">
                        Typically maxes at 400-450°F, limiting searing capability
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Requires Outlet</h4>
                      <p className="text-sm text-muted-foreground">
                        Must be near electrical outlet - limits placement options
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Smaller Cooking Area</h4>
                      <p className="text-sm text-muted-foreground">
                        Most models have limited space compared to outdoor grills
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Less Authentic Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Doesn't provide traditional outdoor grilling atmosphere
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Heating Element Wear</h4>
                      <p className="text-sm text-muted-foreground">
                        Elements can burn out and require replacement over time
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Electric Grills */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
              Types of Electric Grills
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/indoor-electric-grill-on-countertop.jpg"
                    alt="Indoor electric grill"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Indoor Contact Grills</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Compact countertop models with top and bottom heating plates. Food cooks from both sides
                  simultaneously for faster cooking. Perfect for paninis, burgers, and vegetables in small spaces.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cooks both sides at once</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Compact and portable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Easy to clean removable plates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Limited to smaller food items</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-8">
                <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/outdoor-electric-grill-on-patio.jpg"
                    alt="Outdoor electric grill"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Outdoor Electric Grills</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Full-sized grills with open grates and heating elements below. Designed for outdoor use on patios and
                  balconies where gas or charcoal isn't allowed. Provides more traditional grilling experience.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Larger cooking surface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Traditional grill grates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Better for outdoor entertaining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Requires weatherproof outlet</span>
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
              Electric Grilling Best Practices
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Proper Preheating</h3>
                <p className="mt-2 text-muted-foreground">
                  Allow 10-15 minutes for full preheat to ensure even cooking. Electric grills need time to heat the
                  entire cooking surface uniformly. Don't rush this step for best results.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Adding Smoke Flavor</h3>
                <p className="mt-2 text-muted-foreground">
                  Use liquid smoke in marinades or wood chip smoker boxes designed for electric grills. Some models have
                  built-in smoker boxes. Experiment with smoked salts and rubs for enhanced flavor.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Moisture Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Electric grills can dry out food faster than other methods. Use marinades, basting, or water pans to
                  maintain moisture. Don't overcook - use a meat thermometer for precision.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Safety and Maintenance</h3>
                <p className="mt-2 text-muted-foreground">
                  Keep electrical connections dry and use GFCI outlets for outdoor models. Clean heating elements
                  carefully without water. Check cords regularly for damage and replace if frayed.
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
                href="/fuel-types/charcoal"
                className="rounded-lg border border-border bg-card px-6 py-3 transition-colors hover:border-primary hover:bg-card/80"
              >
                Charcoal Grilling
              </Link>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
