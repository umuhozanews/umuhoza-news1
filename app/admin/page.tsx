"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Eye, TrendingUp, Calendar, MessageSquare, DollarSign, Activity } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Articles",
      value: "1,234",
      change: "+12%",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Total Users",
      value: "45,678",
      change: "+8%",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Page Views",
      value: "892,456",
      change: "+23%",
      icon: Eye,
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "$12,345",
      change: "+15%",
      icon: DollarSign,
      color: "text-yellow-600",
    },
  ]

  const recentArticles = [
    {
      id: 1,
      title: "Breaking: Major Political Development in Rwanda",
      author: "John Doe",
      status: "Published",
      views: "12.5K",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Sports Update: Local Team Wins Championship",
      author: "Jane Smith",
      status: "Draft",
      views: "8.2K",
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Health Alert: New Medical Guidelines Released",
      author: "Dr. Mike Johnson",
      status: "Published",
      views: "15.7K",
      date: "2024-01-13",
    },
  ]

  const quickActions = [
    { name: "Create Article", href: "/admin/articles/new", icon: FileText },
    { name: "Manage Users", href: "/admin/users", icon: Users },
    { name: "View Analytics", href: "/admin/analytics", icon: TrendingUp },
    { name: "Settings", href: "/admin/settings", icon: Activity },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with UMUHOZA NEWS.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 days
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Articles */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Articles</CardTitle>
            <CardDescription>Latest articles and their performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentArticles.map((article) => (
                <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>By {article.author}</span>
                      <span>{article.date}</span>
                      <span className="flex items-center">
                        <Eye className="mr-1 h-3 w-3" />
                        {article.views}
                      </span>
                    </div>
                  </div>
                  <Badge variant={article.status === "Published" ? "default" : "secondary"}>{article.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start" asChild>
                  <a href={action.href}>
                    <action.icon className="mr-2 h-4 w-4" />
                    {action.name}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New article published", user: "John Doe", time: "2 hours ago", type: "publish" },
              { action: "User registered", user: "New User", time: "4 hours ago", type: "user" },
              { action: "Comment moderated", user: "Jane Smith", time: "6 hours ago", type: "moderate" },
              { action: "Advertisement updated", user: "Admin", time: "8 hours ago", type: "ad" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div
                  className={`p-2 rounded-full ${
                    activity.type === "publish"
                      ? "bg-green-100 text-green-600"
                      : activity.type === "user"
                        ? "bg-blue-100 text-blue-600"
                        : activity.type === "moderate"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {activity.type === "publish" && <FileText className="h-4 w-4" />}
                  {activity.type === "user" && <Users className="h-4 w-4" />}
                  {activity.type === "moderate" && <MessageSquare className="h-4 w-4" />}
                  {activity.type === "ad" && <DollarSign className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">
                    by {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
