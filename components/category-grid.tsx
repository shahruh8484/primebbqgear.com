import Link from "next/link"

export function CategoryGrid() {
  const categories = [
    {
      title: "The Best Gas Grills",
      image: "/weber-gas-grill-stainless-steel-three-burners.jpg",
      href: "/gas-grills",
    },
    {
      title: "The Best Pellet Grills",
      image: "/traeger-pellet-grill-smoker-black-outdoor.jpg",
      href: "/pellet-grills",
    },
    {
      title: "The Best Charcoal Grills",
      image: "/weber-kettle-charcoal-grill-black-classic.jpg",
      href: "/charcoal-grills",
    },
    {
      title: "The Best Grill Accessories",
      image: "/grill-accessories-tools.jpg",
      href: "/accessories",
    },
  ]

  return (
    <section id="essentials" className="border-t border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-t-4 border-foreground pt-4">
          <h2 className="text-2xl font-bold">Grilling essentials</h2>
        </div>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Everything you need to know about choosing and using the perfect grill
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="relative mb-3 aspect-[3/2] overflow-hidden bg-muted">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold group-hover:underline">{category.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
