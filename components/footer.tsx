import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="mb-4 font-semibold">About PrimeBBQGear</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/our-team" className="hover:text-white">
                  Our team
                </a>
              </li>
              <li>
                <a href="/staff-demographics" className="hover:text-white">
                  Staff demographics
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-white">
                  Jobs at PrimeBBQGear
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2">
            <div className="flex gap-4 flex-row px-0 border-0">
              <a
                href="https://www.facebook.com/profile.php?id=61583002591904"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black hover:bg-white/90"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/primebbqgear/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black hover:bg-white/90"
              >
                <Instagram className="h-5 w-5" />
              </a>              
            </div>
          </div>
          
          
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="mb-6 text-sm text-white/70 leading-relaxed">
            PrimeBBQGear is a participant in the Amazon Services LLC Associates Program. As an Amazon Associate, we earn
            from qualifying purchases.
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-white/60">
            <span>© 2025 PrimeBBQGear, Inc.</span>
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/about" className="hover:text-white">
              About Us
            </a>
            <a href="/disclaimer" className="hover:text-white">
              Disclaimer
            </a>
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
