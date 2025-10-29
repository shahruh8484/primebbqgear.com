import Link from "next/link"
import Image from "next/image"

const topics = [
  {
    title: "Barbeque Grill Accessories",
    description: "Essential tools and add-ons to enhance your grilling experience",
    href: "/accessories",
    image: "/oxo-good-grips-tongs.jpg",
  },
  {
    title: "Barbeque Grill Brush",
    description: "Keep your grill clean with our tested and recommended brushes",
    href: "/brushes",
    image: "/weber-3-sided-grill-brush.jpg",
  },
  {
    title: "Barbeque Grill Cover",
    description: "Protect your investment with weather-resistant covers",
    href: "/covers",
    image: "/weber-premium-grill-cover.jpg",
  },
  {
    title: "Barbeque Sauces",
    description: "The best sauces to complement your perfectly grilled meals",
    href: "/sauces",
    image: "/sweet-baby-rays-bbq-sauce-bottle.jpg",
  },
]

export function GrillTopics() {
  return (
    <section id="categories" className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-foreground pb-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Explore by Category</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="group block border border-border bg-card transition-colors hover:border-foreground"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                <Image
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-foreground group-hover:underline">{topic.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
