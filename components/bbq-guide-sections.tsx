import Image from "next/image"
import Link from "next/link"

export function BBQGuideSections() {
  return (
    <div className="bg-background">
      {/* Grilling Techniques Section */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/person-grilling-steaks-on-outdoor-grill-with-flame.jpg"
                alt="Grilling techniques"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Master Your Grilling Techniques
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                From direct heat searing to low-and-slow smoking, understanding different grilling techniques is
                essential for achieving perfect results. Learn how to control temperature zones, manage flare-ups, and
                use indirect heat for larger cuts of meat.
              </p>
              <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span>Direct vs. indirect heat cooking methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span>Temperature control and zone management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span>Smoking techniques for enhanced flavor</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  <span>Reverse searing for perfect steaks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Types Section */}
      <section id="fuel-types" className="border-b border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose Your Fuel
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Each fuel type offers unique advantages for different grilling styles and preferences
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/fuel-types/charcoal" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/charcoal-briquettes-burning-with-red-hot-coals.jpg"
                  alt="Charcoal grilling"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary">Charcoal</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Traditional smoky flavor with high heat capability. Perfect for searing and authentic BBQ taste.
              </p>
            </Link>
            <Link href="/fuel-types/gas" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/gas-grill-burners-with-blue-flames.jpg"
                  alt="Gas grilling"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary">Gas</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Convenient and precise temperature control. Quick startup and easy cleanup for everyday grilling.
              </p>
            </Link>
            <Link href="/fuel-types/pellets" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/wood-pellets-for-pellet-grill-smoking.jpg"
                  alt="Pellet grilling"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary">Pellets</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wood-fired flavor with set-it-and-forget-it convenience. Ideal for low-and-slow smoking.
              </p>
            </Link>
            <Link href="/fuel-types/electric" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/electric-grill-heating-element-glowing.jpg"
                  alt="Electric grilling"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary">Electric</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Indoor-friendly option with consistent heat. Great for apartments and small spaces.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Grilling Section */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center lg:order-2">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Grill All Year Round
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Don't let the seasons stop you from enjoying great grilled food. With the right techniques and
                equipment, you can grill in any weather condition and create delicious meals year-round.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground">Summer Grilling</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Perfect for burgers, hot dogs, and fresh vegetables. Keep hydrated and manage high temperatures.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground">Winter Grilling</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Extend cooking times and use wind shields. Perfect for hearty meats and warming comfort foods.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground">Spring & Fall</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ideal conditions for smoking and slow cooking. Great for experimenting with new recipes.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:order-1">
              <Image
                src="/grill-covered-in-snow-being-used-in-winter.jpg"
                alt="Year-round grilling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips Section */}
      <section id="maintenance" className="border-b border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Grill Care & Maintenance
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Proper maintenance extends your grill's life and ensures better cooking results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Link
              href="/maintenance/regular-cleaning"
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/cleaning-grill-grates-with-brush.jpg"
                  alt="Cleaning grill grates"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Regular Cleaning</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Clean grates after each use while still warm. Deep clean every few months to prevent buildup and
                maintain performance.
              </p>
            </Link>
            <Link
              href="/maintenance/weather-protection"
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/grill-cover-protecting-outdoor-grill.jpg"
                  alt="Protecting your grill"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Weather Protection</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Use quality covers to protect from elements. Store in covered area during harsh weather to prevent rust
                and damage.
              </p>
            </Link>
            <Link
              href="/maintenance/seasonal-inspection"
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/checking-gas-grill-connections-and-burners.jpg"
                  alt="Grill inspection"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Seasonal Inspection</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Check gas connections, burners, and ignition systems. Replace worn parts before they cause problems.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Food Safety Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Grilling Safety First
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Safe grilling practices protect you, your family, and your property. Follow these essential guidelines
                  for worry-free outdoor cooking.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Proper Placement</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep grill at least 10 feet from structures and never use indoors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Temperature Monitoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Use meat thermometers to ensure food reaches safe internal temperatures
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Fire Prevention</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep fire extinguisher nearby and never leave grill unattended
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Clean Cooking</h4>
                      <p className="text-sm text-muted-foreground">
                        Prevent cross-contamination with separate utensils for raw and cooked foods
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto">
                <Image
                  src="/safe-outdoor-grilling-setup-with-proper-clearance.jpg"
                  alt="Safe grilling practices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
