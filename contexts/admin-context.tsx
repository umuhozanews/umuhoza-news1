"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface Article {
  id: number
  title: string
  content: string
  excerpt: string
  author: string
  category: string
  status: "draft" | "published" | "review" | "scheduled"
  views: string
  date: string
  featured: boolean
  tags: string[]
  featuredImage?: string
  publishDate?: string
  metaTitle?: string
  metaDescription?: string
}

interface AdminContextType {
  articles: Article[]
  addArticle: (article: Omit<Article, "id" | "views" | "date">) => void
  updateArticle: (id: number, article: Partial<Article>) => void
  deleteArticle: (id: number) => void
  getArticle: (id: number) => Article | undefined
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Breaking: Major Political Development in Rwanda",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      excerpt: "Major political development shakes the nation as new policies are announced.",
      author: "John Doe",
      category: "Politics",
      status: "published",
      views: "12.5K",
      date: "2024-01-15",
      featured: true,
      tags: ["politics", "rwanda", "breaking"],
    },
    {
      id: 2,
      title: "Sports Update: Local Team Wins Championship",
      content: "The local football team has achieved a remarkable victory in the championship finals.",
      excerpt: "Local team celebrates historic championship win after intense final match.",
      author: "Jane Smith",
      category: "Sports",
      status: "draft",
      views: "8.2K",
      date: "2024-01-14",
      featured: false,
      tags: ["sports", "football", "championship"],
    },
    {
      id: 3,
      title: "Health Alert: New Medical Guidelines Released",
      content: "Health authorities have released new guidelines for public health and safety.",
      excerpt: "New medical guidelines aim to improve public health outcomes nationwide.",
      author: "Dr. Mike Johnson",
      category: "Health",
      status: "published",
      views: "15.7K",
      date: "2024-01-13",
      featured: true,
      tags: ["health", "medical", "guidelines"],
    },
  ])

  // Load articles from localStorage on mount
  useEffect(() => {
    const savedArticles = localStorage.getItem("umuhoza-articles")
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles))
    }
  }, [])

  // Save articles to localStorage whenever articles change
  useEffect(() => {
    localStorage.setItem("umuhoza-articles", JSON.stringify(articles))
  }, [articles])

  const addArticle = (articleData: Omit<Article, "id" | "views" | "date">) => {
    const newArticle: Article = {
      ...articleData,
      id: Math.max(...articles.map((a) => a.id), 0) + 1,
      views: "0",
      date: new Date().toISOString().split("T")[0],
    }
    setArticles((prev) => [newArticle, ...prev])
  }

  const updateArticle = (id: number, updates: Partial<Article>) => {
    setArticles((prev) => prev.map((article) => (article.id === id ? { ...article, ...updates } : article)))
  }

  const deleteArticle = (id: number) => {
    setArticles((prev) => prev.filter((article) => article.id !== id))
  }

  const getArticle = (id: number) => {
    return articles.find((article) => article.id === id)
  }

  return (
    <AdminContext.Provider
      value={{
        articles,
        addArticle,
        updateArticle,
        deleteArticle,
        getArticle,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}
