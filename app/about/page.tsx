import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 border-t-4 border-black pt-4">
          <h1 className="mb-4 text-5xl font-bold text-balance">About PrimeBBQGear</h1>
          <p className="text-lg text-foreground/70">
            Your trusted source for barbecue grill reviews and recommendations
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="mb-4 text-3xl font-bold">Who We Are</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            PrimeBBQGear is the premier product recommendation service dedicated to helping you find the perfect
            barbecue grill. As part of The Grill Times family, we combine rigorous testing, expert analysis, and years
            of grilling experience to provide honest, unbiased reviews.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Our Mission</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            We believe that great outdoor cooking starts with the right equipment. Our mission is to cut through the
            marketing hype and provide clear, actionable recommendations based on real-world testing. Whether you're a
            weekend warrior or a serious pitmaster, we're here to help you make confident buying decisions.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Our Testing Process</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            Every grill we review undergoes extensive hands-on testing. We cook everything from burgers and steaks to
            low-and-slow briskets, evaluating heat distribution, temperature control, build quality, and ease of use.
            Our team of experienced grillers spends hundreds of hours testing each year to ensure our recommendations
            are based on real performance, not just specifications.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Editorial Independence</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            PrimeBBQGear maintains strict editorial independence. We purchase all products at retail price for testing,
            and our reviews are never influenced by manufacturers or advertisers. When you buy through our links, we may
            earn a commission, but this never affects our recommendations or editorial content.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Our Team</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            Our editorial team consists of passionate grillers, professional chefs, and experienced product testers. We
            bring diverse perspectives and decades of combined experience to every review, ensuring comprehensive
            coverage of all grill types, fuel sources, and price points.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
