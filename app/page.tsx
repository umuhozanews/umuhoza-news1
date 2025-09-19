import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Share2 } from "lucide-react"
import Image from "next/image"
import { supabase } from "@/lib/supabaseClient"

// Featured + Trending + Videos (static for now)
const featuredArticle = { /* ... keep as before ... */ }
const trendingNews = [ /* ... keep as before ... */ ]
const videos = [ /* ... keep as before ... */ ]

export default async function HomePage() {
  // Fetch stories from Supabase
  const { data: stories } = await supabase
    .from("stories")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">

            {/* Ads Section */}
            <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground">Advertisement Space</p>
              <p className="text-sm text-muted-foreground mt-1">Daily Updated Ads</p>
            </div>

            {/* Featured Article */}
            {/* keep your featured article card here ... */}

            {/* Trending News Section */}
            {/* keep your trendingNews section here ... */}

            {/* Videos Section */}
            {/* keep your videos section here ... */}

            {/* Supabase Stories Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Latest Stories (from Supabase)</h2>
              <ul className="space-y-4">
                {stories?.map((story) => (
                  <li key={story.id} className="border-b pb-2">
                    <h3 className="text-xl font-bold">{story.title}</h3>
                    <p>{story.body}</p>
                  </li>
                ))}
              </ul>
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
