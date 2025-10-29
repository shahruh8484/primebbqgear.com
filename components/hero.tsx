export function Hero() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <img
              src="/barbecue-grill-with-flames-and-smoke-outdoor-cooki.jpg"
              alt="Featured grill review"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              The Best Barbecue Grills for 2025
            </h1>
            <p className="mb-2 text-sm text-muted-foreground">by PrimeBBQGear Staff</p>
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              After testing dozens of grills over hundreds of hours, we've found the best options for every budget and
              cooking style. Whether you prefer gas, charcoal, or pellet, we'll help you find the perfect grill.
            </p>
            <p className="text-sm text-muted-foreground">Updated October 22, 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
