import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Users, Wallet, Wrench } from "lucide-react"

const guides = [
  {
    icon: Thermometer,
    title: "Cooking Style",
    description: "Consider whether you prefer quick grilling, low-and-slow smoking, or versatile cooking options",
  },
  {
    icon: Users,
    title: "Cooking Capacity",
    description: "Choose a grill size based on how many people you typically cook for and available space",
  },
  {
    icon: Wallet,
    title: "Budget Planning",
    description: "Factor in initial cost, fuel expenses, and maintenance when setting your budget",
  },
  {
    icon: Wrench,
    title: "Maintenance Needs",
    description: "Different grill types require varying levels of cleaning and upkeep commitment",
  },
]

export function BuyingGuide() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Buying Guide</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Key factors to consider when choosing your perfect barbecue grill
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <Card key={index} className="text-center transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{guide.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
