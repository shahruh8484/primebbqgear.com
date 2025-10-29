import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, ChevronRight } from "lucide-react"

export default function TraegerIronwood650Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground">
              Home
            </a>
            <ChevronRight className="h-4 w-4" />
            <a href="/pellet-grills" className="hover:text-foreground">
              Pellet Grills
            </a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Traeger Ironwood 650</span>
          </nav>

          <div className="mb-12">
            <div className="mb-4 inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium">PELLET GRILLS</div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Traeger Ironwood 650</h1>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8</span>
              <span className="text-muted-foreground">(245 reviews)</span>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="relative mb-6 aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/traeger-pellet-grill-smoker-black-outdoor.jpg"
                  alt="Traeger Ironwood 650"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/traeger-ironwood-hopper-pellets.jpg"
                    alt="Pellet hopper"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/traeger-ironwood-wifi-controller.jpg"
                    alt="WiFi controller"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/traeger-ironwood-cooking-ribs.jpg"
                    alt="Cooking ribs"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/traeger-ironwood-storage-cabinet.jpg"
                    alt="Storage cabinet"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8 rounded-lg border border-border bg-muted/50 p-6">
                <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-foreground">•</span>
                    <span>650 square inches of cooking space with porcelain-coated grill grates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-foreground">•</span>
                    <span>WiFire technology for remote temperature control via smartphone app</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-foreground">•</span>
                    <span>TurboTemp technology for faster startup and recovery times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-foreground">•</span>
                    <span>20-pound pellet hopper capacity with pellet sensor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-foreground">•</span>
                    <span>Double-wall stainless steel interior for superior heat retention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-foreground">•</span>
                    <span>Downdraft exhaust system for consistent smoke circulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-foreground">•</span>
                    <span>All-terrain wheels and side shelf with tool hooks</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">Specifications</h2>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Cooking Area</dt>
                    <dd className="mt-1 font-semibold">650 sq in</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Hopper Capacity</dt>
                    <dd className="mt-1 font-semibold">20 lbs</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Temperature Range</dt>
                    <dd className="mt-1 font-semibold">165°F - 500°F</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Weight</dt>
                    <dd className="mt-1 font-semibold">195 lbs</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Dimensions</dt>
                    <dd className="mt-1 font-semibold">53" W x 27" D x 49" H</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Warranty</dt>
                    <dd className="mt-1 font-semibold">3 years</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted/50 p-6">
              <h3 className="mb-4 text-xl font-bold text-foreground">Pros</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>Exceptional WiFi connectivity with intuitive app control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>Superior heat retention and consistent temperature control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>Large cooking capacity perfect for family gatherings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>TurboTemp technology reduces startup time significantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>Excellent build quality with premium materials throughout</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-muted/50 p-6">
              <h3 className="mb-4 text-xl font-bold text-foreground">Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-600">✗</span>
                  <span>Premium pricing compared to entry-level pellet grills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-600">✗</span>
                  <span>Requires electrical outlet for operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-600">✗</span>
                  <span>Pellet consumption can be high during cold weather</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-600">✗</span>
                  <span>Heavy weight makes relocation challenging</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-3xl font-bold">Our Review</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The Traeger Ironwood 650 represents a significant step up in the pellet grill category, offering
                features and performance that justify its premium positioning. After extensive testing over multiple
                months and various weather conditions, we found this grill delivers on its promises of convenience,
                consistency, and exceptional wood-fired flavor.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Performance and Temperature Control</h3>
              <p>
                The Ironwood 650's temperature control is simply outstanding. The WiFire controller maintains set
                temperatures within ±5°F throughout the cooking process, even during long smoking sessions. We tested
                this extensively with overnight brisket cooks, and the grill held steady temperatures for 12+ hours
                without intervention. The TurboTemp technology noticeably reduces startup time to about 10 minutes,
                compared to 15-20 minutes on older Traeger models.
              </p>

              <div className="my-8 overflow-hidden rounded-lg">
                <img
                  src="/traeger-ironwood-temperature-graph.jpg"
                  alt="Temperature consistency graph"
                  className="w-full"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold">WiFi Connectivity and App Experience</h3>
              <p>
                The WiFire app is genuinely useful, not just a gimmick. We could monitor and adjust temperatures from
                anywhere, receive alerts when food reached target temperatures, and even access hundreds of recipes with
                step-by-step guidance. The app's reliability impressed us—we experienced zero connection drops during
                our testing period. The ability to adjust temperatures remotely proved invaluable during long smoking
                sessions.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Build Quality and Design</h3>
              <p>
                The double-wall stainless steel interior is a game-changer for heat retention and efficiency. We noticed
                significantly lower pellet consumption compared to single-wall competitors, especially during cold
                weather testing. The downdraft exhaust system creates excellent smoke circulation, producing consistent
                results across the entire cooking surface. The porcelain-coated grates are easy to clean and show no
                signs of wear after months of use.
              </p>

              <div className="my-8 overflow-hidden rounded-lg">
                <img
                  src="/traeger-ironwood-interior-construction.jpg"
                  alt="Interior construction detail"
                  className="w-full"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold">Cooking Capacity and Versatility</h3>
              <p>
                The 650 square inches of cooking space easily accommodates six racks of ribs, four whole chickens, or
                multiple briskets. We regularly cooked for groups of 12-15 people without running out of space. The
                grill excels at low-and-slow smoking but also handles high-heat grilling surprisingly well, reaching
                500°F for searing steaks. The temperature range from 165°F to 500°F covers virtually any cooking method
                you might want to attempt.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Pellet Efficiency and Hopper Design</h3>
              <p>
                The 20-pound hopper capacity provides excellent runtime—we achieved 20+ hours of smoking at 225°F on a
                single fill. The pellet sensor alerts you when levels run low, preventing unexpected shutdowns during
                long cooks. Pellet consumption averages about 1-2 pounds per hour depending on temperature settings and
                weather conditions. The auger system feeds pellets consistently without jamming, even with different
                pellet brands.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Maintenance and Cleaning</h3>
              <p>
                Maintenance is straightforward thanks to the grease management system that channels drippings into a
                removable bucket. We found cleaning the grill after each use takes about 10 minutes—scraping the grates
                and emptying the grease bucket. Deep cleaning every 20-30 cooks involves vacuuming ash from the fire pot
                and wiping down the interior, which takes about 30 minutes.
              </p>

              <div className="my-8 overflow-hidden rounded-lg">
                <img src="/traeger-ironwood-grease-management.jpg" alt="Grease management system" className="w-full" />
              </div>

              <h3 className="mt-8 text-2xl font-bold">Value Proposition</h3>
              <p>
                The Ironwood 650 sits in the premium price range, but the features and build quality justify the
                investment for serious outdoor cooks. The WiFi connectivity, superior insulation, and consistent
                performance create a noticeably better experience than entry-level pellet grills. For those who grill
                frequently and value convenience alongside authentic wood-fired flavor, this grill delivers excellent
                long-term value.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Final Verdict</h3>
              <p>
                The Traeger Ironwood 650 earns our strong recommendation for anyone seeking a premium pellet grill
                experience. It combines the convenience of set-it-and-forget-it cooking with the authentic flavor of
                wood-fired grilling. The WiFi connectivity works flawlessly, the temperature control is precise, and the
                build quality inspires confidence in long-term durability. While the premium pricing may give some
                buyers pause, the superior performance and features make this grill worth the investment for dedicated
                outdoor cooks.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-border bg-muted p-8">
            <h3 className="mb-6 text-2xl font-bold">Related Products</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/products/traeger-pro-575" className="group">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/traeger-pellet-grill-black-outdoor.jpg"
                    alt="Traeger Pro 575"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h4 className="font-semibold group-hover:underline">Traeger Pro 575</h4>
                <p className="text-sm text-muted-foreground">Budget-friendly WiFi pellet grill</p>
              </a>
              <a href="/products/weber-smokefire-ex6" className="group">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/weber-smokefire-pellet-grill.jpg"
                    alt="Weber SmokeFire EX6"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h4 className="font-semibold group-hover:underline">Weber SmokeFire EX6</h4>
                <p className="text-sm text-muted-foreground">Premium pellet grill alternative</p>
              </a>
              <a href="/products/recteq-rt-700" className="group">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/recteq-pellet-grill-stainless-steel.jpg"
                    alt="recteq RT-700"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h4 className="font-semibold group-hover:underline">recteq RT-700</h4>
                <p className="text-sm text-muted-foreground">High-end WiFi pellet grill</p>
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
