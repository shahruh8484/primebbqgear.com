export function LatestArticles() {
  const articles = [
    {
      title: "What's Wrong With Your Grill?",
      date: "October 12",
      image: "/broken-grill-repair.jpg",
      slug: "whats-wrong-with-your-grill", // added slug for routing
    },
    {
      title: "How to Clean Your Grill Like a Pro",
      date: "October 15",
      image: "/cleaning-grill.jpg",
      slug: "how-to-clean-your-grill-like-a-pro", // added slug for routing
    },
    {
      title: "The Best Grilling Recipes for Summer",
      date: "October 18",
      image: "/grilled-food-recipes.jpg",
      slug: "best-grilling-recipes-for-summer", // added slug for routing
    },
  ]

  const deals = [
    {
      name: "Weber Spirit II E-310",
      image: "/weber-gas-grill-stainless-steel-three-burners.jpg",
      link: "/products/weber-spirit-ii-e-310",
    },
    {
      name: "Traeger Ironwood 650",
      image: "/traeger-ironwood-650-outdoor-patio.jpg",
      link: "/products/traeger-ironwood-650",
    },
  ]

  return (
    <section className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="mb-6 border-t-4 border-foreground pt-4">
              <h2 className="text-xl font-bold">The latest</h2>
            </div>
            <div className="space-y-6">
              {articles.map((article, index) => (
                <article key={index}>
                  <a href={`/articles/${article.slug}`} className="group">
                    <h3 className="mb-1 font-bold leading-tight group-hover:underline">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <a href="/articles/how-to-choose-perfect-grill" className="group block">
              <div className="relative aspect-[16/9] overflow-hidden bg-muted mb-6">
                <img
                  src="/barbecue-grill-with-flames-and-smoke-outdoor-cooki.jpg"
                  alt="Featured article"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h2 className="mb-4 text-4xl font-bold leading-tight group-hover:underline">
                How to Choose the Perfect Grill for Your Backyard
              </h2>
              <p className="mb-2 text-sm text-muted-foreground">by PrimeBBQGear Staff</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                From size and fuel type to features and budget, we break down everything you need to consider when
                buying a new grill. Our comprehensive guide helps you make the right choice.
              </p>
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 border-t-4 border-foreground pt-4">
              <h2 className="text-xl font-bold">Daily deals</h2>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">Featured grills we already love</p>
            <div className="space-y-6">
              {deals.map((deal, index) => (
                <article key={index}>
                  <a href={deal.link} className="group block">
                    <div className="relative mb-3 aspect-square overflow-hidden bg-muted">
                      <img
                        src={deal.image || "/placeholder.svg"}
                        alt={deal.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 font-bold leading-tight group-hover:underline">{deal.name}</h3>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
