import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-balance">Jobs at PrimeBBQGear</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join our team of passionate grilling enthusiasts! We're always looking for talented individuals who share
              our commitment to helping people find the perfect BBQ equipment.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Senior Product Reviewer</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Posted 2 days ago</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    We're seeking an experienced product reviewer with a passion for outdoor cooking. You'll test
                    grills, write comprehensive reviews, and help shape our editorial direction. Ideal candidates have
                    3+ years of product review experience and deep knowledge of BBQ equipment.
                  </p>
                </div>
                <div>
                  <Button asChild>
                    <Link href="/contact?subject=Application: Senior Product Reviewer">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Content Writer - BBQ & Grilling</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Posted 1 week ago</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    Join our editorial team to create engaging content about grilling techniques, maintenance guides,
                    and buying advice. You'll research topics, interview experts, and produce high-quality articles that
                    help our readers become better grillers.
                  </p>
                </div>
                <div>
                  <Button asChild>
                    <Link href="/contact?subject=Application: Content Writer - BBQ & Grilling">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Video Producer</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Posted 2 weeks ago</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    Help us expand our video content with product demonstrations, cooking tutorials, and grill
                    comparisons. You'll shoot, edit, and produce engaging videos that showcase BBQ equipment in action.
                    Experience with YouTube content creation is a plus.
                  </p>
                </div>
                <div>
                  <Button asChild>
                    <Link href="/contact?subject=Application: Video Producer">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Competitive salary and comprehensive benefits package</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Flexible remote work options</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Professional development and training opportunities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Work with the latest grilling equipment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Collaborative team environment with passionate colleagues</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Generous PTO and holiday schedule</span>
              </li>
            </ul>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits? We're always interested in hearing from talented individuals.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact?subject=General Application">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
