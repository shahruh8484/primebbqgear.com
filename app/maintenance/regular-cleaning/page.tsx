import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RegularCleaningPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/cleaning-grill-grates-with-brush.jpg"
            alt="Regular grill cleaning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Regular Grill Cleaning
              </h1>
              <p className="mt-4 text-xl text-white/90">Keep your grill performing at its best with proper cleaning</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Regular cleaning is the most important maintenance task for any grill. A clean grill not only performs
              better but also produces better-tasting food, lasts longer, and is safer to use. Here's everything you
              need to know about keeping your grill in top condition.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Why Regular Cleaning Matters</h2>
            <p className="leading-relaxed text-muted-foreground">
              Food residue, grease, and carbon buildup don't just affect flavor—they can cause flare-ups, uneven
              heating, and even damage to your grill's components. Regular cleaning prevents these issues and ensures
              your grill operates safely and efficiently for years to come.
            </p>

            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/dirty-grill-grates-before-cleaning.jpg"
                  alt="Dirty grill grates before cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/clean-shiny-grill-grates-after-cleaning.jpg"
                  alt="Clean grill grates after cleaning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">After Every Use</h2>
            <p className="leading-relaxed text-muted-foreground">
              The best time to clean your grill grates is immediately after cooking, while they're still warm. This
              makes it much easier to remove stuck-on food and prevents buildup from hardening.
            </p>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Quick Post-Cook Cleaning</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Turn grill to high heat for 10-15 minutes to burn off residue</li>
              <li>Use a quality grill brush to scrub grates while still warm</li>
              <li>Brush in the direction of the grates, not across them</li>
              <li>Wipe down exterior surfaces with a damp cloth</li>
              <li>Empty grease trap or drip pan if needed</li>
            </ul>

            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <h4 className="text-xl font-semibold text-foreground">Pro Tip: The Onion Method</h4>
              <p className="mt-2 text-muted-foreground">
                Cut an onion in half and rub it over hot grates using tongs. The natural acids help break down grease
                and add a subtle flavor boost for your next cook. This works especially well on cast iron grates.
              </p>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Deep Cleaning (Every 3-4 Months)</h2>
            <p className="leading-relaxed text-muted-foreground">
              A thorough deep clean removes accumulated grease, carbon deposits, and debris that regular brushing can't
              reach. Plan to do this at the start and end of grilling season, plus once or twice during peak use.
            </p>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/deep-cleaning-grill-interior-components.jpg"
                alt="Deep cleaning grill interior"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Step-by-Step Deep Clean</h3>

            <h4 className="mt-6 text-xl font-semibold text-foreground">1. Prepare Your Workspace</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Disconnect gas or remove charcoal/pellets</li>
              <li>Let grill cool completely</li>
              <li>Gather cleaning supplies: degreaser, brushes, buckets, gloves</li>
              <li>Lay down tarp or work in an area that's easy to clean</li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold text-foreground">2. Remove and Soak Grates</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Take out cooking grates and any removable parts</li>
              <li>Soak in hot, soapy water for 30 minutes to 1 hour</li>
              <li>For stubborn buildup, use a degreaser or baking soda paste</li>
              <li>Scrub thoroughly with a stiff brush</li>
            </ul>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/soaking-grill-grates-in-soapy-water.jpg"
                alt="Soaking grill grates"
                fill
                className="object-cover"
              />
            </div>

            <h4 className="mt-6 text-xl font-semibold text-foreground">3. Clean the Interior</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Scrape interior walls and bottom with a putty knife or scraper</li>
              <li>Remove ash, debris, and grease buildup</li>
              <li>Clean burner tubes (gas grills) or fire pot (pellet grills)</li>
              <li>Check and clear any clogged burner ports</li>
              <li>Vacuum out loose debris with a shop vac</li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold text-foreground">4. Clean Burners and Heat Shields</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Remove burners and heat deflectors/flavorizer bars</li>
              <li>Brush away debris and check for damage</li>
              <li>Use a wire or toothpick to clear clogged burner ports</li>
              <li>Wash heat shields with degreaser and hot water</li>
            </ul>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/cleaning-gas-grill-burner-tubes.jpg"
                alt="Cleaning burner tubes"
                fill
                className="object-cover"
              />
            </div>

            <h4 className="mt-6 text-xl font-semibold text-foreground">5. Exterior Cleaning</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Wipe down exterior with appropriate cleaner for your grill's material</li>
              <li>Stainless steel: use stainless cleaner, wipe with grain</li>
              <li>Painted surfaces: mild soap and water</li>
              <li>Clean control knobs and handles</li>
              <li>Polish and protect with appropriate products</li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold text-foreground">6. Reassemble and Season</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Dry all components thoroughly before reassembling</li>
              <li>Reinstall burners, heat shields, and grates</li>
              <li>Lightly oil cast iron grates to prevent rust</li>
              <li>Run grill on high for 15 minutes to burn off any cleaning residue</li>
            </ul>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Cleaning Different Grate Materials</h2>

            <div className="mt-6 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Cast Iron Grates</h4>
                <p className="mt-2 text-muted-foreground">
                  Avoid harsh chemicals and excessive water. Brush while warm, season with oil after cleaning. Never
                  soak for extended periods as this can cause rust. Re-season annually by coating with oil and heating
                  on high for 30 minutes.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Stainless Steel Grates</h4>
                <p className="mt-2 text-muted-foreground">
                  Most durable and easiest to clean. Can handle soaking and degreaser. Use stainless steel cleaner for
                  shine. Avoid steel wool which can scratch—use brass or nylon brushes instead.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Porcelain-Coated Grates</h4>
                <p className="mt-2 text-muted-foreground">
                  Handle gently to avoid chipping the coating. Use soft brass brushes, never steel. Soak in warm soapy
                  water for stubborn buildup. Once coating is damaged, grates should be replaced to prevent rust.
                </p>
              </div>
            </div>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/different-types-of-grill-grates-comparison.jpg"
                alt="Different grill grate types"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Essential Cleaning Tools</h2>
            <p className="leading-relaxed text-muted-foreground">
              Having the right tools makes cleaning faster and more effective. Here's what every grill owner should
              have:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground">Grill Brush</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Choose bristle-free for safety or brass bristles for cast iron. Replace annually or when bristles
                  wear.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground">Scrapers</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Metal putty knife or dedicated grill scraper for removing stubborn carbon buildup.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground">Degreaser</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Commercial grill degreaser or DIY solution of vinegar and baking soda for tough grease.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground">Cleaning Cloths</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Microfiber for stainless steel, old towels for general cleaning. Keep separate from kitchen towels.
                </p>
              </div>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Common Cleaning Mistakes to Avoid</h2>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-foreground">Using Wire Brushes on Porcelain</h4>
                  <p className="text-sm text-muted-foreground">
                    Steel bristles can chip porcelain coating, leading to rust and requiring grate replacement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-foreground">Cleaning Cold Grates</h4>
                  <p className="text-sm text-muted-foreground">
                    Warm grates are much easier to clean. Heat helps loosen stuck-on food and grease.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-foreground">Neglecting the Grease Trap</h4>
                  <p className="text-sm text-muted-foreground">
                    Full grease traps are fire hazards. Empty after every few uses or when half full.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-foreground">Using Oven Cleaner</h4>
                  <p className="text-sm text-muted-foreground">
                    Harsh chemicals can damage grill components and leave toxic residue. Use grill-specific cleaners.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12 rounded-lg border-2 border-primary bg-primary/5 p-8">
              <h3 className="text-2xl font-semibold text-foreground">Quick Cleaning Schedule</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary">After Each Use:</span>
                  <span className="text-muted-foreground">Brush grates, empty grease trap, wipe exterior</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary">Monthly:</span>
                  <span className="text-muted-foreground">Check burners, clean heat shields, inspect for damage</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary">Quarterly:</span>
                  <span className="text-muted-foreground">
                    Full deep clean, check all connections, replace worn parts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary">Annually:</span>
                  <span className="text-muted-foreground">Complete inspection, re-season cast iron, replace brush</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Regular cleaning might seem like a chore, but it's the single most important thing you can do to maintain
              your grill's performance and longevity. A clean grill heats more evenly, produces better-tasting food, and
              will serve you well for many years of outdoor cooking enjoyment.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
