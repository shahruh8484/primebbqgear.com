import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PelletsFuelPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/wood-pellets-for-pellet-grill-smoking.jpg"
            alt="Pellet grilling"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-serif text-5xl font-bold text-white md:text-6xl">Pellet Grilling</h1>
              <p className="mt-4 text-xl text-white/90">Wood-fired flavor with set-and-forget convenience</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Pellet grills combine the best of both worlds: authentic wood-fired flavor with the convenience of
              automated temperature control. Using compressed hardwood pellets and digital controllers, these grills
              maintain precise temperatures while infusing food with rich, smoky taste perfect for low-and-slow cooking.
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
                      <h4 className="font-semibold text-foreground">Authentic Wood Flavor</h4>
                      <p className="text-sm text-muted-foreground">
                        Real hardwood pellets provide genuine smoky taste in every bite
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Set-It-and-Forget-It</h4>
                      <p className="text-sm text-muted-foreground">
                        Digital controllers maintain temperature automatically for hours
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Versatile Cooking</h4>
                      <p className="text-sm text-muted-foreground">
                        Grill, smoke, bake, roast, and braise all on one unit
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Consistent Results</h4>
                      <p className="text-sm text-muted-foreground">
                        Precise temperature control eliminates guesswork and hot spots
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Flavor Variety</h4>
                      <p className="text-sm text-muted-foreground">
                        Different wood pellets create unique flavor profiles
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-green-600">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">WiFi Connectivity</h4>
                      <p className="text-sm text-muted-foreground">
                        Many models offer smartphone monitoring and control
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
                      <h4 className="font-semibold text-foreground">Requires Electricity</h4>
                      <p className="text-sm text-muted-foreground">
                        Needs power outlet for auger and controller - not portable
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Higher Cost</h4>
                      <p className="text-sm text-muted-foreground">
                        Premium price for both the grill and ongoing pellet purchases
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Limited High Heat</h4>
                      <p className="text-sm text-muted-foreground">
                        Most max out at 450-500°F, not ideal for high-heat searing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Pellet Storage</h4>
                      <p className="text-sm text-muted-foreground">
                        Pellets must be kept dry - moisture ruins them completely
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">More Maintenance</h4>
                      <p className="text-sm text-muted-foreground">
                        Auger, fire pot, and controller require regular cleaning and care
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-red-600">✗</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Cold Weather Issues</h4>
                      <p className="text-sm text-muted-foreground">
                        Performance drops in freezing temperatures, uses more pellets
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Pellets */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">Wood Pellet Varieties</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Hickory</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Strong, bacon-like flavor. Perfect for pork, ribs, and beef. The most popular choice for traditional
                  BBQ taste.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Mesquite</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bold, earthy flavor. Best for beef and game meats. Use sparingly as it can be overpowering.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Apple</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mild, sweet, fruity flavor. Excellent for poultry, pork, and fish. Great for beginners.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Cherry</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sweet, mild flavor with beautiful mahogany color. Ideal for all meats, especially chicken and turkey.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Oak</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Medium smoke flavor, very versatile. Works well with any meat and blends nicely with other woods.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Maple</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Subtle, sweet flavor. Perfect for poultry, vegetables, and cheese. Adds a hint of sweetness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">
              Pellet Grilling Best Practices
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Pellet Storage</h3>
                <p className="mt-2 text-muted-foreground">
                  Store pellets in airtight containers in a dry location. Moisture causes pellets to swell and jam the
                  auger. Remove pellets from hopper if not using grill for extended periods.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Startup and Shutdown</h3>
                <p className="mt-2 text-muted-foreground">
                  Always follow proper startup procedures to prime the auger. Use the shutdown cycle to burn off
                  remaining pellets and prevent fire pot buildup. Never unplug during operation.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Temperature Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Avoid constantly opening the lid, which causes temperature swings. Trust the controller and use a meat
                  thermometer instead. Allow 10-15 minutes for temperature to stabilize after adjustments.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground">Regular Cleaning</h3>
                <p className="mt-2 text-muted-foreground">
                  Clean the fire pot, heat deflector, and grease tray after every few cooks. Vacuum out ash buildup from
                  the fire pot area. Check auger for jams and clean temperature probe regularly.
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
