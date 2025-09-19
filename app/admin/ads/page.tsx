"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Plus, MoreHorizontal, Edit, Trash2, Eye, DollarSign, TrendingUp, Calendar, Upload } from "lucide-react"

export default function AdsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAd, setEditingAd] = useState<any>(null)
  const [adTitle, setAdTitle] = useState("")
  const [adDescription, setAdDescription] = useState("")
  const [adUrl, setAdUrl] = useState("")
  const [adPosition, setAdPosition] = useState("")
  const [adActive, setAdActive] = useState(true)

  // Mock data
  const advertisements = [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Join the biggest tech conference of the year",
      position: "Header Banner",
      status: "Active",
      clicks: 1250,
      impressions: 45000,
      ctr: "2.78%",
      revenue: "$450.00",
      startDate: "2024-01-01",
      endDate: "2024-03-31",
    },
    {
      id: 2,
      title: "Local Restaurant Chain",
      description: "Best food in town - Order now!",
      position: "Sidebar",
      status: "Active",
      clicks: 890,
      impressions: 32000,
      ctr: "2.78%",
      revenue: "$320.00",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
    },
    {
      id: 3,
      title: "Online Course Platform",
      description: "Learn new skills with expert instructors",
      position: "Article Bottom",
      status: "Paused",
      clicks: 567,
      impressions: 28000,
      ctr: "2.03%",
      revenue: "$180.00",
      startDate: "2024-01-10",
      endDate: "2024-04-10",
    },
    {
      id: 4,
      title: "Fashion Brand Sale",
      description: "Up to 50% off on all items",
      position: "Mobile Banner",
      status: "Scheduled",
      clicks: 0,
      impressions: 0,
      ctr: "0.00%",
      revenue: "$0.00",
      startDate: "2024-02-01",
      endDate: "2024-02-28",
    },
  ]

  const handleSaveAd = () => {
    console.log("Saving advertisement:", {
      title: adTitle,
      description: adDescription,
      url: adUrl,
      position: adPosition,
      active: adActive,
    })
    setIsDialogOpen(false)
    setAdTitle("")
    setAdDescription("")
    setAdUrl("")
    setAdPosition("")
    setAdActive(true)
    setEditingAd(null)
  }

  const handleEditAd = (ad: any) => {
    setEditingAd(ad)
    setAdTitle(ad.title)
    setAdDescription(ad.description)
    setAdUrl(ad.url || "")
    setAdPosition(ad.position)
    setAdActive(ad.status === "Active")
    setIsDialogOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advertisements</h1>
          <p className="text-gray-600">Manage your website advertisements and campaigns</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Advertisement
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingAd ? "Edit Advertisement" : "Create New Advertisement"}</DialogTitle>
              <DialogDescription>
                {editingAd ? "Update the advertisement details." : "Create a new advertisement campaign."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Advertisement Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter ad title..."
                    value={adTitle}
                    onChange={(e) => setAdTitle(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Select value={adPosition} onValueChange={setAdPosition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="header">Header Banner</SelectItem>
                      <SelectItem value="sidebar">Sidebar</SelectItem>
                      <SelectItem value="article-top">Article Top</SelectItem>
                      <SelectItem value="article-bottom">Article Bottom</SelectItem>
                      <SelectItem value="mobile-banner">Mobile Banner</SelectItem>
                      <SelectItem value="footer">Footer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Advertisement description..."
                  value={adDescription}
                  onChange={(e) => setAdDescription(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="url">Target URL</Label>
                <Input
                  id="url"
                  placeholder="https://example.com"
                  value={adUrl}
                  onChange={(e) => setAdUrl(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>
              <div>
                <Label>Advertisement Image</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">PNG, JPG, GIF up to 5MB</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="active" checked={adActive} onCheckedChange={setAdActive} />
                <Label htmlFor="active">Active</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveAd}>{editingAd ? "Update" : "Create"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$950.00</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,707</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impressions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">105,000</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average CTR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.58%</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Advertisements Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Advertisements</CardTitle>
          <CardDescription>Manage your advertisement campaigns and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {advertisements.map((ad) => (
                  <TableRow key={ad.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div>{ad.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{ad.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{ad.position}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(ad.status)}>{ad.status}</Badge>
                    </TableCell>
                    <TableCell>{ad.clicks.toLocaleString()}</TableCell>
                    <TableCell>{ad.impressions.toLocaleString()}</TableCell>
                    <TableCell>{ad.ctr}</TableCell>
                    <TableCell className="font-medium">{ad.revenue}</TableCell>
                    <TableCell className="text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3 text-gray-400" />
                        {ad.startDate} - {ad.endDate}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditAd(ad)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
