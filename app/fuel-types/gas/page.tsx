import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GasFuelPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/gas-grill-burners-with-blue-flames.jpg"
            alt="Gas grilling"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">Gas Grilling</h1>
              <p className="mt-4 text-xl text-white/90">Convenience meets precision temperature control</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Gas grilling offers the perfect balance of convenience and performance. With instant ignition, precise
              temperature control, and minimal cleanup, gas grills are ideal for everyday cooking and busy lifestyles.
              Whether using propane or natural gas, these grills deliver consistent results with less effort.
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
                      <h4 className="font-semibold text-foreground">Instant Startup</h4>
                      <p className="text-sm text-muted-foreground">
                        Ready to cook in 10-15 minutes with push-button ignition
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Precise Temperature Control</h4>
                      <p className="text-sm text-muted-foreground">
                        Adjust heat instantly with burner knobs for perfect cooking temperatures
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Easy Cleanup</h4>
                      <p className="text-sm text-muted-foreground">
                        No ash to dispose of - just clean the grates and drip tray
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Consistent Performance</h4>
                      <p className="text-sm text-muted-foreground">
                        Reliable heat output regardless of weather conditions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Multiple Burners</h4>
                      <p className="text-sm text-muted-foreground">
                        Create different heat zones easily for versatile cooking
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Lower Operating Costs</h4>
                      <p className="text-sm text-muted-foreground">
                        Propane and natural gas are economical compared to charcoal
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
                      <h4 className="font-semibold text-foreground">Less Smoky Flavor</h4>
                      <p className="text-sm text-muted-foreground">
                        Doesn't produce the same authentic BBQ taste as charcoal
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Higher Initial Cost</h4>
                      <p className="text-sm text-muted-foreground">
                        Quality gas grills are more expensive than charcoal models
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Fuel Dependency</h4>
                      <p className="text-sm text-muted-foreground">Need propane tanks or natural gas line connection</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">More Maintenance</h4>
                      <p className="text-sm text-muted-foreground">
                        Burners, igniters, and gas lines require regular inspection
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Less Portable</h4>
                      <p className="text-sm text-muted-foreground">
                        Heavier and bulkier than charcoal grills, harder to transport
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Lower Maximum Heat</h4>
                      <p className="text-sm text-muted-foreground">
                        Typically maxes out around 500-600°F, lower than charcoal
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Gas */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">Propane vs Natural Gas</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/propane-tank-connected-to-gas-grill.jpg"
                    alt="Propane tank"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Propane (LP)</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Portable fuel stored in refillable tanks. Most common choice for residential grilling, offering
                  flexibility to move your grill anywhere. Standard 20-pound tanks provide 18-20 hours of cooking time.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Portable and flexible placement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Burns hotter than natural gas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Requires tank refills or exchanges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Can run out mid-cooking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Slightly more expensive per BTU</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-8">
                <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/natural-gas-line-connection-to-grill.jpg"
                    alt="Natural gas connection"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Natural Gas (NG)</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Connected directly to your home's gas line for unlimited fuel supply. Requires professional
                  installation but eliminates the need for tank refills. More economical for frequent grillers.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Unlimited fuel supply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Lower cost per BTU</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>No tank refills needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Requires professional installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Grill location is fixed</span>
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
              Gas Grilling Best Practices
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Preheating</h3>
                <p className="mt-2 text-muted-foreground">
                  Always preheat your gas grill for 10-15 minutes with the lid closed. This ensures even heat
                  distribution, burns off residue from previous cooking, and helps prevent sticking.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Using Multiple Burners</h3>
                <p className="mt-2 text-muted-foreground">
                  Take advantage of multiple burners to create heat zones. Use high heat for searing, medium for cooking
                  through, and turn off burners to create an indirect zone for delicate items or finishing.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Adding Smoke Flavor</h3>
                <p className="mt-2 text-muted-foreground">
                  Use smoker boxes or foil packets filled with wood chips to add smoky flavor. Place directly over
                  burners and wait for smoke before adding food. Soak chips for 30 minutes to extend smoking time.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Safety Checks</h3>
                <p className="mt-2 text-muted-foreground">
                  Regularly inspect gas connections, hoses, and burners for leaks or damage. Use soapy water to check
                  for bubbles indicating gas leaks. Always turn off gas at the tank when not in use.
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
