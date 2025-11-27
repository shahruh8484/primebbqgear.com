import { Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const grills = [
  {
    id: 1,
    name: "Blackstone 2450AZ 28 Omnivore Griddle Bundle",
    category: "Gas Grills",
    image: "https://m.media-amazon.com/images/I/71QLgJ5R+IL._AC_SX679_.jpg",
    rating: 4.8,
    summary: "Perfect for camping, backyard cooking, or tailgating.",
    author: "Sarah Martinez",
    href: "/reviews/blackstone-2450az-28-omnivore-griddle-bundle",
    amazonUrl:
      "https://www.amazon.com/Blackstone-2450AZ-Omnivore-Griddle-Spatulas/dp/B0DGY312P1?th=1&linkCode=ll1&tag=urfnjust-20&linkId=61d76a0dd952d8ca773c32f9a33eff7d&language=en_US&ref_=as_li_ss_tl",
  },
  {
    id: 2,
    name: "PIT BOSS 10697 Table Top Wood Grill With Temperature Control",
    category: "Pellet Grills",
    image: "https://m.media-amazon.com/images/I/71EATm+utGL._AC_SX679_.jpg",
    rating: 4.5,
    summary: "Portable pellet grill combining wood-fired flavor with digital precision in a compact design.",
    author: "Michael Chang",
    href: "/reviews/pit-boss-10697-table-top",
    amazonUrl:
      "https://www.amazon.com/PIT-BOSS-10697-Pellet-Mahogany/dp/B08Y66479M?th=1&linkCode=ll1&tag=urfnjust-20&linkId=f578d661e6691fe6d210d4739d83e495&language=en_US&ref_=as_li_ss_tl",
  },
  {
    id: 3,
    name: "Weber Original Kettle 22-Inch Charcoal Grill",
    category: "Charcoal Grills",
    image: "https://m.media-amazon.com/images/I/71CYJCS4+qL._AC_SY879_.jpg",
    rating: 4.9,
    summary: "The classic charcoal grill that delivers authentic BBQ flavor.",
    author: "Patricia Lee",
    href: "/reviews/weber-original-kettle",
    amazonUrl:
      "https://www.amazon.com/Weber-741001-Original-22-Inch-Charcoal/dp/B00004RALU?th=1&linkCode=ll1&tag=urfnjust-20&linkId=59ecc280e11053630526161a4ca8d237&language=en_US&ref_=as_li_ss_tl",
  },
  {
    id: 4,
    name: "BIG HORN OUTDOORS 1500°F Small Infrared Propane Gas Grill",
    category: "Gas Grills",
    image: "https://m.media-amazon.com/images/I/81JStQrSSNL._AC_SX679_.jpg",
    rating: 4.6,
    summary: "Compact infrared powerhouse delivering steakhouse-quality searing in a portable package.",
    author: "Robert Kim",
    href: "/reviews/big-horn-outdoors-1500",
    amazonUrl:
      "https://www.amazon.com/BIG-HORN-OUTDOORS-Portable-Stainless/dp/B089Y1HXSF?th=1&linkCode=ll1&tag=urfnjust-20&linkId=ec11cb7eaa1220e2f43c59ec3e3ed0a3&language=en_US&ref_=as_li_ss_tl",
  },
]

export function FeaturedGrills() {
  return (
    <section id="top-picks" className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Our top picks</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The best grills we've tested across all categories
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {grills.map((grill) => (
            <article key={grill.id} className="group flex flex-col">
              <Link href={grill.href} className="block flex-1">
                <div className="relative mb-4 aspect-square overflow-hidden bg-muted">
                  <img
                    src={grill.image || "/placeholder.svg"}
                    alt={grill.name}
                    className="w-full h-48 object-contain transition-transform group-hover:scale-105 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {grill.category}
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:underline">{grill.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-foreground text-foreground" />
                      <span className="text-sm font-semibold">{grill.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{grill.summary}</p>
                  <p className="text-xs text-muted-foreground">by {grill.author}</p>
                </div>
              </Link>
              {grill.amazonUrl && (
                <div className="mt-4">
                  <Button size="sm" className="w-full bg-black hover:bg-gray-800 text-white font-semibold" asChild>
                    <a href={grill.amazonUrl} target="_blank" rel="noopener noreferrer">
                      View on Amazon
                    </a>
                  </Button>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/reviews">
            <Button size="lg" variant="outline" className="font-semibold bg-transparent">
              View all reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
