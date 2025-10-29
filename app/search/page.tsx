"use client"

import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Suspense } from "react"

// Search data for all products and pages
const searchableContent = [
  // Grills
  {
    title: "Weber Spirit II E-310",
    category: "Gas Grills",
    url: "/",
    type: "product",
    description: "Our top pick for gas grills with excellent heat distribution",
  },
  {
    title: "Traeger Pro 575",
    category: "Pellet Grills",
    url: "/",
    type: "product",
    description: "Best pellet grill for consistent smoking results",
  },
  {
    title: "Weber Original Kettle",
    category: "Charcoal Grills",
    url: "/",
    type: "product",
    description: "Classic charcoal grill with timeless design",
  },

  // Sauces
  {
    title: "Sweet Baby Ray's Original",
    category: "BBQ Sauces",
    url: "/sauces",
    type: "product",
    description: "Best overall BBQ sauce with perfect balance",
  },
  {
    title: "Stubb's Original Bar-B-Q Sauce",
    category: "BBQ Sauces",
    url: "/sauces",
    type: "product",
    description: "Best for Texas-style BBQ",
  },
  {
    title: "Blues Hog Original",
    category: "BBQ Sauces",
    url: "/sauces",
    type: "product",
    description: "Competition-grade sauce",
  },
  {
    title: "Lillie's Q Smoky",
    category: "BBQ Sauces",
    url: "/sauces",
    type: "product",
    description: "Best smoky flavor profile",
  },

  // Covers
  {
    title: "Weber Premium Grill Cover",
    category: "Grill Covers",
    url: "/covers",
    type: "product",
    description: "Best overall grill cover with superior weather protection",
  },
  {
    title: "Classic Accessories Veranda",
    category: "Grill Covers",
    url: "/covers",
    type: "product",
    description: "Best budget grill cover",
  },
  {
    title: "KingKong Grill Cover",
    category: "Grill Covers",
    url: "/covers",
    type: "product",
    description: "Most durable heavy-duty cover",
  },
  {
    title: "Covermates Elite",
    category: "Grill Covers",
    url: "/covers",
    type: "product",
    description: "Best for large grills",
  },

  // Brushes
  {
    title: "Weber 3-Sided Grill Brush",
    category: "Grill Brushes",
    url: "/brushes",
    type: "product",
    description: "Best overall grill brush",
  },
  {
    title: "Grill Rescue Brush",
    category: "Grill Brushes",
    url: "/brushes",
    type: "product",
    description: "Best bristle-free option",
  },
  {
    title: "Kona Safe Clean Brush",
    category: "Grill Brushes",
    url: "/brushes",
    type: "product",
    description: "Best for porcelain grates",
  },
  {
    title: "Char-Broil Cool-Clean Brush",
    category: "Grill Brushes",
    url: "/brushes",
    type: "product",
    description: "Best steam cleaning brush",
  },

  // Accessories
  {
    title: "OXO Good Grips Tongs",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best grill tongs with comfortable grip",
  },
  {
    title: "Weber Original Spatula",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best grill spatula",
  },
  {
    title: "ThermoWorks Thermapen",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best instant-read thermometer",
  },
  {
    title: "Grill Heat Aid Gloves",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best heat-resistant gloves",
  },
  {
    title: "Grill Basket",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best for grilling vegetables",
  },
  {
    title: "Silicone Basting Brush",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best basting brush",
  },
  {
    title: "Magnetic Grill Light",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best grill light for night cooking",
  },
  {
    title: "Weber Chimney Starter",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best charcoal starter",
  },
  {
    title: "Kona Grill Mat",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best non-stick grill mat",
  },
  {
    title: "Stainless Steel Skewers",
    category: "Grill Accessories",
    url: "/accessories",
    type: "product",
    description: "Best reusable skewers",
  },

  // Pages
  {
    title: "About Us",
    category: "Information",
    url: "/about",
    type: "page",
    description: "Learn about our testing process and team",
  },
  {
    title: "Contact Us",
    category: "Information",
    url: "/contact",
    type: "page",
    description: "Get in touch with our team",
  },
  {
    title: "Disclaimer",
    category: "Information",
    url: "/disclaimer",
    type: "page",
    description: "Affiliate disclosure and testing standards",
  },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  // Filter results based on search query
  const results = query.trim()
    ? searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Search Results</h1>
            {query && (
              <p className="text-lg text-muted-foreground">
                {results.length} {results.length === 1 ? "result" : "results"} for "{query}"
              </p>
            )}
          </div>

          {!query.trim() ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Enter a search term to find products and articles</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No results found for "{query}"</p>
              <p className="text-sm text-muted-foreground mt-2">
                Try searching for grills, accessories, sauces, or covers
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  className="block border border-border p-6 hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wide">
                        {result.category}
                      </div>
                      <h2 className="text-xl font-bold mb-2 hover:underline">{result.title}</h2>
                      <p className="text-muted-foreground">{result.description}</p>
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{result.type}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <p className="text-center text-muted-foreground">Loading search results...</p>
            </div>
          </main>
          <Footer />
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  )
}
