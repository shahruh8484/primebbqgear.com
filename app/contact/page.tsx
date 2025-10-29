"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send, Upload, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 border-t-4 border-black pt-4">
          <h1 className="mb-4 text-5xl font-bold text-balance">Contact Us</h1>
          <p className="text-lg text-foreground/70">
            We'd love to hear from you. Send us your questions, feedback, or story ideas.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
            <p className="mb-8 leading-relaxed text-foreground/80">
              Have a question about our reviews? Want to suggest a product for testing? Or just want to share your
              grilling success story? We're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email Us</h3>
                  <p className="text-sm text-foreground/70">editorial@primebbqgear.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Product Suggestions</h3>
                  <p className="text-sm text-foreground/70">
                    Know a grill we should test? Let us know and we'll add it to our testing queue.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Press Inquiries</h3>
                  <p className="text-sm text-foreground/70">press@primebbqgear.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="w-full" />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this about?" className="w-full" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us more..." className="min-h-[150px] w-full" />
              </div>

              <div>
                <label htmlFor="files" className="mb-2 block text-sm font-medium">
                  Attachments (optional)
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Input
                      id="files"
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("files")?.click()}
                      className="w-full"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Files
                    </Button>
                  </div>
                  <p className="text-xs text-foreground/60">
                    You can attach images, PDFs, or documents (max 10MB per file)
                  </p>
                  {files.length > 0 && (
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2"
                        >
                          <span className="text-sm truncate flex-1">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="h-6 w-6 p-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t pt-12">
          <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold">How do you choose which grills to review?</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                We select grills based on popularity, reader requests, new releases, and our assessment of what will be
                most useful to our audience. We aim to cover a wide range of price points and grill types.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Do you accept products for review?</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                We purchase most products at retail price to ensure unbiased testing. In some cases, we may borrow
                products from manufacturers for testing, but this never influences our editorial decisions or
                recommendations.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">How long does it take to respond?</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                We typically respond to inquiries within 2-3 business days. During busy periods, it may take slightly
                longer. Thank you for your patience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
