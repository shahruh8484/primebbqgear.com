import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import Image from "next/image"

export default function CoversPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-serif text-5xl font-bold leading-tight text-foreground">The Best Grill Covers</h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">by GrillMaster Reviews Staff</p>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                After testing 25 grill covers over three years of outdoor exposure, we've found the best options to
                protect your investment from rain, snow, UV rays, and harsh weather conditions.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">Updated October 22, 2025</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Main Column */}
            <div className="lg:col-span-8">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground">
                  A quality grill cover is essential for protecting your barbecue investment from the elements. We've
                  spent hundreds of hours testing covers in various weather conditions, measuring water resistance, UV
                  protection, and durability. Our top picks will keep your grill looking new for years to come.
                </p>

                <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">How We Tested</h2>
                <p className="leading-relaxed text-foreground">
                  We evaluated each cover based on material quality, weather resistance, fit and sizing, ease of use,
                  and long-term durability. Our testing included exposure to rain, snow, intense sun, and wind over
                  multiple seasons. We also assessed how well each cover maintained its appearance and functionality
                  after extended outdoor use.
                </p>
              </div>

              {/* Top Pick */}
              <div className="mt-12 border-t border-border pt-12">
                <h2 className="font-serif text-3xl font-bold text-foreground">Top Pick: Weber Premium Grill Cover</h2>
                <div className="mt-6">
                  <Image
                    src="/weber-premium-grill-cover.jpg"
                    alt="Weber Premium Grill Cover"
                    width={800}
                    height={500}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">5.0</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Pros:</h3>
                    <ul className="mt-2 space-y-1 text-foreground">
                      <li>• Exceptional weather resistance with waterproof coating</li>
                      <li>• Heavy-duty polyester fabric resists fading and tearing</li>
                      <li>• Velcro straps and drawstring ensure secure fit</li>
                      <li>• Breathable fabric prevents mold and mildew</li>
                      <li>• Available in multiple sizes for perfect fit</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Cons:</h3>
                    <ul className="mt-2 space-y-1 text-foreground">
                      <li>• Can be tight fit on some grill models</li>
                    </ul>
                  </div>
                  <p className="leading-relaxed text-foreground">
                    The Weber Premium Grill Cover sets the standard for grill protection. Its heavy-duty polyester
                    construction with waterproof coating kept our test grill completely dry through torrential rain and
                    snow. The UV-resistant fabric showed minimal fading after two years of constant sun exposure. The
                    secure fastening system with both Velcro straps and a drawstring kept the cover in place during high
                    winds.
                  </p>
                </div>
              </div>

              {/* Runner Up */}
              <div className="mt-12 border-t border-border pt-12">
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Runner Up: Classic Accessories Veranda Cover
                </h2>
                <div className="mt-6">
                  <Image
                    src="/classic-accessories-veranda-cover.jpg"
                    alt="Classic Accessories Veranda Cover"
                    width={800}
                    height={500}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                    ))}
                    <Star className="h-5 w-5 fill-muted text-muted" />
                  </div>
                  <span className="text-lg font-semibold">4.5</span>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="leading-relaxed text-foreground">
                    An excellent value option that offers solid protection. The Veranda cover features water-resistant
                    fabric, air vents to prevent condensation, and click-close straps for easy securing. While not quite
                    as durable as the Weber, it performed admirably in our year-long outdoor test.
                  </p>
                </div>
              </div>

              {/* Budget Pick */}
              <div className="mt-12 border-t border-border pt-12">
                <h2 className="font-serif text-3xl font-bold text-foreground">Budget Pick: Kingkong Grill Cover</h2>
                <div className="mt-6">
                  <Image
                    src="/kingkong-grill-cover.jpg"
                    alt="Kingkong Grill Cover"
                    width={800}
                    height={500}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                    ))}
                    <Star className="h-5 w-5 fill-muted text-muted" />
                  </div>
                  <span className="text-lg font-semibold">4.0</span>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="leading-relaxed text-foreground">
                    For those on a tight budget, the Kingkong cover provides basic protection at an affordable option.
                    The 600D Oxford fabric is reasonably water-resistant and includes UV protection. While it won't last
                    as long as premium options, it's a solid choice for covered patios or mild climates.
                  </p>
                </div>
              </div>

              {/* Heavy-Duty Pick */}
              <div className="mt-12 border-t border-border pt-12">
                <h2 className="font-serif text-3xl font-bold text-foreground">Heavy-Duty Pick: Covermates Elite</h2>
                <div className="mt-6">
                  <Image
                    src="/covermates-elite-grill-cover.jpg"
                    alt="Covermates Elite Grill Cover"
                    width={800}
                    height={500}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.8</span>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="leading-relaxed text-foreground">
                    For extreme weather conditions, the Covermates Elite is built like a tank. Its triple-layer
                    construction with reinforced seams survived our harshest tests, including heavy snow loads and 50+
                    mph winds. The premium materials and 3-year warranty make this the best choice for year-round
                    outdoor exposure in challenging climates.
                  </p>
                </div>
              </div>

              {/* Buying Guide */}
              <div className="mt-12 border-t border-border pt-12">
                <h2 className="font-serif text-3xl font-bold text-foreground">What to Look for in a Grill Cover</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Material Quality</h3>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Look for heavy-duty polyester or Oxford fabric with a denier rating of at least 300D. Higher
                      denier numbers indicate thicker, more durable fabric. A waterproof or water-resistant coating is
                      essential, and UV protection will prevent fading and material breakdown.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Proper Fit</h3>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Measure your grill carefully before purchasing. A cover that's too small won't protect adequately,
                      while one that's too large can blow off in wind. Most manufacturers provide sizing charts based on
                      grill dimensions. Look for adjustable straps or drawstrings for a custom fit.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Ventilation</h3>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Air vents are crucial for preventing moisture buildup and mold growth. Look for covers with mesh
                      vents that allow air circulation while keeping water out. This is especially important in humid
                      climates.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Fastening System</h3>
                    <p className="mt-2 leading-relaxed text-foreground">
                      A good fastening system keeps the cover secure in wind. Look for features like drawstrings, Velcro
                      straps, buckles, or elastic hems. Multiple fastening points provide better security than a single
                      drawstring.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Warranty</h3>
                    <p className="mt-2 leading-relaxed text-foreground">
                      A manufacturer's warranty indicates confidence in the product's durability. Look for warranties of
                      at least one year, with premium covers often offering 2-3 year coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Quick Picks */}
                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground">Our Quick Picks</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="font-semibold text-foreground">Top Pick</p>
                      <p className="text-sm text-muted-foreground">Weber Premium Cover</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Runner Up</p>
                      <p className="text-sm text-muted-foreground">Classic Accessories Veranda</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Budget Pick</p>
                      <p className="text-sm text-muted-foreground">Kingkong Cover</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Heavy-Duty</p>
                      <p className="text-sm text-muted-foreground">Covermates Elite</p>
                    </div>
                  </div>
                </div>

                {/* Key Considerations */}
                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground">Key Considerations</h3>
                  <ul className="mt-4 space-y-3 text-sm text-foreground">
                    <li>• Measure your grill before buying</li>
                    <li>• Check for UV protection</li>
                    <li>• Ensure proper ventilation</li>
                    <li>• Look for secure fastening</li>
                    <li>• Consider warranty coverage</li>
                    <li>• Choose water-resistant fabric</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
