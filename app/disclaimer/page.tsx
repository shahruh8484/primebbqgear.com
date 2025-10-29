import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 border-t-4 border-black pt-4">
          <h1 className="mb-4 text-5xl font-bold text-balance">Disclaimer</h1>
          <p className="text-lg text-foreground/70">Important information about our reviews and recommendations</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="mb-4 text-3xl font-bold">Affiliate Disclosure</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            PrimeBBQGear is a participant in various affiliate advertising programs. When you purchase products through
            links on our site, we may earn a commission at no additional cost to you. These commissions help support our
            testing and editorial operations, but they never influence our recommendations or reviews.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Editorial Independence</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            All products reviewed on PrimeBBQGear are purchased at full retail price or borrowed from manufacturers for
            testing purposes only. We maintain complete editorial independence, and our reviews reflect the honest
            opinions of our testing team. Manufacturers and advertisers have no influence over our editorial content or
            product recommendations.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Product Testing</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            While we conduct extensive testing on all reviewed products, individual results may vary based on usage
            patterns, maintenance, environmental conditions, and other factors. Our recommendations are based on our
            testing experience and should be considered as guidance rather than guarantees of performance.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Safety Information</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            Barbecue grills involve fire, heat, and potentially hazardous materials. Always follow manufacturer
            instructions, use proper safety equipment, and exercise caution when operating any grill. PrimeBBQGear is
            not responsible for injuries, property damage, or other issues that may result from the use of products
            reviewed on our site.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Price and Availability</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            Prices and product availability mentioned in our reviews are accurate at the time of publication but may
            change without notice. We recommend verifying current prices and availability with retailers before making a
            purchase.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">No Warranty</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            The information provided on PrimeBBQGear is for general informational purposes only. We make no warranties
            or representations about the accuracy, completeness, or reliability of any information on our site. Your use
            of PrimeBBQGear and reliance on any information is solely at your own risk.
          </p>

          <h2 className="mb-4 mt-12 text-3xl font-bold">Updates and Changes</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            We regularly update our reviews and recommendations as new products become available and as we conduct
            additional testing. This disclaimer may be updated periodically, and continued use of our site constitutes
            acceptance of any changes.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
