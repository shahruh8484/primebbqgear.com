import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import Image from "next/image"

export default function SaucesPage() {
  const sauces = [
    {
      name: "Sweet Baby Ray's Original",
      rating: 4.5,
      image: "/sweet-baby-rays-bbq-sauce-bottle.jpg",
      description: "A classic sweet and tangy sauce that works well with all types of meat.",
      pros: ["Widely available", "Great value", "Balanced sweetness"],
      cons: ["High sugar content", "Not very spicy"],
    },
    {
      name: "Stubb's Original Bar-B-Q Sauce",
      rating: 4.8,
      image: "/stubbs-bbq-sauce-bottle.jpg",
      description: "A tomato-based sauce with a perfect balance of sweet, tangy, and smoky flavors.",
      pros: ["Natural ingredients", "Authentic Texas flavor", "Versatile"],
      cons: ["Slightly thinner consistency", "Can be hard to find"],
    },
    {
      name: "Blues Hog Original BBQ Sauce",
      rating: 4.7,
      image: "/blues-hog-bbq-sauce-bottle.jpg",
      description: "Competition-grade sauce with a rich, complex flavor profile.",
      pros: ["Premium quality", "Award-winning", "Great for finishing"],
      cons: ["Very sweet"],
    },
    {
      name: "Lillie's Q Smoky BBQ Sauce",
      rating: 4.6,
      image: "/lillies-q-bbq-sauce-bottle.jpg",
      description: "A Carolina-style sauce with a distinctive smoky flavor.",
      pros: ["Unique flavor", "Not too sweet", "Quality ingredients"],
      cons: ["Strong smoke flavor may not suit everyone"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 border-b border-border pb-8">
          <h1 className="mb-4 font-serif text-5xl font-bold text-foreground">The Best Barbecue Sauces</h1>
          <p className="text-xl text-muted-foreground">
            After testing over 30 barbecue sauces, we've found the best options for every taste preference and grilling
            style.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span>By BBQ Experts</span>
            <span>•</span>
            <span>Updated October 20, 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold">Why You Should Trust Us</h2>
              <p>
                We spent over 100 hours researching and testing barbecue sauces, consulting with pitmasters, competition
                BBQ teams, and sauce manufacturers. Our testing panel included BBQ enthusiasts and professional chefs
                who evaluated each sauce on flavor, consistency, versatility, and value.
              </p>
              <p>
                We tested each sauce in multiple applications: as a marinade, basting sauce, and finishing sauce on
                ribs, chicken, pulled pork, and brisket. We also considered how well each sauce caramelizes without
                burning and how it complements different types of meat.
              </p>

              <h2 className="mt-8 font-serif text-3xl font-bold">What We Looked For</h2>
              <ul>
                <li>
                  <strong>Flavor Balance:</strong> The right mix of sweet, tangy, smoky, and spicy elements
                </li>
                <li>
                  <strong>Consistency:</strong> Thick enough to cling to meat but not gloppy
                </li>
                <li>
                  <strong>Versatility:</strong> Works well with multiple types of meat and cooking methods
                </li>
                <li>
                  <strong>Ingredients:</strong> Quality components without excessive additives
                </li>
              </ul>

              <h2 className="mt-8 font-serif text-3xl font-bold">Regional Sauce Styles</h2>
              <p>
                Barbecue sauce varies dramatically by region. Kansas City-style sauces are thick, sweet, and
                tomato-based. Carolina sauces are vinegar-based and tangy. Texas sauces tend to be thinner with more
                spice. Memphis-style sauces are tomato-based but less sweet than Kansas City.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-border bg-muted/30 p-6">
              <h3 className="mb-4 font-serif text-xl font-bold">Quick Guide</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="mb-2 font-semibold">Best Overall</h4>
                  <p className="text-muted-foreground">Stubb's Original Bar-B-Q Sauce</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Best Value</h4>
                  <p className="text-muted-foreground">Sweet Baby Ray's Original</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Best Premium</h4>
                  <p className="text-muted-foreground">Blues Hog Original</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Best for Smoke Lovers</h4>
                  <p className="text-muted-foreground">Lillie's Q Smoky</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sauce Reviews */}
        <div className="mb-12">
          <h2 className="mb-8 font-serif text-3xl font-bold">Our Top Picks</h2>
          <div className="space-y-12">
            {sauces.map((sauce, index) => (
              <div key={index} className="grid gap-8 border-b border-border pb-12 last:border-0 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted">
                    <Image src={sauce.image || "/placeholder.svg"} alt={sauce.name} fill className="object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h3 className="mb-2 font-serif text-2xl font-bold">{sauce.name}</h3>
                    <div className="mb-2 flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(sauce.rating) ? "fill-foreground text-foreground" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-semibold">{sauce.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-muted-foreground">{sauce.description}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-semibold text-green-700">Pros</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {sauce.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-red-700">Cons</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {sauce.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buying Guide */}
        <div className="rounded-lg border border-border bg-muted/30 p-8">
          <h2 className="mb-6 font-serif text-3xl font-bold">How to Choose the Right BBQ Sauce</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Consider what type of meat you'll be grilling most often. Sweeter sauces work well with pork and chicken,
              while beef benefits from sauces with more savory and spicy notes. If you're cooking at high heat, choose a
              sauce with less sugar to prevent burning.
            </p>
            <p>
              Think about when you'll apply the sauce. Thinner sauces work better as marinades and mops during cooking,
              while thicker sauces are ideal for finishing. Many pitmasters use multiple sauces throughout the cooking
              process.
            </p>
            <p>
              Don't be afraid to customize. Even the best store-bought sauces can be enhanced with additional spices,
              hot sauce, honey, or apple cider vinegar to suit your personal taste.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
