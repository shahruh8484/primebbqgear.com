import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
              <p>
                Welcome to PrimeBBQGear. We respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you visit our
                website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identity Data:</strong> includes first name, last name, username or similar identifier.
                </li>
                <li>
                  <strong>Contact Data:</strong> includes email address and telephone numbers.
                </li>
                <li>
                  <strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version,
                  time zone setting and location, browser plug-in types and versions, operating system and platform.
                </li>
                <li>
                  <strong>Usage Data:</strong> includes information about how you use our website, products and
                  services.
                </li>
                <li>
                  <strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing
                  from us and your communication preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our website and hold certain
                information. Cookies are files with small amount of data which may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our service, provide the service on
                our behalf, perform service-related services or assist us in analyzing how our service is used. These
                third parties have access to your personal data only to perform these tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>
              <p className="mt-4">
                <strong>Amazon Associates Program:</strong> PrimeBBQGear is a participant in the Amazon Services LLC
                Associates Program, an affiliate advertising program designed to provide a means for sites to earn
                advertising fees by advertising and linking to Amazon.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Children's Privacy</h2>
              <p>
                Our service does not address anyone under the age of 13. We do not knowingly collect personally
                identifiable information from children under 13. If you are a parent or guardian and you are aware that
                your child has provided us with personal data, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
