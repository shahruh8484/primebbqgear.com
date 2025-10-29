import { Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const grills = [
  {
    id: 1,
    name: "Weber Genesis II E-335",
    category: "Gas Grills",
    image: "/weber-gas-grill-stainless-steel-three-burners.jpg",
    rating: 4.8,
    summary: "Our favorite gas grill delivers consistent heat and exceptional build quality.",
    author: "Alice Thompson",
    href: "/products/weber-genesis-ii-e-335",
  },
  {
    id: 2,
    name: "Traeger Pro 575",
    category: "Pellet Grills",
    image: "/traeger-pellet-grill-smoker-black-outdoor.jpg",
    rating: 4.7,
    summary: "WiFi-enabled pellet grill perfect for low and slow cooking with consistent results.",
    author: "Jordan Martinez",
    href: "/products/traeger-pro-575",
  },
  {
    id: 3,
    name: "Kamado Joe Classic III",
    category: "Ceramic Grills",
    image: "/kamado-joe-ceramic-grill-red-outdoor-cooking.jpg",
    rating: 4.9,
    summary: "Premium ceramic grill that excels at grilling, smoking, and even baking pizza.",
    author: "Casey Woo",
    href: "/products/kamado-joe-classic-iii",
  },
  {
    id: 4,
    name: "Weber Original Kettle",
    category: "Charcoal Grills",
    image: "/weber-kettle-charcoal-grill-black-classic.jpg",
    rating: 4.6,
    summary: "The classic charcoal grill that delivers authentic BBQ flavor.",
    author: "Melanie Chow",
    href: "/products/weber-original-kettle",
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
            <article key={grill.id} className="group">
              <Link href={grill.href} className="block">
                <div className="relative mb-4 aspect-square overflow-hidden bg-muted">
                  <img
                    src={grill.image || "/placeholder.svg"}
                    alt={grill.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
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
