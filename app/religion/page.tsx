"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Cross, Percent as Crescent, Star, BookOpen, Users, Building } from "lucide-react"
import Image from "next/image"

const subMenuItems = [
  { name: "ALL", icon: null },
  { name: "CHRISTIANITY", icon: Cross },
  { name: "ISLAM", icon: Crescent },
  { name: "OTHER FAITHS", icon: Star },
  { name: "TEACHINGS", icon: BookOpen },
  { name: "INTERFAITH DIALOGUE", icon: Users },
  { name: "RELIGION & SOCIETY", icon: Building },
]

const religionArticles = [
  {
    id: 1,
    title: "Interfaith Unity Conference Brings Together Religious Leaders",
    excerpt:
      "Historic gathering promotes peace and understanding among different faith communities, addressing common challenges and shared values.",
    category: "Interfaith Dialogue",
    author: "Rev. Jean Baptiste Nzeyimana",
    publishedAt: "3 hours ago",
    readTime: "5 min read",
    views: "9.2k",
    image: "/placeholder.svg?height=400&width=600&text=Interfaith+Conference",
    featured: true,
  },
  {
    id: 2,
    title: "New Church Opens in Rural Community",
    excerpt:
      "Modern worship facility serves growing Christian congregation in remote area, providing spiritual guidance and community support.",
    category: "Christianity",
    author: "Pastor Marie Uwimana",
    publishedAt: "6 hours ago",
    readTime: "3 min read",
    views: "5.8k",
    image: "/placeholder.svg?height=300&width=400&text=New+Church",
  },
  {
    id: 3,
    title: "Islamic Center Launches Community Outreach Program",
    excerpt:
      "Local mosque initiates comprehensive social support program, offering education, healthcare assistance, and youth development.",
    category: "Islam",
    author: "Imam Abdullah Hassan",
    publishedAt: "8 hours ago",
    readTime: "4 min read",
    views: "4.3k",
    image: "/placeholder.svg?height=300&width=400&text=Islamic+Center",
  },
  {
    id: 4,
    title: "Religious Education: Teaching Values in Modern Society",
    excerpt:
      "Educators discuss the importance of moral instruction and character development in contemporary educational systems.",
    category: "Teachings",
    author: "Dr. Grace Mukamana",
    publishedAt: "12 hours ago",
    readTime: "6 min read",
    views: "7.1k",
    image: "/placeholder.svg?height=300&width=400&text=Religious+Education",
  },
  {
    id: 5,
    title: "Faith Communities Unite for Charity Drive",
    excerpt:
      "Multi-religious initiative raises funds and supplies for vulnerable families, demonstrating power of collaborative compassion.",
    category: "Religion & Society",
    author: "Sarah Mukamana",
    publishedAt: "1 day ago",
    readTime: "4 min read",
    views: "6.5k",
    image: "/placeholder.svg?height=300&width=400&text=Charity+Drive",
  },
  {
    id: 6,
    title: "Traditional Spiritual Practices in Modern Rwanda",
    excerpt:
      "Exploration of indigenous beliefs and their role in contemporary Rwandan society, bridging ancient wisdom with modern life.",
    category: "Other Faiths",
    author: "Prof. Patrick Habimana",
    publishedAt: "1 day ago",
    readTime: "7 min read",
    views: "3.9k",
    image: "/placeholder.svg?height=300&width=400&text=Traditional+Practices",
  },
]

export default function ReligionPage() {
  const [activeTab, setActiveTab] = useState("ALL")
  const [filteredArticles, setFilteredArticles] = useState(religionArticles)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "ALL") {
      setFilteredArticles(religionArticles)
    } else {
      setFilteredArticles(religionArticles.filter((article) => article.category.toLowerCase() === tab.toLowerCase()))
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
              <h1 className="text-4xl font-bold mb-4">Religion</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore faith, spirituality, and religious life in Rwanda. Coverage of Christianity, Islam, traditional
                beliefs, and interfaith dialogue.
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

            {/* Featured Article */}
            {religionArticles
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
                {activeTab === "ALL" ? "Latest Religious News" : `${activeTab} News`}
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
