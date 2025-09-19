import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">+250798989741</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-pink-600" />
                <span className="text-sm">@umuhozanews</span>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-blue-600" />
                <span className="text-sm">umuhozanews</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">umuhozanews@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm hover:text-accent transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="block text-sm hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <div className="space-y-2">
              <Link href="/entertainment" className="block text-sm hover:text-accent transition-colors">
                Entertainment
              </Link>
              <Link href="/sport" className="block text-sm hover:text-accent transition-colors">
                Sports
              </Link>
              <Link href="/politics" className="block text-sm hover:text-accent transition-colors">
                Politics
              </Link>
              <Link href="/business" className="block text-sm hover:text-accent transition-colors">
                Business
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest news and stories.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 UMUHOZA NEWS. All rights reserved. | Website created by{" "}
            <span className="font-medium text-accent">GATETE BOY</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
