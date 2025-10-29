import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl">Get Grilling Tips & Reviews</h2>
        <p className="mb-8 text-balance text-lg leading-relaxed opacity-90">
          Subscribe to our newsletter for expert BBQ tips, new grill reviews, and exclusive deals
        </p>
        <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
          />
          <Button type="submit" variant="secondary" className="font-semibold">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
