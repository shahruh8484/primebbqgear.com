"use client"

import type React from "react"

import { Search, Menu, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <Link href="/">
              <Button variant="ghost" size="icon" title="Home" className="hover:bg-accent/10">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden hover:bg-accent/10">
              <Menu className="h-5 w-5" />
            </Button>
            <form onSubmit={handleSearch} className="relative hidden sm:block flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Find on site"
                className="pl-10 bg-muted/50 border-border/50 focus:border-accent/50 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold tracking-tight text-foreground">PrimeBBQGear</div>
            </div>
          </Link>

          <div className="flex items-center gap-3 flex-1 justify-end">{/* Buttons removed */}</div>
        </div>
      </div>

      <nav className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 py-4 overflow-x-auto">
            <Link
              href="/"
              className="whitespace-nowrap text-sm font-medium hover:text-accent transition-colors text-muted-foreground"
            >
              Home
            </Link>
            <Link
              href="/#fuel-types"
              className="whitespace-nowrap text-sm font-medium hover:text-accent transition-colors text-muted-foreground"
            >
              Choose Your Fuel
            </Link>
            <Link
              href="/#maintenance"
              className="whitespace-nowrap text-sm font-medium hover:text-accent transition-colors text-muted-foreground"
            >
              Grill Care & Maintenance
            </Link>
            <Link
              href="/#categories"
              className="whitespace-nowrap text-sm font-medium hover:text-accent transition-colors text-muted-foreground"
            >
              Explore by Category
            </Link>
            <Link
              href="/#essentials"
              className="whitespace-nowrap text-sm font-medium hover:text-accent transition-colors text-muted-foreground"
            >
              Grilling essentials
            </Link>
            <Link
              href="/#top-picks"
              className="whitespace-nowrap text-sm font-medium hover:text-accent transition-colors text-muted-foreground"
            >
              Our top picks
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
