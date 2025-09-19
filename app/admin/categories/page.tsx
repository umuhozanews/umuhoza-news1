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
import { Badge } from "@/components/ui/badge"
import { Plus, MoreHorizontal, Edit, Trash2, FolderOpen } from "lucide-react"

export default function CategoriesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [categoryName, setCategoryName] = useState("")
  const [categoryDescription, setCategoryDescription] = useState("")
  const [categorySlug, setCategorySlug] = useState("")

  // Mock data
  const categories = [
    {
      id: 1,
      name: "Politics",
      slug: "politics",
      description: "Political news and analysis",
      articleCount: 156,
      color: "#ef4444",
    },
    {
      id: 2,
      name: "Sports",
      slug: "sports",
      description: "Sports news and updates",
      articleCount: 89,
      color: "#10b981",
    },
    {
      id: 3,
      name: "Health",
      slug: "health",
      description: "Health and medical news",
      articleCount: 67,
      color: "#3b82f6",
    },
    {
      id: 4,
      name: "Business",
      slug: "business",
      description: "Business and economic news",
      articleCount: 134,
      color: "#f59e0b",
    },
    {
      id: 5,
      name: "Entertainment",
      slug: "entertainment",
      description: "Entertainment and celebrity news",
      articleCount: 78,
      color: "#8b5cf6",
    },
    {
      id: 6,
      name: "Religion",
      slug: "religion",
      description: "Religious news and events",
      articleCount: 45,
      color: "#06b6d4",
    },
  ]

  const handleSaveCategory = () => {
    // Mock save functionality
    console.log("Saving category:", {
      name: categoryName,
      description: categoryDescription,
      slug: categorySlug,
    })
    setIsDialogOpen(false)
    setCategoryName("")
    setCategoryDescription("")
    setCategorySlug("")
    setEditingCategory(null)
  }

  const handleEditCategory = (category: any) => {
    setEditingCategory(category)
    setCategoryName(category.name)
    setCategoryDescription(category.description)
    setCategorySlug(category.slug)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600">Manage article categories and organization</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingCategory ? "Edit Category" : "Create New Category"}</DialogTitle>
              <DialogDescription>
                {editingCategory ? "Update the category details." : "Add a new category for organizing articles."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Category Name</Label>
                <Input
                  id="name"
                  placeholder="Enter category name..."
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  placeholder="category-slug"
                  value={categorySlug}
                  onChange={(e) => setCategorySlug(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Category description..."
                  value={categoryDescription}
                  onChange={(e) => setCategoryDescription(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveCategory}>{editingCategory ? "Update" : "Create"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Categories</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.reduce((sum, cat) => sum + cat.articleCount, 0)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Popular</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Politics</div>
            <p className="text-xs text-muted-foreground">156 articles</p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Categories</CardTitle>
          <CardDescription>Manage and organize your content categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Articles</TableHead>
                  <TableHead>Color</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{category.slug}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{category.description}</TableCell>
                    <TableCell>{category.articleCount}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: category.color }}></div>
                        <span className="text-sm text-gray-500">{category.color}</span>
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
                          <DropdownMenuItem onClick={() => handleEditCategory(category)}>
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
