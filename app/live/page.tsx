"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Radio, Play, MessageCircle, Share2, Archive, Tv } from "lucide-react"
import Image from "next/image"

const subMenuItems = [
  { name: "BREAKING NEWS", icon: Radio },
  { name: "LIVE STREAM", icon: Tv },
  { name: "EVENT COVERAGE", icon: Play },
  { name: "SOCIAL MEDIA REACTIONS", icon: MessageCircle },
  { name: "ARCHIVES", icon: Archive },
]

const liveUpdates = [
  {
    id: 1,
    time: "14:32",
    timestamp: "2 minutes ago",
    content: "President announces new infrastructure development plan worth $2 billion",
    type: "breaking",
    category: "Politics",
  },
  {
    id: 2,
    time: "14:28",
    timestamp: "6 minutes ago",
    content: "Live from Parliament: Economic development bill passes with overwhelming support",
    type: "update",
    category: "Politics",
  },
  {
    id: 3,
    time: "14:25",
    timestamp: "9 minutes ago",
    content: "BREAKING: Rwanda national football team qualifies for continental championship",
    type: "breaking",
    category: "Sports",
  },
  {
    id: 4,
    time: "14:20",
    timestamp: "14 minutes ago",
    content: "Health Ministry reports successful vaccination campaign reaching 95% coverage",
    type: "update",
    category: "Health",
  },
  {
    id: 5,
    time: "14:15",
    timestamp: "19 minutes ago",
    content: "Technology summit attracts over 500 international delegates to Kigali",
    type: "update",
    category: "Business",
  },
  {
    id: 6,
    time: "14:10",
    timestamp: "24 minutes ago",
    content: "Weather alert: Heavy rains expected in northern provinces this evening",
    type: "alert",
    category: "Weather",
  },
  {
    id: 7,
    time: "14:05",
    timestamp: "29 minutes ago",
    content: "Cultural festival begins with traditional dance performances in Kigali",
    type: "update",
    category: "Entertainment",
  },
  {
    id: 8,
    time: "14:00",
    timestamp: "34 minutes ago",
    content: "Stock market closes with 2.3% gain, reaching new monthly high",
    type: "update",
    category: "Business",
  },
]

const socialReactions = [
  {
    id: 1,
    platform: "Twitter",
    user: "@RwandaNews",
    content: "Incredible news about the infrastructure development! This will transform our economy 🇷🇼 #Rwanda",
    likes: 245,
    retweets: 89,
    time: "3 min ago",
  },
  {
    id: 2,
    platform: "Facebook",
    user: "Kigali Today",
    content: "So proud of our national team! Continental championship here we come! ⚽",
    likes: 156,
    shares: 34,
    time: "8 min ago",
  },
  {
    id: 3,
    platform: "Instagram",
    user: "@rwandaculture",
    content: "The cultural festival is absolutely beautiful! Traditional dances are mesmerizing 💃",
    likes: 89,
    comments: 12,
    time: "15 min ago",
  },
]

const liveStreams = [
  {
    id: 1,
    title: "Parliament Session - Economic Development Bill",
    viewers: "2.3k",
    status: "live",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Parliament+Live",
  },
  {
    id: 2,
    title: "Technology Summit 2024 - Keynote Address",
    viewers: "1.8k",
    status: "live",
    thumbnail: "/technology-summit-conference-hall.jpg",
  },
  {
    id: 3,
    title: "Cultural Festival - Traditional Performances",
    viewers: "956",
    status: "live",
    thumbnail: "/traditional-rwandan-dancers.jpg",
  },
]

export default function LivePage() {
  const [activeTab, setActiveTab] = useState("BREAKING NEWS")
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Page Header */}
            <div className="text-center py-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h1 className="text-4xl font-bold">Live Coverage</h1>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real-time updates, breaking news, live streams, and social media reactions from Rwanda and around the
                world.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">Last updated: {currentTime.toLocaleTimeString()}</div>
            </div>

            {/* Sub-menu Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-border pb-4 overflow-x-auto">
              {subMenuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant={activeTab === item.name ? "default" : "outline"}
                    onClick={() => setActiveTab(item.name)}
                    className="gap-2 whitespace-nowrap"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.name}
                  </Button>
                )
              })}
            </div>

            {/* Live Streams Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Tv className="h-6 w-6 text-red-500" />
                Live Streams
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {liveStreams.map((stream) => (
                  <Card key={stream.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-32">
                      <Image
                        src={stream.thumbnail || "/placeholder.svg"}
                        alt={stream.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-black ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-600 text-white animate-pulse">
                          <Radio className="h-3 w-3 mr-1" />
                          LIVE
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {stream.viewers} viewers
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-sm line-clamp-2">{stream.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Live Updates Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Radio className="h-5 w-5 text-red-500 animate-pulse" />
                  Live Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {liveUpdates.map((update, index) => (
                    <div key={update.id} className="relative">
                      {/* Timeline line */}
                      {index !== liveUpdates.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-full bg-border"></div>
                      )}

                      <div className="flex gap-4">
                        {/* Time indicator */}
                        <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                          {update.time}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant={
                                update.type === "breaking"
                                  ? "destructive"
                                  : update.type === "alert"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {update.type.toUpperCase()}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {update.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{update.timestamp}</span>
                          </div>
                          <p className="text-sm mb-3">{update.content}</p>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                              <Share2 className="h-3 w-3 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">Load More Updates</Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Reactions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Social Media Reactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialReactions.map((reaction) => (
                    <div key={reaction.id} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {reaction.platform}
                        </Badge>
                        <span className="font-semibold text-sm">{reaction.user}</span>
                        <span className="text-xs text-muted-foreground">{reaction.time}</span>
                      </div>
                      <p className="text-sm mb-3">{reaction.content}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{reaction.likes || reaction.likes} likes</span>
                        <span>
                          {reaction.retweets || reaction.shares || reaction.comments}{" "}
                          {reaction.retweets ? "retweets" : reaction.shares ? "shares" : "comments"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
