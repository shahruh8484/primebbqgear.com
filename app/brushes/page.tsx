import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import Image from "next/image"

export default function BrushesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-serif text-5xl font-bold text-foreground text-balance">The Best Grill Brushes</h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                After testing dozens of grill brushes over multiple grilling seasons, we've found the best options for
                keeping your grates clean and safe.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>By GrillMaster Staff</span>
                <span>•</span>
                <span>Updated October 22, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Introduction */}
              <section className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  A clean grill is essential for great-tasting food and safe cooking. We spent over 100 hours testing
                  grill brushes on various grate types, evaluating their cleaning power, durability, and safety. Our
                  testing included both traditional bristle brushes and newer bristle-free designs to help you find the
                  best option for your needs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Safety is paramount when choosing a grill brush. Wire bristles can break off and become lodged in
                  food, posing a serious health hazard. We've included both traditional and bristle-free options, with
                  clear guidance on safe usage for each type.
                </p>
              </section>

              {/* Product Reviews */}
              <section className="space-y-12">
                <h2 className="font-serif text-3xl font-bold text-foreground border-b border-border pb-4">
                  Our Top Picks
                </h2>

                {/* Product 1 */}
                <article className="border border-border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">Weber 3-Sided Grill Brush</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">5.0 / 5.0</span>
                      </div>
                    </div>
                    <span className="bg-foreground text-background px-3 py-1 text-sm font-semibold">BEST OVERALL</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Image
                      src="/weber-3-sided-grill-brush.jpg"
                      alt="Weber 3-Sided Grill Brush"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Pros</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Three-sided design cleans efficiently</li>
                          <li>• Stainless steel bristles are durable</li>
                          <li>• Long handle keeps hands away from heat</li>
                          <li>• Works on all grate types</li>
                          <li>• Comfortable grip</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cons</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Bristles require regular inspection</li>
                          <li>• Not dishwasher safe</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    The Weber 3-Sided Grill Brush is our top pick for its exceptional cleaning power and thoughtful
                    design. The three-sided brush head allows you to clean the top and sides of grates simultaneously,
                    cutting cleaning time in half. The stainless steel bristles are firmly anchored and showed no signs
                    of loosening during our extensive testing. The 18-inch handle provides excellent reach while keeping
                    your hands safely away from the heat.
                  </p>
                </article>

                {/* Product 2 */}
                <article className="border border-border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">Grill Rescue Brush</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">4.8 / 5.0</span>
                      </div>
                    </div>
                    <span className="bg-foreground text-background px-3 py-1 text-sm font-semibold">
                      BEST BRISTLE-FREE
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Image
                      src="/grill-rescue-brush.jpg"
                      alt="Grill Rescue Brush"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Pros</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Completely bristle-free design</li>
                          <li>• Uses steam cleaning power</li>
                          <li>• Replaceable cleaning head</li>
                          <li>• Safe for all grate materials</li>
                          <li>• No risk of wire bristles in food</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cons</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Requires water for steam cleaning</li>
                          <li>• Cleaning heads need replacement</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    For those concerned about bristle safety, the Grill Rescue Brush offers an excellent alternative.
                    This innovative brush uses a heat-resistant aramid fiber head that you wet before use. When applied
                    to a hot grill, it creates steam that loosens stuck-on food while the scrubbing action removes
                    debris. The cleaning head is replaceable and machine washable, making maintenance easy.
                  </p>
                </article>

                {/* Product 3 */}
                <article className="border border-border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">Kona Safe Clean Grill Brush</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                          ))}
                          <Star className="h-4 w-4 text-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">4.5 / 5.0</span>
                      </div>
                    </div>
                    <span className="bg-foreground text-background px-3 py-1 text-sm font-semibold">BEST BUDGET</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Image
                      src="/kona-safe-clean-brush.jpg"
                      alt="Kona Safe Clean Grill Brush"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Pros</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Excellent value</li>
                          <li>• Triple helix design for thorough cleaning</li>
                          <li>• 18-inch handle</li>
                          <li>• Durable stainless steel construction</li>
                          <li>• Integrated scraper</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cons</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Bristles not as firmly anchored as premium options</li>
                          <li>• Handle can get hot</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    The Kona Safe Clean Grill Brush delivers impressive performance at a budget-friendly price point.
                    Its triple helix bristle design provides thorough cleaning, and the integrated scraper helps tackle
                    stubborn, stuck-on residue. While the bristles aren't quite as firmly anchored as our top pick,
                    regular inspection and replacement ensure safe use.
                  </p>
                </article>

                {/* Product 4 */}
                <article className="border border-border p-6">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-bold text-foreground">Char-Broil Cool-Clean Brush</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                        ))}
                        <Star className="h-4 w-4 text-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">4.3 / 5.0</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Image
                      src="/char-broil-cool-clean-brush.jpg"
                      alt="Char-Broil Cool-Clean Brush"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Pros</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Can clean cold grates safely</li>
                          <li>• Nylon bristles won't scratch porcelain</li>
                          <li>• Ergonomic handle design</li>
                          <li>• Dishwasher safe</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cons</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Not as effective on heavily soiled grates</li>
                          <li>• Nylon bristles wear faster than steel</li>
                          <li>• Requires more elbow grease</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    The Char-Broil Cool-Clean Brush is designed for cleaning cold grates, making it ideal for those who
                    prefer to clean before grilling rather than after. The nylon bristles are safe for delicate
                    porcelain-coated grates and won't cause scratching. While it requires more effort than our top
                    picks, it's a solid choice for regular maintenance cleaning.
                  </p>
                </article>
              </section>

              {/* Buying Guide */}
              <section className="border-t border-border pt-12 space-y-8">
                <h2 className="font-serif text-3xl font-bold text-foreground">How to Choose a Grill Brush</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Bristle vs. Bristle-Free</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Traditional wire bristle brushes are highly effective but require careful inspection before each
                      use to ensure no loose bristles. Bristle-free alternatives use materials like aramid fiber, nylon,
                      or metal coils to clean without the risk of bristles breaking off. Consider your comfort level
                      with bristle safety and cleaning preferences when choosing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Handle Length and Material</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A longer handle (16-20 inches) keeps your hands safely away from the heat while cleaning a hot
                      grill. Look for handles made from heat-resistant materials with comfortable grips. Some handles
                      feature hanging loops for convenient storage.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Grate Compatibility</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Different grate materials require different brush types. Stainless steel and cast iron grates can
                      handle aggressive wire bristles, while porcelain-coated grates need gentler nylon or brass
                      bristles to avoid scratching. Bristle-free options work safely on all grate types.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Durability and Maintenance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Quality grill brushes should last multiple grilling seasons with proper care. Look for firmly
                      anchored bristles, rust-resistant materials, and replaceable heads when available. Clean your
                      brush after each use and store it in a dry location to maximize its lifespan.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">Safety Considerations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Always inspect wire bristle brushes before use, checking for loose or damaged bristles. Replace
                      brushes showing signs of wear. After brushing, wipe grates with a damp cloth or paper towel to
                      remove any potential loose bristles. Consider bristle-free options if you have concerns about
                      bristle safety.
                    </p>
                  </div>
                </div>
              </section>

              {/* Testing Methodology */}
              <section className="border-t border-border pt-12 space-y-6">
                <h2 className="font-serif text-3xl font-bold text-foreground">How We Tested</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We tested over 25 grill brushes on various grate types including stainless steel, cast iron, and
                  porcelain-coated grates. Each brush was evaluated on cleaning effectiveness, durability, ease of use,
                  and safety. We used the brushes on heavily soiled grates after cooking burgers, chicken, and
                  vegetables to simulate real-world conditions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our testing included both hot and cold grate cleaning, handle comfort during extended use, and
                  long-term durability over multiple grilling sessions. We also evaluated bristle retention for wire
                  brushes and cleaning head longevity for bristle-free options.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
