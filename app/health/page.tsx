"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Heart, Building2, Search, Apple, Brain, AlertTriangle, Lightbulb } from "lucide-react"
import Image from "next/image"

const subMenuItems = [
  { name: "ALL", icon: null },
  { name: "PUBLIC HEALTH", icon: Heart },
  { name: "HOSPITALS", icon: Building2 },
  { name: "RESEARCH", icon: Search },
  { name: "NUTRITION", icon: Apple },
  { name: "MENTAL HEALTH", icon: Brain },
  { name: "EPIDEMICS", icon: AlertTriangle },
  { name: "HEALTH TIPS", icon: Lightbulb },
]

const healthArticles = [
  {
    id: 1,
    title: "New Medical Center Opens with Advanced Cancer Treatment Facilities",
    excerpt:
      "State-of-the-art oncology center brings cutting-edge cancer treatment technology to Rwanda, offering hope to patients across the region.",
    category: "Hospitals",
    author: "Dr. Sarah Mukamana",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    views: "15.2k",
    image: "/modern-healthcare-center-building.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Mental Health Awareness Campaign Reaches 100,000 People",
    excerpt:
      "National initiative successfully educates communities about mental health resources and reduces stigma surrounding mental illness.",
    category: "Mental Health",
    author: "Dr. Jean Baptiste Nzeyimana",
    publishedAt: "4 hours ago",
    readTime: "4 min read",
    views: "8.7k",
    image: "/placeholder.svg?height=300&width=400&text=Mental+Health+Campaign",
  },
  {
    id: 3,
    title: "Research: Traditional Rwandan Foods Show Promising Health Benefits",
    excerpt:
      "University study reveals that indigenous crops and traditional cooking methods provide superior nutritional value.",
    category: "Research",
    author: "Prof. Marie Uwimana",
    publishedAt: "6 hours ago",
    readTime: "6 min read",
    views: "6.3k",
    image: "/placeholder.svg?height=300&width=400&text=Traditional+Foods",
  },
  {
    id: 4,
    title: "Health Tips: 5 Simple Ways to Boost Your Immune System",
    excerpt:
      "Expert advice on maintaining strong immunity through diet, exercise, sleep, and stress management techniques.",
    category: "Health Tips",
    author: "Dr. Patrick Habimana",
    publishedAt: "8 hours ago",
    readTime: "3 min read",
    views: "12.1k",
    image: "/placeholder.svg?height=300&width=400&text=Immune+System",
  },
  {
    id: 5,
    title: "Vaccination Campaign Achieves 95% Coverage in Rural Areas",
    excerpt:
      "Public health initiative successfully reaches remote communities, significantly improving vaccination rates nationwide.",
    category: "Public Health",
    author: "Dr. Alice Mukamana",
    publishedAt: "12 hours ago",
    readTime: "4 min read",
    views: "9.8k",
    image: "/placeholder.svg?height=300&width=400&text=Vaccination+Campaign",
  },
  {
    id: 6,
    title: "Nutrition Program Reduces Child Malnutrition by 40%",
    excerpt:
      "Government-led nutrition initiative shows remarkable success in improving child health outcomes across the country.",
    category: "Nutrition",
    author: "Dr. Grace Mukamana",
    publishedAt: "1 day ago",
    readTime: "5 min read",
    views: "7.4k",
    image: "/placeholder.svg?height=300&width=400&text=Child+Nutrition",
  },
]

const healthTips = [
  {
    id: 1,
    title: "Stay Hydrated",
    tip: "Drink at least 8 glasses of water daily to maintain optimal body function.",
  },
  {
    id: 2,
    title: "Regular Exercise",
    tip: "Aim for 30 minutes of moderate physical activity most days of the week.",
  },
  {
    id: 3,
    title: "Balanced Diet",
    tip: "Include fruits, vegetables, whole grains, and lean proteins in your meals.",
  },
  {
    id: 4,
    title: "Quality Sleep",
    tip: "Get 7-9 hours of sleep each night for better physical and mental health.",
  },
]

export default function HealthPage() {
  const [activeTab, setActiveTab] = useState("ALL")
  const [filteredArticles, setFilteredArticles] = useState(healthArticles)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "ALL") {
      setFilteredArticles(healthArticles)
    } else {
      setFilteredArticles(healthArticles.filter((article) => article.category.toLowerCase() === tab.toLowerCase()))
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
              <h1 className="text-4xl font-bold mb-4">Health</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your trusted source for health news, medical research, wellness tips, and healthcare developments in
                Rwanda and beyond.
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

            {/* Health Alert */}
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-blue-600 text-white">HEALTH ALERT</Badge>
                <span className="text-sm text-muted-foreground">Updated daily</span>
              </div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Seasonal Flu Prevention Guidelines
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Health Ministry recommends vaccination and preventive measures as flu season approaches.
              </p>
            </div>

            {/* Featured Article */}
            {healthArticles
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

            {/* Quick Health Tips */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  Daily Health Tips
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {healthTips.map((tip) => (
                    <div key={tip.id} className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Articles Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {activeTab === "ALL" ? "Latest Health News" : `${activeTab} News`}
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
