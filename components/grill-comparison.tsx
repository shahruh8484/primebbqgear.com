import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Temperature Range",
    gas: "200-600°F",
    pellet: "180-500°F",
    charcoal: "200-700°F",
    ceramic: "200-750°F",
  },
  {
    feature: "Heat Up Time",
    gas: "10-15 min",
    pellet: "15-20 min",
    charcoal: "20-30 min",
    ceramic: "15-20 min",
  },
  {
    feature: "Fuel Cost",
    gas: "Low",
    pellet: "Medium",
    charcoal: "Low",
    ceramic: "Low",
  },
  {
    feature: "Smoke Flavor",
    gas: false,
    pellet: true,
    charcoal: true,
    ceramic: true,
  },
  {
    feature: "Easy Cleanup",
    gas: true,
    pellet: false,
    charcoal: false,
    ceramic: false,
  },
  {
    feature: "Weather Resistant",
    gas: true,
    pellet: false,
    charcoal: true,
    ceramic: true,
  },
]

export function GrillComparison() {
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Grill Type Comparison
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Compare different grill types to find the perfect match for your cooking style
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="sr-only">Comparison Table</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-4 text-left font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-4 text-center">
                    <Badge variant="secondary" className="whitespace-nowrap">
                      Gas Grill
                    </Badge>
                  </th>
                  <th className="px-4 py-4 text-center">
                    <Badge variant="secondary" className="whitespace-nowrap">
                      Pellet Grill
                    </Badge>
                  </th>
                  <th className="px-4 py-4 text-center">
                    <Badge variant="secondary" className="whitespace-nowrap">
                      Charcoal Grill
                    </Badge>
                  </th>
                  <th className="px-4 py-4 text-center">
                    <Badge variant="secondary" className="whitespace-nowrap">
                      Ceramic Grill
                    </Badge>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="px-4 py-4 font-medium text-foreground">{row.feature}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">
                      {typeof row.gas === "boolean" ? (
                        row.gas ? (
                          <Check className="mx-auto h-5 w-5 text-accent" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                        )
                      ) : (
                        row.gas
                      )}
                    </td>
                    <td className="px-4 py-4 text-center text-muted-foreground">
                      {typeof row.pellet === "boolean" ? (
                        row.pellet ? (
                          <Check className="mx-auto h-5 w-5 text-accent" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                        )
                      ) : (
                        row.pellet
                      )}
                    </td>
                    <td className="px-4 py-4 text-center text-muted-foreground">
                      {typeof row.charcoal === "boolean" ? (
                        row.charcoal ? (
                          <Check className="mx-auto h-5 w-5 text-accent" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                        )
                      ) : (
                        row.charcoal
                      )}
                    </td>
                    <td className="px-4 py-4 text-center text-muted-foreground">
                      {typeof row.ceramic === "boolean" ? (
                        row.ceramic ? (
                          <Check className="mx-auto h-5 w-5 text-accent" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                        )
                      ) : (
                        row.ceramic
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
