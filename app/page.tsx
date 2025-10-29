import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedGrills } from "@/components/featured-grills"
import { LatestArticles } from "@/components/latest-articles"
import { CategoryGrid } from "@/components/category-grid"
import { GrillTopics } from "@/components/grill-topics"
import { Footer } from "@/components/footer"
import { BBQGuideSections } from "@/components/bbq-guide-sections"
import { BBQNews } from "@/components/bbq-news"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="border-t border-border bg-muted/30 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm leading-relaxed text-muted-foreground">
            We independently review everything we recommend. When you buy through our links, we may earn a commission.
          </p>
        </div>
      </div>
      <BBQGuideSections />
      <GrillTopics />
      <CategoryGrid />
      <FeaturedGrills />
      <BBQNews />
      <LatestArticles />
      <Footer />
    </main>
  )
}
