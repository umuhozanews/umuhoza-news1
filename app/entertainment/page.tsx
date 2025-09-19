"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Play, Music, Film, Mic } from "lucide-react"
import Image from "next/image"

const subMenuItems = [
  { name: "ALL", icon: null, active: true },
  { name: "MUSIC", icon: Music },
  { name: "CINEMA", icon: Film },
  { name: "INTERVIEWS", icon: Mic },
]

const entertainmentArticles = [
  {
    id: 1,
    title: "Rising Star Wins Best New Artist at Rwanda Music Awards",
    excerpt:
      "Young musician's debut album breaks streaming records and captures hearts across the nation with innovative blend of traditional and modern sounds.",
    category: "Music",
    author: "Jean Baptiste Nzeyimana",
    publishedAt: "3 hours ago",
    readTime: "4 min read",
    views: "5.2k",
    image: "/musician-on-stage.png",
    type: "article",
  },
  {
    id: 2,
    title: "Exclusive Interview: Director Discusses New Rwandan Film",
    excerpt:
      "Award-winning filmmaker shares insights about upcoming movie that explores themes of reconciliation and hope in post-genocide Rwanda.",
    category: "Cinema",
    author: "Marie Claire Uwimana",
    publishedAt: "5 hours ago",
    readTime: "6 min read",
    views: "3.8k",
    image: "/placeholder.svg?height=300&width=400&text=Film+Director",
    type: "interview",
  },
  {
    id: 3,
    title: "Traditional Dance Group Performs at International Festival",
    excerpt:
      "Local cultural ensemble represents Rwanda at prestigious African arts festival, showcasing centuries-old traditions to global audience.",
    category: "Music",
    author: "Patrick Habimana",
    publishedAt: "8 hours ago",
    readTime: "3 min read",
    views: "2.1k",
    image: "/traditional-rwandan-dancers.jpg",
    type: "article",
  },
  {
    id: 4,
    title: "Behind the Scenes: Making of Rwanda's First Sci-Fi Movie",
    excerpt:
      "Exclusive look at the production process of groundbreaking film that combines futuristic storytelling with Rwandan cultural elements.",
    category: "Cinema",
    author: "Alice Mukamana",
    publishedAt: "12 hours ago",
    readTime: "5 min read",
    views: "4.3k",
    image: "/placeholder.svg?height=300&width=400&text=Movie+Set",
    type: "article",
  },
  {
    id: 5,
    title: "Live Performance: Jazz Night at Kigali Cultural Center",
    excerpt:
      "Monthly jazz series continues to attract music lovers with performances by local and international artists in intimate venue setting.",
    category: "Music",
    author: "Emmanuel Nsengimana",
    publishedAt: "1 day ago",
    readTime: "2 min read",
    views: "1.9k",
    image: "/placeholder.svg?height=300&width=400&text=Jazz+Performance",
    type: "article",
  },
  {
    id: 6,
    title: "Celebrity Chef Opens New Restaurant in Kigali",
    excerpt:
      "Television personality and cookbook author brings innovative fusion cuisine to Rwanda's capital, blending international flavors with local ingredients.",
    category: "Interviews",
    author: "Grace Uwimana",
    publishedAt: "1 day ago",
    readTime: "4 min read",
    views: "3.5k",
    image: "/placeholder.svg?height=300&width=400&text=Celebrity+Chef",
    type: "interview",
  },
]

const featuredVideos = [
  {
    id: 1,
    title: "Music Video: 'Ubwiyunge' by Aline Gahongayire",
    duration: "4:32",
    views: "125k",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Music+Video",
    category: "Music",
  },
  {
    id: 2,
    title: "Movie Trailer: 'Ubwoba' - Coming Soon",
    duration: "2:15",
    views: "89k",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Movie+Trailer",
    category: "Cinema",
  },
  {
    id: 3,
    title: "Interview with Fashion Designer Colombe Ituze",
    duration: "12:45",
    views: "34k",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Fashion+Interview",
    category: "Interviews",
  },
  {
    id: 4,
    title: "Concert Highlights: Kigali Music Festival 2024",
    duration: "8:20",
    views: "67k",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Concert+Highlights",
    category: "Music",
  },
]

export default function EntertainmentPage() {
  const [activeTab, setActiveTab] = useState("ALL")
  const [filteredArticles, setFilteredArticles] = useState(entertainmentArticles)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "ALL") {
      setFilteredArticles(entertainmentArticles)
    } else {
      setFilteredArticles(
        entertainmentArticles.filter((article) => article.category.toLowerCase() === tab.toLowerCase()),
      )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Page Header */}
            <div className="text-center py-8">
              <h1 className="text-4xl font-bold mb-4">Entertainment</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the latest in music, cinema, and exclusive interviews from Rwanda's vibrant entertainment
                scene.
              </p>
            </div>

            {/* Sub-menu Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-border pb-4">
              {subMenuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant={activeTab === item.name ? "default" : "outline"}
                    onClick={() => handleTabChange(item.name)}
                    className="gap-2"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.name}
                  </Button>
                )
              })}
            </div>

            {/* Featured Videos Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredVideos.slice(0, 4).map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-48">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-black ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary">{video.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Eye className="h-3 w-3" />
                        {video.views} views
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Articles Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {activeTab === "ALL" ? "Latest Entertainment News" : `${activeTab} News`}
              </h2>
              <div className="space-y-6">
                {filteredArticles.map((article, index) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={`flex flex-col ${index === 0 ? "md:flex-row" : "md:flex-row"}`}>
                      <div className={`relative ${index === 0 ? "md:w-1/2 h-64 md:h-80" : "md:w-1/3 h-48"}`}>
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-accent text-accent-foreground">{article.category}</Badge>
                        </div>
                        {article.type === "interview" && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="outline" className="bg-background/80">
                              <Mic className="h-3 w-3 mr-1" />
                              Interview
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent
                        className={`p-6 ${index === 0 ? "md:w-1/2" : "md:w-2/3"} flex flex-col justify-between`}
                      >
                        <div>
                          <h2
                            className={`font-bold mb-3 text-balance ${index === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}
                          >
                            {article.title}
                          </h2>
                          <p className="text-muted-foreground mb-4 text-pretty">{article.excerpt}</p>
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-4">
                              <span>By {article.author}</span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {article.publishedAt}
                              </div>
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {article.views}
                            </div>
                          </div>
                          <Button>Read More</Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
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
