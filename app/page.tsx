"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"

const CATEGORIES = [
  "business",
  "sport",
  "politics",
  "health",
  "entertainment",
  "religion",
  "live",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome */}
            <div className="text-center py-8">
              <h1 className="text-4xl font-bold mb-4">Welcome to Umuhoza News</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay informed with the latest news in Rwanda, Africa, and around the world.
              </p>
            </div>

            {/* Category links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CATEGORIES.map((cat) => (
                <Link key={cat} href={`/${cat}`}>
                  <Button className="w-full capitalize">{cat}</Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
