import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WeatherProtectionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/grill-cover-protecting-outdoor-grill.jpg"
            alt="Weather protection for grills"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">Weather Protection</h1>
              <p className="mt-4 text-xl text-white/90">Shield your investment from the elements</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Your grill is built to withstand high heat, but constant exposure to rain, snow, sun, and humidity can
              significantly shorten its lifespan. Proper weather protection is essential for maintaining your grill's
              appearance, functionality, and longevity.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Why Weather Protection Matters</h2>
            <p className="leading-relaxed text-muted-foreground">
              Even high-quality grills with weather-resistant materials will deteriorate faster without proper
              protection. Moisture causes rust, UV rays fade finishes, and temperature fluctuations can warp components.
              A good protection strategy can extend your grill's life by years.
            </p>

            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/rusted-neglected-grill-without-cover.jpg"
                  alt="Neglected grill with rust damage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/well-maintained-grill-with-cover.jpg"
                  alt="Well-protected grill"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Choosing the Right Grill Cover</h2>
            <p className="leading-relaxed text-muted-foreground">
              Not all grill covers are created equal. The right cover should fit properly, use quality materials, and be
              designed for your climate and grill type.
            </p>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Essential Cover Features</h3>

            <div className="mt-6 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Waterproof Material</h4>
                <p className="mt-2 text-muted-foreground">
                  Look for heavy-duty polyester or vinyl with waterproof coating. Material should be at least 600D
                  (denier) for durability. Cheaper covers may repel water initially but break down quickly under UV
                  exposure.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">UV Protection</h4>
                <p className="mt-2 text-muted-foreground">
                  UV-resistant fabric prevents fading and material breakdown from sun exposure. This is especially
                  important in sunny climates where covers can deteriorate in just one season without UV protection.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Proper Ventilation</h4>
                <p className="mt-2 text-muted-foreground">
                  Mesh vents prevent moisture buildup and mold growth underneath the cover. Without ventilation,
                  condensation can cause more damage than leaving the grill uncovered.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Secure Fastening</h4>
                <p className="mt-2 text-muted-foreground">
                  Drawstrings, buckles, or Velcro straps keep the cover in place during wind. A loose cover can blow off
                  or flap in the wind, causing wear on both the cover and grill finish.
                </p>
              </div>
            </div>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/high-quality-grill-cover-features-closeup.jpg"
                alt="Quality grill cover features"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Getting the Right Fit</h3>
            <p className="leading-relaxed text-muted-foreground">
              Measure your grill's width, depth, and height including the lid when open. The cover should extend at
              least 2-3 inches below the bottom of the grill. Too-tight covers are difficult to use and may tear;
              too-loose covers blow off easily.
            </p>

            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <h4 className="text-xl font-semibold text-foreground">Pro Tip: Custom vs. Universal Covers</h4>
              <p className="mt-2 text-muted-foreground">
                Custom-fit covers designed for your specific grill model offer the best protection and easiest use.
                Universal covers work but may not fit as well around handles, side tables, and other features. If using
                a universal cover, size up rather than down.
              </p>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Seasonal Protection Strategies</h2>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Spring & Summer</h3>
            <p className="leading-relaxed text-muted-foreground">
              During active grilling season, you'll be covering and uncovering frequently. Focus on protecting from
              sudden rain showers and intense UV exposure.
            </p>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Always let grill cool completely before covering (at least 30 minutes)</li>
              <li>Cover immediately after cooling to prevent morning dew exposure</li>
              <li>Remove cover during use and store in dry location</li>
              <li>Check under cover weekly for moisture or debris</li>
              <li>Position grill to minimize direct afternoon sun exposure</li>
            </ul>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/summer-grill-setup-with-shade-protection.jpg"
                alt="Summer grill protection"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Fall & Winter</h3>
            <p className="leading-relaxed text-muted-foreground">
              Cold weather protection requires extra attention. Moisture from rain and snow combined with freezing
              temperatures can cause significant damage.
            </p>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Perform thorough cleaning before winter storage</li>
              <li>Apply protective coating to metal surfaces</li>
              <li>Remove propane tanks and store separately</li>
              <li>Stuff paper towels in burner tubes to prevent insects nesting</li>
              <li>Consider moving grill to covered area like garage or shed</li>
              <li>If leaving outside, elevate slightly to prevent ice contact</li>
              <li>Brush off heavy snow accumulation to prevent cover damage</li>
            </ul>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/grill-covered-in-snow-being-used-in-winter.jpg"
                alt="Winter grill protection"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Storage Location Matters</h2>
            <p className="leading-relaxed text-muted-foreground">
              Where you keep your grill is just as important as how you cover it. The ideal location balances
              convenience with protection.
            </p>

            <div className="mt-6 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Covered Patio or Deck</h4>
                <p className="mt-2 text-muted-foreground">
                  <strong>Best option:</strong> Provides overhead protection from rain and snow while maintaining
                  ventilation. Still use a cover for dust and side-blown precipitation. Ensure adequate clearance from
                  house (10+ feet) for safety.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Open Yard or Patio</h4>
                <p className="mt-2 text-muted-foreground">
                  <strong>Most common:</strong> Requires high-quality cover and regular maintenance. Position away from
                  sprinklers and drainage areas. Consider adding a grill gazebo or canopy for extra protection.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Garage or Shed</h4>
                <p className="mt-2 text-muted-foreground">
                  <strong>Winter storage:</strong> Excellent for off-season protection. Never use grill inside enclosed
                  spaces. Ensure propane is disconnected and stored properly. Still use cover to prevent dust
                  accumulation.
                </p>
              </div>
            </div>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/various-grill-storage-locations-comparison.jpg"
                alt="Different grill storage options"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Additional Protection Methods</h2>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Protective Coatings</h3>
            <p className="leading-relaxed text-muted-foreground">
              Beyond covers, protective coatings add an extra layer of defense against the elements.
            </p>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <strong>Stainless steel polish:</strong> Creates protective barrier and prevents water spots
              </li>
              <li>
                <strong>High-temp paint:</strong> Touch up scratches and chips to prevent rust spread
              </li>
              <li>
                <strong>Cooking oil:</strong> Light coating on cast iron grates prevents rust
              </li>
              <li>
                <strong>Silicone spray:</strong> Protects rubber gaskets and seals from cracking
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Grill Mats and Pads</h3>
            <p className="leading-relaxed text-muted-foreground">
              Place a protective mat under your grill to prevent rust stains on decks and patios. Mats also catch grease
              drips and make cleanup easier. Choose fire-resistant materials rated for outdoor use.
            </p>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/grill-mat-protecting-deck-surface.jpg"
                alt="Grill mat protecting deck"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Cover Maintenance</h2>
            <p className="leading-relaxed text-muted-foreground">
              Your grill cover needs care too. Proper maintenance extends cover life and ensures continued protection.
            </p>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Regular Cover Care</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Brush off debris, leaves, and snow regularly</li>
              <li>Wash cover 2-3 times per season with mild soap and water</li>
              <li>Let cover dry completely before storing or re-covering grill</li>
              <li>Check for tears, worn spots, or deteriorating waterproofing</li>
              <li>Re-apply waterproofing spray annually if needed</li>
              <li>Store cover in dry location when not in use during active season</li>
            </ul>

            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <h4 className="text-xl font-semibold text-foreground">When to Replace Your Cover</h4>
              <p className="mt-2 text-muted-foreground">
                Replace covers when you notice: significant fading or UV damage, tears or holes, loss of waterproofing
                that can't be restored, broken fasteners or straps, or mold/mildew that won't wash out. A quality cover
                should last 2-4 years with proper care.
              </p>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Common Protection Mistakes</h2>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-foreground">Covering a Hot Grill</h4>
                  <p className="text-sm text-muted-foreground">
                    Traps heat and moisture, can melt cover material, and creates fire hazard. Always wait 30+ minutes
                    for complete cooling.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-foreground">Leaving Propane Connected</h4>
                  <p className="text-sm text-muted-foreground">
                    Temperature fluctuations can affect pressure. Disconnect tanks during long-term storage and store in
                    ventilated area.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-foreground">Using Cheap Covers</h4>
                  <p className="text-sm text-muted-foreground">
                    Thin, poorly-made covers deteriorate quickly and provide inadequate protection. Invest in
                    quality—it's cheaper than replacing grill components.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-foreground">Ignoring Moisture Buildup</h4>
                  <p className="text-sm text-muted-foreground">
                    Check under cover regularly. Trapped moisture causes more damage than exposure. Ensure proper
                    ventilation and dry grill before covering.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12 rounded-lg border-2 border-primary bg-primary/5 p-8">
              <h3 className="text-2xl font-semibold text-foreground">Weather Protection Checklist</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">
                    Invest in quality, properly-fitted cover with UV and water protection
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Always let grill cool completely before covering</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">
                    Position grill in location with some overhead protection if possible
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Check under cover regularly for moisture and debris</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Clean and maintain cover to extend its lifespan</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Prepare grill properly for winter storage</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Apply protective coatings to vulnerable surfaces</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Proper weather protection is one of the easiest and most cost-effective ways to extend your grill's
              lifespan. A quality cover and good protection habits will keep your grill looking great and performing
              well for many years, protecting your investment and ensuring you're always ready for your next cookout.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
