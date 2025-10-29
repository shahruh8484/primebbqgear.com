import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Image from "next/image"

export function BBQNews() {
  const newsItems = [
    {
      image: "/bbq-news-pellet-grills.jpg",
      badge: "Industry News",
      title: "Pellet Grill Sales Surge 45% in 2024",
      description:
        "After analyzing market trends and consumer behavior, we've discovered that smart temperature control and WiFi connectivity are driving unprecedented interest in premium pellet grills. The convenience of app-based monitoring has transformed how people approach outdoor cooking.",
      date: "October 15, 2025",
    },
    {
      image: "/bbq-news-weber-genesis.jpg",
      badge: "Awards",
      title: "Weber Genesis Wins Best Gas Grill 2025",
      description:
        "After extensive testing across dozens of models over hundreds of hours, the Weber Genesis II E-335 takes top honors for reliability and performance. Our rigorous evaluation process examined heat distribution, build quality, and long-term durability to crown this year's champion.",
      date: "October 10, 2025",
    },
    {
      image: "/bbq-news-kamado-grills.jpg",
      badge: "Trends",
      title: "Kamado-Style Grills Gain Popularity",
      description:
        "Ceramic grills are experiencing a renaissance with a 30% increase in sales as backyard chefs discover their superior heat retention and incredible versatility. From low-and-slow smoking to high-heat searing, these ancient-style cookers are proving their worth in modern backyards.",
      date: "October 5, 2025",
    },
    {
      image: "/bbq-news-smart-technology.jpg",
      badge: "Market Update",
      title: "Smart Grill Technology Advances",
      description:
        "The latest generation of AI-powered temperature sensors and automated cooking systems promise perfect results every time. These intelligent systems learn from each cook and make real-time adjustments to ensure your food comes out exactly as intended, taking the guesswork out of grilling.",
      date: "October 18, 2025",
    },
    {
      image: "/bbq-news-budget-grills.jpg",
      badge: "Testing Results",
      title: "Best Budget Grills Under $500 Revealed",
      description:
        "Our comprehensive testing program has identified top performers that deliver premium features without the premium price tag. We've found several models that punch well above their weight class, offering excellent value for money without compromising on essential features or build quality.",
      date: "October 20, 2025",
    },
    {
      image: "/bbq-news-spring-grilling.jpg",
      badge: "BBQ Season",
      title: "Early Spring Grilling Tips Released",
      description:
        "As grilling season approaches, our experts share essential advice on preparing your grill for peak performance. From deep cleaning and maintenance to mastering low-temperature smoking techniques, we cover everything you need to know to start the season strong.",
      date: "October 15, 2025",
    },
  ]

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Latest BBQ News & Updates</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Stay informed with the latest trends, product releases, and industry insights from the world of grilling
          </p>
        </div>

        <div className="space-y-12">
          {newsItems.map((item, index) => (
            <article key={index} className="flex flex-col gap-6 md:flex-row md:gap-8">
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-auto md:w-2/5">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col justify-center md:w-3/5">
                <Badge variant="secondary" className="mb-3 w-fit text-xs">
                  {item.badge}
                </Badge>

                <h3 className="mb-3 text-balance text-2xl font-bold leading-tight sm:text-3xl">{item.title}</h3>

                <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">{item.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time>Updated {item.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
