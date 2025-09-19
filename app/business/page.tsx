"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Building, Rocket, DollarSign, TrendingUp, Wheat, Home, Cpu } from "lucide-react"
import Image from "next/image"

const subMenuItems = [
  { name: "ALL", icon: null },
  { name: "LOCAL BUSINESS", icon: Building },
  { name: "STARTUPS", icon: Rocket },
  { name: "FINANCE", icon: DollarSign },
  { name: "MARKETS", icon: TrendingUp },
  { name: "AGRICULTURE", icon: Wheat },
  { name: "REAL ESTATE", icon: Home },
  { name: "TECHNOLOGY", icon: Cpu },
]

const businessArticles = [
  {
    id: 1,
    title: "Rwanda's Tech Startup Ecosystem Attracts $50M in Investment",
    excerpt:
      "Record-breaking year for local technology companies as international investors recognize the potential of Rwanda's growing digital economy.",
    category: "Startups",
    author: "Alice Mukamana",
    publishedAt: "1 hour ago",
    readTime: "6 min read",
    views: "18.5k",
    image: "/technology-summit-conference-hall.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Coffee Exports Reach All-Time High",
    excerpt:
      "Rwandan coffee industry celebrates record export volumes, driven by quality improvements and international market expansion.",
    category: "Agriculture",
    author: "Jean Baptiste Nzeyimana",
    publishedAt: "4 hours ago",
    readTime: "4 min read",
    views: "12.3k",
    image: "/placeholder.svg?height=300&width=400&text=Coffee+Exports",
  },
  {
    id: 3,
    title: "New Shopping Mall Opens in Kigali City Center",
    excerpt:
      "Modern retail complex brings international brands and local businesses together, creating hundreds of new jobs.",
    category: "Real Estate",
    author: "Marie Uwimana",
    publishedAt: "6 hours ago",
    readTime: "3 min read",
    views: "9.7k",
    image: "/placeholder.svg?height=300&width=400&text=Shopping+Mall",
  },
  {
    id: 4,
    title: "Stock Market Shows Strong Performance in Q4",
    excerpt:
      "Rwanda Stock Exchange reports impressive gains as investor confidence grows in local and regional markets.",
    category: "Markets",
    author: "Samuel Uwimana",
    publishedAt: "8 hours ago",
    readTime: "5 min read",
    views: "7.8k",
    image: "/placeholder.svg?height=300&width=400&text=Stock+Market",
  },
  {
    id: 5,
    title: "Fintech Company Launches Mobile Banking Solution",
    excerpt:
      "Innovative financial technology startup introduces comprehensive mobile banking platform for underserved communities.",
    category: "Finance",
    author: "Grace Mukamana",
    publishedAt: "12 hours ago",
    readTime: "4 min read",
    views: "11.2k",
    image: "/placeholder.svg?height=300&width=400&text=Mobile+Banking",
  },
  {
    id: 6,
    title: "Local Manufacturing Company Expands to Regional Markets",
    excerpt:
      "Successful Rwandan manufacturer announces expansion plans across East Africa, creating new export opportunities.",
    category: "Local Business",
    author: "Patrick Habimana",
    publishedAt: "1 day ago",
    readTime: "5 min read",
    views: "6.4k",
    image: "/placeholder.svg?height=300&width=400&text=Manufacturing",
  },
]

const marketData = [
  { name: "RSE Index", value: "1,245.67", change: "+2.3%", positive: true },
  { name: "USD/RWF", value: "1,285.50", change: "-0.8%", positive: false },
  { name: "Coffee Price", value: "$4.25/kg", change: "+5.2%", positive: true },
  { name: "Gold Price", value: "$2,045/oz", change: "+1.1%", positive: true },
]

export default function BusinessPage() {
  const [activeTab, setActiveTab] = useState("ALL")
  const [filteredArticles, setFilteredArticles] = useState(businessArticles)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "ALL") {
      setFilteredArticles(businessArticles)
    } else {
      setFilteredArticles(businessArticles.filter((article) => article.category.toLowerCase() === tab.toLowerCase()))
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
              <h1 className="text-4xl font-bold mb-4">Business</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay informed about Rwanda's business landscape, from startups and local enterprises to markets,
                finance, and economic development.
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

            {/* Market Data */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Market Overview
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {marketData.map((item) => (
                    <div key={item.name} className="text-center p-3 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                      <p className="text-lg font-bold">{item.value}</p>
                      <p className={`text-sm ${item.positive ? "text-green-600" : "text-red-600"}`}>{item.change}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Article */}
            {businessArticles
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
                {activeTab === "ALL" ? "Latest Business News" : `${activeTab} News`}
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
