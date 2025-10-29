import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-balance">Our Team</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PrimeBBQGear, we're a passionate team of grilling enthusiasts, product testers, and content creators
              dedicated to helping you find the perfect BBQ equipment for your outdoor cooking adventures.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-b pb-12">
              <h2 className="text-2xl font-bold mb-6">Editorial Team</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-member-editor.jpg"
                      alt="Alice Thompson - Editor in Chief"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Alice Thompson</h3>
                    <p className="text-sm text-muted-foreground mb-2">Editor in Chief</p>
                    <p className="text-sm leading-relaxed">
                      With over 15 years of experience in outdoor cooking and product journalism, Alice leads our
                      editorial team with a commitment to honest, thorough reviews.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-member-writer.jpg"
                      alt="Jordan Martinez - Senior Writer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Jordan Martinez</h3>
                    <p className="text-sm text-muted-foreground mb-2">Senior Writer</p>
                    <p className="text-sm leading-relaxed">
                      Jordan brings culinary background and technical expertise to every review, ensuring our content is
                      both informative and practical for home grillers.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-sarah-chen.jpg"
                      alt="Casey Woo - Content Writer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Casey Woo</h3>
                    <p className="text-sm text-muted-foreground mb-2">Content Writer</p>
                    <p className="text-sm leading-relaxed">
                      Casey specializes in creating detailed buying guides and maintenance articles, helping readers get
                      the most out of their grilling equipment.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-jennifer-park.jpg"
                      alt="Melanie Chow - Associate Editor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Melanie Chow</h3>
                    <p className="text-sm text-muted-foreground mb-2">Associate Editor</p>
                    <p className="text-sm leading-relaxed">
                      Melanie focuses on recipe development and grilling techniques, bringing creative cooking ideas to
                      our content library.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b pb-12">
              <h2 className="text-2xl font-bold mb-6">Testing Team</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-member-tester.jpg"
                      alt="Monica Anderson - Lead Product Tester"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Monica Anderson</h3>
                    <p className="text-sm text-muted-foreground mb-2">Lead Product Tester</p>
                    <p className="text-sm leading-relaxed">
                      Monica oversees our rigorous testing protocols, ensuring every grill is evaluated under real-world
                      conditions with consistent, measurable criteria.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-member-tech.jpg"
                      alt="Riley Johnson - Technical Specialist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Riley Johnson</h3>
                    <p className="text-sm text-muted-foreground mb-2">Technical Specialist</p>
                    <p className="text-sm leading-relaxed">
                      Riley's engineering background helps us analyze the technical specifications and build quality of
                      every product we review.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-mike-rodriguez.jpg"
                      alt="Cameron Brown - Product Tester"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Cameron Brown</h3>
                    <p className="text-sm text-muted-foreground mb-2">Product Tester</p>
                    <p className="text-sm leading-relaxed">
                      Cameron conducts hands-on testing of pellet grills and smokers, evaluating temperature control,
                      smoke quality, and overall performance.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-david-thompson.jpg"
                      alt="Avery Wilson - Quality Assurance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Avery Wilson</h3>
                    <p className="text-sm text-muted-foreground mb-2">Quality Assurance</p>
                    <p className="text-sm leading-relaxed">
                      Avery ensures our testing methods remain consistent and reliable, maintaining the high standards
                      our readers expect from every review.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b pb-12">
              <h2 className="text-2xl font-bold mb-6">Support Team</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-liza-martinez.jpg"
                      alt="Laura Garcia - Customer Relations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Laura Garcia</h3>
                    <p className="text-sm text-muted-foreground mb-2">Customer Relations</p>
                    <p className="text-sm leading-relaxed">
                      Laura manages reader inquiries and feedback, ensuring our community receives timely and helpful
                      responses to their grilling questions.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image src="/team-tom-wilson.jpg" alt="Skyler Lee - Web Developer" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Skyler Lee</h3>
                    <p className="text-sm text-muted-foreground mb-2">Web Developer</p>
                    <p className="text-sm leading-relaxed">
                      Skyler maintains our website and develops new features to enhance the user experience for our
                      growing community of BBQ enthusiasts.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="/team-rachel-green.jpg"
                      alt="Dakota Miller - Social Media Manager"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Dakota Miller</h3>
                    <p className="text-sm text-muted-foreground mb-2">Social Media Manager</p>
                    <p className="text-sm leading-relaxed">
                      Dakota connects with our community across social platforms, sharing grilling tips, product
                      updates, and engaging with BBQ enthusiasts worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <p className="leading-relaxed">
                  We're committed to providing unbiased, comprehensive reviews that help you make informed decisions
                  about your grilling equipment. Our team tests every product thoroughly, considering factors like
                  performance, durability, value, and ease of use.
                </p>
                <p className="leading-relaxed">
                  Whether you're a weekend warrior or a serious pitmaster, we're here to guide you to the perfect grill
                  for your needs and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
