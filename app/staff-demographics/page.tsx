import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function StaffDemographicsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-balance">Staff Demographics</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PrimeBBQGear, we believe diversity strengthens our team and enriches our content. We're committed to
              building an inclusive workplace that reflects the diverse community of grill enthusiasts we serve.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Team Composition</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-3">Gender Distribution</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Women</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "45%" }} />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm">Men</span>
                      <span className="text-sm font-medium">52%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "52%" }} />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm">Non-binary</span>
                      <span className="text-sm font-medium">3%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "3%" }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Age Distribution</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">25-34</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "35%" }} />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm">35-44</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "40%" }} />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm">45-54</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "20%" }} />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm">55+</span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "5%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Diversity & Inclusion Commitment</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  We're committed to fostering an inclusive environment where all team members feel valued and empowered
                  to contribute their unique perspectives.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Equal opportunity employer with fair hiring practices</li>
                  <li>Ongoing diversity and inclusion training for all staff</li>
                  <li>Employee resource groups supporting underrepresented communities</li>
                  <li>Regular review of compensation to ensure pay equity</li>
                  <li>Flexible work arrangements to support work-life balance</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Our Progress</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  We track our diversity metrics annually and are committed to continuous improvement. While we're proud
                  of our progress, we recognize there's always more work to be done to build a truly inclusive
                  workplace.
                </p>
                <p className="text-muted-foreground">Last updated: January 2025</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
