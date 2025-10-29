import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Check, X } from "lucide-react"
import Link from "next/link"

export default function WeberSpiritPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href="/gas-grills" className="hover:text-foreground">
                Gas Grills
              </Link>
              <span>/</span>
              <span className="text-foreground">Weber Spirit II E-310</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Gas Grills</div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Weber Spirit II E-310</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-foreground text-foreground" />
                    <span className="text-lg font-semibold">4.6</span>
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-sm text-muted-foreground">Tested by Sarah Chen</span>
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Budget-friendly gas grill that doesn't compromise on Weber quality. Perfect for smaller spaces and
                  everyday grilling.
                </p>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/weber-spirit-gas-grill-compact.jpg"
                  alt="Weber Spirit II E-310"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="mb-6 text-3xl font-bold">Why We Love It</h2>
                <p className="leading-relaxed text-muted-foreground">
                  The Weber Spirit II E-310 delivers Weber's legendary quality at a more accessible price point. With
                  three burners and 529 square inches of cooking space, it's perfect for families and everyday grilling.
                  The GS4 grilling system ensures reliable performance and easy maintenance.
                </p>
              </section>

              <section>
                <h2 className="mb-6 text-3xl font-bold">Pros and Cons</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-green-600">
                      <Check className="h-5 w-5" />
                      Pros
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Excellent value for Weber quality</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Compact size perfect for smaller spaces</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Reliable GS4 grilling system</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        <span>Easy to assemble and maintain</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-red-600">
                      <X className="h-5 w-5" />
                      Cons
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Smaller cooking area than Genesis models</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>No side burner included</span>
                      </li>
                      <li className="flex gap-2">
                        <X className="h-5 w-5 shrink-0 text-red-600" />
                        <span>Open cart design (no cabinet storage)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold">Specifications</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Burners</dt>
                    <dd className="font-medium">3 Stainless Steel</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">BTU Output</dt>
                    <dd className="font-medium">30,000 BTU</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt className="text-muted-foreground">Cooking Area</dt>
                    <dd className="font-medium">529 sq. in.</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Warranty</dt>
                    <dd className="font-medium">10 years</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
