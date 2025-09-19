"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Calendar, Radio } from "lucide-react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const subMenuItems = [
  { name: "HOME", active: true },
  { name: "FOOTBALL", active: false },
  { name: "CRICKET", active: false },
  { name: "FORMULA1", active: false },
  { name: "TENNIS", active: false },
  { name: "GOLF", active: false },
  { name: "FIXTURES & RESULTS", active: false },
  { name: "LIVE", active: false },
]

const sportsArticles = [
  {
    id: 1,
    title: "Rwanda National Team Qualifies for Continental Championship",
    excerpt:
      "Historic victory secures spot in major tournament as team shows remarkable improvement under new coaching staff and training regime.",
    category: "Football",
    author: "Samuel Uwimana",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    views: "8.3k",
    image: "/football-team-training-session.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Local Tennis Player Reaches International Tournament Semifinals",
    excerpt:
      "Young athlete continues impressive run at prestigious tournament, becoming first Rwandan to reach this stage in competition history.",
    category: "Tennis",
    author: "Grace Mukamana",
    publishedAt: "4 hours ago",
    readTime: "3 min read",
    views: "4.2k",
    image: "/placeholder.svg?height=300&width=400&text=Tennis+Player",
  },
  {
    id: 3,
    title: "Cricket Team Prepares for Regional Championship",
    excerpt:
      "Squad undergoes intensive training camp as they gear up for upcoming regional tournament with hopes of strong performance.",
    category: "Cricket",
    author: "John Habimana",
    publishedAt: "6 hours ago",
    readTime: "4 min read",
    views: "2.8k",
    image: "/placeholder.svg?height=300&width=400&text=Cricket+Team",
  },
  {
    id: 4,
    title: "Golf Tournament Attracts International Players to Kigali",
    excerpt:
      "Annual championship brings together professional golfers from across Africa for three-day competition at premier golf course.",
    category: "Golf",
    author: "Marie Uwimana",
    publishedAt: "8 hours ago",
    readTime: "3 min read",
    views: "1.9k",
    image: "/placeholder.svg?height=300&width=400&text=Golf+Tournament",
  },
  {
    id: 5,
    title: "Formula 1 Viewing Party Draws Hundreds of Fans",
    excerpt:
      "Local motorsport enthusiasts gather to watch latest Grand Prix race, celebrating growing interest in Formula 1 racing.",
    category: "Formula1",
    author: "Patrick Nzeyimana",
    publishedAt: "12 hours ago",
    readTime: "2 min read",
    views: "3.1k",
    image: "/placeholder.svg?height=300&width=400&text=F1+Viewing",
  },
]

const fixtures = [
  {
    id: 1,
    homeTeam: "Rwanda FC",
    awayTeam: "Uganda United",
    date: "2024-01-20",
    time: "15:00",
    competition: "CECAFA Cup",
    status: "upcoming",
  },
  {
    id: 2,
    homeTeam: "APR FC",
    awayTeam: "Rayon Sports",
    date: "2024-01-18",
    time: "16:30",
    competition: "Rwanda Premier League",
    status: "completed",
    homeScore: 2,
    awayScore: 1,
  },
  {
    id: 3,
    homeTeam: "Kiyovu Sports",
    awayTeam: "Mukura Victory",
    date: "2024-01-22",
    time: "14:00",
    competition: "Rwanda Premier League",
    status: "upcoming",
  },
  {
    id: 4,
    homeTeam: "Rwanda National",
    awayTeam: "Tanzania",
    date: "2024-01-15",
    time: "19:00",
    competition: "International Friendly",
    status: "completed",
    homeScore: 3,
    awayScore: 0,
  },
]

const liveUpdates = [
  {
    id: 1,
    time: "90+3'",
    event: "FULL TIME: Rwanda FC 2-1 Uganda United",
    type: "result",
  },
  {
    id: 2,
    time: "87'",
    event: "GOAL! Rwanda FC extends lead with brilliant counter-attack",
    type: "goal",
  },
  {
    id: 3,
    time: "82'",
    event: "Yellow card for Uganda United defender",
    type: "card",
  },
  {
    id: 4,
    time: "75'",
    event: "Substitution: Fresh legs for Rwanda FC",
    type: "substitution",
  },
]

export default function SportPage() {
  const [activeTab, setActiveTab] = useState("HOME")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Page Header */}
            <div className="text-center py-8">
              <h1 className="text-4xl font-bold mb-4">Sports</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest sports news, fixtures, results, and live coverage from Rwanda and around
                the world.
              </p>
            </div>

            {/* Sub-menu Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-border pb-4 overflow-x-auto">
              {subMenuItems.map((item) => (
                <Button
                  key={item.name}
                  variant={activeTab === item.name ? "default" : "outline"}
                  onClick={() => setActiveTab(item.name)}
                  className="whitespace-nowrap"
                >
                  {item.name}
                </Button>
              ))}
            </div>

            {/* Ads Section */}
            <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground">Sports Advertisement Space</p>
              <p className="text-sm text-muted-foreground mt-1">Daily Updated Sports Ads</p>
            </div>

            {/* Featured Article */}
            {sportsArticles
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

            {/* Live Updates Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Radio className="h-5 w-5 text-red-500" />
                  Live Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {liveUpdates.map((update) => (
                    <div key={update.id} className="flex items-start gap-3 pb-3 border-b border-border last:border-b-0">
                      <div className="flex-shrink-0 w-12 h-8 bg-accent text-accent-foreground rounded text-xs font-bold flex items-center justify-center">
                        {update.time}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{update.event}</p>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {update.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fixtures & Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Fixtures & Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Match</TableHead>
                      <TableHead>Competition</TableHead>
                      <TableHead>Result</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fixtures.map((fixture) => (
                      <TableRow key={fixture.id}>
                        <TableCell className="font-medium">
                          <div className="text-sm">
                            {new Date(fixture.date).toLocaleDateString()}
                            <div className="text-xs text-muted-foreground">{fixture.time}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {fixture.homeTeam} vs {fixture.awayTeam}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {fixture.competition}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {fixture.status === "completed" ? (
                            <div className="text-sm font-medium">
                              {fixture.homeScore} - {fixture.awayScore}
                            </div>
                          ) : (
                            <Badge variant="secondary" className="text-xs">
                              {fixture.time}
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Other Sports News */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Latest Sports News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sportsArticles
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
