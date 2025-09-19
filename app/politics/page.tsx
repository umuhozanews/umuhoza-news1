"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Users, Globe, Vote, Building, FileText, MessageSquare } from "lucide-react"
import Image from "next/image"

const subMenuItems = [
  { name: "ALL", icon: null },
  { name: "RWANDA POLITICS", icon: Building },
  { name: "AFRICA", icon: Globe },
  { name: "WORLD", icon: Globe },
  { name: "ELECTIONS", icon: Vote },
  { name: "PARLIAMENT", icon: Users },
  { name: "POLICIES", icon: FileText },
  { name: "OPINION & ANALYSIS", icon: MessageSquare },
]

const politicsArticles = [
  {
    id: 1,
    title: "Parliament Passes New Economic Development Bill",
    excerpt:
      "Landmark legislation aims to boost economic growth through strategic investments in technology and infrastructure development across the country.",
    category: "Parliament",
    author: "Jean Claude Nzeyimana",
    publishedAt: "1 hour ago",
    readTime: "6 min read",
    views: "12.5k",
    image: "/president-speaking-at-podium.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Regional Summit Addresses Climate Change Policies",
    excerpt:
      "East African leaders convene to discuss coordinated response to climate challenges and sustainable development goals.",
    category: "Africa",
    author: "Marie Uwimana",
    publishedAt: "3 hours ago",
    readTime: "5 min read",
    views: "8.2k",
    image: "/placeholder.svg?height=300&width=400&text=Regional+Summit",
  },
  {
    id: 3,
    title: "Analysis: Impact of New Healthcare Policy on Rural Communities",
    excerpt:
      "Expert examination of recent healthcare reforms and their potential effects on medical access in remote areas.",
    category: "Opinion & Analysis",
    author: "Dr. Patrick Habimana",
    publishedAt: "5 hours ago",
    readTime: "8 min read",
    views: "6.1k",
    image: "/placeholder.svg?height=300&width=400&text=Healthcare+Policy",
  },
  {
    id: 4,
    title: "International Trade Agreement Signed with European Union",
    excerpt:
      "New partnership agreement opens doors for increased trade opportunities and economic cooperation between regions.",
    category: "World",
    author: "Alice Mukamana",
    publishedAt: "8 hours ago",
    readTime: "4 min read",
    views: "9.3k",
    image: "/placeholder.svg?height=300&width=400&text=Trade+Agreement",
  },
  {
    id: 5,
    title: "Local Elections: Voter Registration Reaches Record High",
    excerpt:
      "Unprecedented citizen engagement as registration numbers exceed expectations ahead of upcoming local elections.",
    category: "Elections",
    author: "Samuel Uwimana",
    publishedAt: "12 hours ago",
    readTime: "3 min read",
    views: "7.8k",
    image: "/placeholder.svg?height=300&width=400&text=Voter+Registration",
  },
  {
    id: 6,
    title: "Education Reform Bill Under Parliamentary Review",
    excerpt:
      "Proposed changes to education system aim to improve quality and accessibility of learning opportunities nationwide.",
    category: "Rwanda Politics",
    author: "Grace Mukamana",
    publishedAt: "1 day ago",
    readTime: "5 min read",
    views: "5.4k",
    image: "/placeholder.svg?height=300&width=400&text=Education+Reform",
  },
]

export default function PoliticsPage() {
  const [activeTab, setActiveTab] = useState("ALL")
  const [filteredArticles, setFilteredArticles] = useState(politicsArticles)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "ALL") {
      setFilteredArticles(politicsArticles)
    } else {
      setFilteredArticles(politicsArticles.filter((article) => article.category.toLowerCase() === tab.toLowerCase()))
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
              <h1 className="text-4xl font-bold mb-4">Politics</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay informed about political developments in Rwanda, Africa, and around the world with breaking news,
                analysis, and expert commentary.
              </p>
            </div>

            {/* Sub-menu Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-border pb-4 overflow-x-auto">
              {subMenuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant={activeTab === item.name ? "default" : "outline"}
                    onClick={() => handleTabChange(item.name)}
                    className="gap-2 whitespace-nowrap"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.name}
                  </Button>
                )
              })}
            </div>

            {/* Breaking News Banner */}
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-red-600 text-white">BREAKING</Badge>
                <span className="text-sm text-muted-foreground">2 minutes ago</span>
              </div>
              <h3 className="font-semibold text-red-900 dark:text-red-100">
                Parliament Approves Emergency Economic Relief Package
              </h3>
            </div>

            {/* Featured Article */}
            {politicsArticles
              .filter((article) => article.featured)
              .map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">{article.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 text-balance">{article.title}</h1>
                    <p className="text-muted-foreground mb-4 text-pretty">{article.excerpt}</p>
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
                    <Button>Read Full Article</Button>
                  </CardContent>
                </Card>
              ))}

            {/* Articles Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {activeTab === "ALL" ? "Latest Political News" : `${activeTab} News`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles
                  .filter((article) => !article.featured)
                  .map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary">{article.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2 text-balance">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.publishedAt}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {article.views}
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
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
