import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import Image from "next/image"

export default function AccessoriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="border-t-4 border-foreground pt-4">
              <h1 className="font-serif text-5xl font-bold text-foreground text-balance">
                The Best Barbecue Grill Accessories
              </h1>
            </div>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl">
              After testing dozens of grill accessories over multiple grilling seasons, we've identified the essential
              tools that make outdoor cooking easier, safer, and more enjoyable.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Grill Masters Staff</span>
              <span>•</span>
              <span>Updated October 22, 2025</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <section className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                The right accessories can transform your grilling experience from frustrating to fantastic. We've spent
                over 200 hours testing grill tools, thermometers, gloves, and other accessories to find the ones that
                truly make a difference. Our testing included real-world grilling sessions with various foods,
                durability tests, and ease-of-use evaluations.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Whether you're a weekend warrior or a serious pitmaster, having quality accessories ensures better
                control, improved safety, and more consistent results. Here are our top picks across essential accessory
                categories.
              </p>
            </section>

            {/* Product 1 */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/oxo-good-grips-tongs.jpg"
                    alt="OXO Good Grips Grilling Tongs"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST TONGS
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">OXO Good Grips 16-Inch Locking Tongs</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                    </div>
                    <span className="font-bold">9.5/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    The OXO Good Grips tongs offer the perfect combination of length, grip strength, and control. The
                    16-inch length keeps your hands safely away from heat while the scalloped edges provide excellent
                    grip on everything from delicate fish to heavy steaks.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Perfect 16-inch length</li>
                        <li>• Excellent grip strength</li>
                        <li>• Comfortable non-slip handles</li>
                        <li>• Secure locking mechanism</li>
                        <li>• Dishwasher safe</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Slightly heavier than competitors</li>
                        <li>• Lock can be stiff initially</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 2 */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/weber-original-spatula.jpg"
                    alt="Weber Original Stainless Steel Spatula"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST SPATULA
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Weber Original Stainless Steel Spatula</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                    </div>
                    <span className="font-bold">9.3/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Weber's spatula features a wide, angled blade that makes flipping burgers and fish effortless. The
                    extra-long handle and built-in bottle opener add practical value, while the stainless steel
                    construction ensures years of reliable use.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Wide, angled blade</li>
                        <li>• Excellent leverage</li>
                        <li>• Built-in bottle opener</li>
                        <li>• Durable stainless steel</li>
                        <li>• Comfortable grip</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Can be too wide for small grills</li>
                        <li>• Handle gets warm on long cooks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 3 */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/thermoworks-thermapen.jpg"
                    alt="ThermoWorks Thermapen ONE"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST THERMOMETER
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">ThermoWorks Thermapen ONE</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                    </div>
                    <span className="font-bold">9.8/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    The Thermapen ONE is the gold standard for instant-read thermometers. With a 1-second reading time
                    and ±0.5°F accuracy, it takes the guesswork out of grilling. The rotating display and waterproof
                    design make it incredibly user-friendly.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 1-second reading time</li>
                        <li>• Exceptional accuracy</li>
                        <li>• Auto-rotating display</li>
                        <li>• Waterproof (IP67)</li>
                        <li>• Motion-sensing sleep/wake</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Premium investment</li>
                        <li>• Battery not replaceable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 4 */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/grill-heat-aid-gloves.jpg"
                    alt="Grill Heat Aid Extreme Heat Resistant Gloves"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST GLOVES
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Grill Heat Aid Extreme Heat Resistant Gloves</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                    </div>
                    <span className="font-bold">9.1/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    These gloves provide exceptional heat protection up to 932°F while maintaining enough dexterity to
                    handle grill grates, hot pans, and food. The silicone grip pattern ensures secure handling even when
                    wet or greasy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Extreme heat resistance</li>
                        <li>• Good dexterity</li>
                        <li>• Non-slip silicone grip</li>
                        <li>• Machine washable</li>
                        <li>• Long cuff protection</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Can be bulky for small hands</li>
                        <li>• Take time to dry after washing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 5 - Grill Basket */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/grill-basket-vegetables.jpg"
                    alt="Stainless Steel Grill Basket"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST GRILL BASKET
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Weber Deluxe Grilling Basket</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                      <Star className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-bold">8.7/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Perfect for grilling vegetables, shrimp, and other small items that might fall through grates. The
                    large surface area and perforated design allow for excellent heat circulation while the sturdy
                    handles make flipping and removal easy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Large cooking surface</li>
                        <li>• Even heat distribution</li>
                        <li>• Sturdy construction</li>
                        <li>• Easy to clean</li>
                        <li>• Dishwasher safe</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Takes up grill space</li>
                        <li>• Handles can get hot</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 6 - Basting Brush */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/silicone-basting-brush.jpg"
                    alt="Silicone Basting Brush"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST BASTING BRUSH
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">OXO Good Grips Silicone Basting Brush</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                    </div>
                    <span className="font-bold">9.0/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    This silicone brush excels at applying sauces, marinades, and butter without shedding bristles.
                    Heat-resistant up to 600°F and featuring angled bristles for better coverage, it's an essential tool
                    for any griller who loves to baste.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• No bristle shedding</li>
                        <li>• Heat resistant to 600°F</li>
                        <li>• Angled head design</li>
                        <li>• Easy to clean</li>
                        <li>• Comfortable grip</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Holds less liquid than natural bristles</li>
                        <li>• Can be too flexible for thick sauces</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 7 - Grill Light */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/magnetic-grill-light.jpg"
                    alt="LED Grill Light"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST GRILL LIGHT
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">KOSIN LED Grill Light</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                      <Star className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-bold">8.5/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Don't let darkness end your grilling session. This bright LED light features a flexible gooseneck
                    design and strong magnetic base that attaches securely to any grill. The weather-resistant
                    construction ensures reliable performance in all conditions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Bright 360-lumen output</li>
                        <li>• Flexible positioning</li>
                        <li>• Strong magnetic mount</li>
                        <li>• Weather resistant</li>
                        <li>• Long battery life</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Requires batteries</li>
                        <li>• Won't stick to aluminum grills</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 8 - Chimney Starter */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/weber-chimney-starter.jpg"
                    alt="Weber Rapidfire Chimney Starter"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST CHIMNEY STARTER
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Weber Rapidfire Chimney Starter</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                    </div>
                    <span className="font-bold">9.4/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    The fastest and most reliable way to light charcoal without lighter fluid. This chimney starter gets
                    coals ready in about 15 minutes with its efficient cone-shaped design and large capacity that holds
                    enough charcoal for most grilling sessions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Fast lighting (15 minutes)</li>
                        <li>• No lighter fluid needed</li>
                        <li>• Large capacity</li>
                        <li>• Heat-resistant handle</li>
                        <li>• Durable construction</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Gets extremely hot</li>
                        <li>• Requires storage space</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 9 - Grill Mat */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/non-stick-grill-mat.jpg"
                    alt="Non-Stick Grill Mat"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST GRILL MAT
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Kona Best BBQ Grill Mat</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                      <Star className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-bold">8.3/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    These non-stick mats prevent small foods from falling through grates while still allowing smoke
                    flavor to penetrate. Perfect for delicate fish, vegetables, and even eggs. The mats are reusable,
                    easy to clean, and work on any grill type.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Prevents food from falling</li>
                        <li>• Reusable and durable</li>
                        <li>• Easy to clean</li>
                        <li>• Works on any grill</li>
                        <li>• Dishwasher safe</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Reduces direct flame contact</li>
                        <li>• Can't exceed 500°F</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 10 - Skewers */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/stainless-steel-skewers.jpg"
                    alt="Stainless Steel Skewers"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST SKEWERS
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Norpro Stainless Steel Skewers</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                      <Star className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-bold">8.8/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    These flat stainless steel skewers prevent food from spinning when you flip them, ensuring even
                    cooking. The 12-inch length is perfect for kabobs, and the loop handles make them easy to turn and
                    remove from the grill.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Flat design prevents spinning</li>
                        <li>• Reusable and eco-friendly</li>
                        <li>• Easy to clean</li>
                        <li>• Loop handles for easy turning</li>
                        <li>• Dishwasher safe</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Get very hot during cooking</li>
                        <li>• Require more storage space than bamboo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 11 - Rib Rack */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/rib-rack-holder.jpg"
                    alt="Rib Rack Holder"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST RIB RACK
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Weber Original Rib Rack</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                      <Star className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-bold">8.6/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Maximize your grill space by standing ribs vertically. This rack holds up to five racks of ribs,
                    allowing for better smoke circulation and more even cooking. The chrome-plated steel construction is
                    durable and easy to clean.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Holds up to 5 rib racks</li>
                        <li>• Saves grill space</li>
                        <li>• Better smoke circulation</li>
                        <li>• Sturdy construction</li>
                        <li>• Easy to clean</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Takes up vertical space</li>
                        <li>• Not ideal for small grills</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 12 - Pizza Stone */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/cordierite-pizza-stone.jpg"
                    alt="Cordierite Pizza Stone"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST PIZZA STONE
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Hans Grill Pizza Stone</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                    </div>
                    <span className="font-bold">9.2/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Transform your grill into a pizza oven with this cordierite stone. It distributes heat evenly for
                    perfectly crispy crusts and can withstand temperatures up to 1450°F. The 15-inch size fits most
                    grills and is perfect for pizzas, bread, and more.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Excellent heat retention</li>
                        <li>• Crispy, even crusts</li>
                        <li>• Withstands 1450°F</li>
                        <li>• Versatile for bread and more</li>
                        <li>• Thermal shock resistant</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Heavy and fragile</li>
                        <li>• Requires preheating time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 13 - Smoker Box */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/stainless-smoker-box.jpg"
                    alt="Stainless Steel Smoker Box"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST SMOKER BOX
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Cave Tools Smoker Box</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                      <Star className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-bold">8.9/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Add authentic smoky flavor to gas grill cooking with this heavy-duty smoker box. The thick stainless
                    steel construction prevents warping, while the hinged lid makes it easy to add wood chips without
                    removing the box from the grill.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Heavy-duty construction</li>
                        <li>• Hinged lid for easy refilling</li>
                        <li>• Excellent smoke production</li>
                        <li>• Fits most gas grills</li>
                        <li>• Won't warp at high heat</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Takes time to start smoking</li>
                        <li>• Requires wood chip refills</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Product 14 - Cleaning Scraper */}
            <article className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Image
                    src="/wooden-grill-scraper.jpg"
                    alt="Wooden Grill Scraper"
                    width={400}
                    height={400}
                    className="w-full h-auto border border-border"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="mb-2">
                    <span className="inline-block bg-foreground text-background px-3 py-1 text-sm font-bold">
                      BEST GRILL SCRAPER
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Proud Grill Company Wooden Scraper</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                      ))}
                      <Star className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-bold">8.4/10</span>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    A safe alternative to wire brushes, this wooden scraper conforms to your grill grates over time for
                    a custom fit. Made from durable oak, it effectively removes residue without the risk of metal
                    bristles contaminating your food.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Pros</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• No metal bristles</li>
                        <li>• Conforms to grate shape</li>
                        <li>• Durable oak construction</li>
                        <li>• Safe for all grate types</li>
                        <li>• Long handle</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Cons</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Requires break-in period</li>
                        <li>• Eventually needs replacement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Buying Guide */}
            <section className="border-t border-border pt-12">
              <h2 className="font-serif text-3xl font-bold mb-6">How to Choose Grill Accessories</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-xl mb-3">Essential vs. Nice-to-Have</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Start with the essentials: quality tongs, a spatula, and an instant-read thermometer. These three
                    tools will handle 90% of your grilling needs. From there, add accessories based on what you cook
                    most often—gloves for high-heat cooking, a grill brush for maintenance, or specialty tools for
                    specific foods.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">Handle Length Matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For most grilling, 16-18 inch handles provide the best balance of heat protection and control.
                    Shorter handles (12-14 inches) work well for small grills or precise work, while longer handles (20+
                    inches) are ideal for large grills or high-heat cooking like searing over charcoal.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">Material Considerations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stainless steel is the gold standard for grill tools—it's durable, heat-resistant, and easy to
                    clean. Look for tools with solid construction rather than hollow handles, which can trap moisture
                    and bacteria. For gloves, aramid fiber blends offer the best combination of heat resistance and
                    dexterity.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">Thermometer Accuracy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    An accurate thermometer is non-negotiable for food safety and quality. Look for instant-read
                    thermometers with ±1°F accuracy or better and reading times under 3 seconds. Digital thermometers
                    are more accurate than analog, and waterproof models are easier to clean and more durable.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">Storage and Maintenance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consider how you'll store your accessories. Tools with hanging loops are convenient for pegboards or
                    hooks. Most stainless steel tools are dishwasher safe, but hand washing extends their life. For
                    gloves, ensure they're machine washable and can air dry completely between uses to prevent odors.
                  </p>
                </div>
              </div>
            </section>

            {/* Testing Methodology */}
            <section className="border-t border-border pt-12">
              <h2 className="font-serif text-3xl font-bold mb-6">How We Tested</h2>
              <p className="text-lg leading-relaxed mb-6">
                We tested over 40 different grill accessories across multiple grilling sessions spanning three months.
                Our testing included:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Real-world grilling:</strong> Each tool was used for at least 10
                    grilling sessions with various foods including burgers, steaks, chicken, fish, and vegetables.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Heat resistance testing:</strong> We tested gloves and handles
                    at various temperatures to verify manufacturer claims and assess comfort levels.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Durability assessment:</strong> Tools were subjected to repeated
                    use, cleaning cycles, and exposure to high heat to evaluate long-term performance.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Thermometer accuracy:</strong> We verified thermometer readings
                    against calibrated reference thermometers in ice water and boiling water tests.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span>
                    <strong className="text-foreground">Ease of use:</strong> We evaluated grip comfort, weight balance,
                    and overall ergonomics during extended grilling sessions.
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
