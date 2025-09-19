"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  ImageIcon,
  DollarSign,
  Users,
  Settings,
  Search,
  Menu,
  Bell,
  LogOut,
  User,
} from "lucide-react"
import { AdminProvider } from "@/contexts/admin-context"

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Articles", href: "/admin/articles", icon: FileText },
  { name: "Categories", href: "/admin/categories", icon: FolderOpen },
  { name: "Media Library", href: "/admin/media", icon: ImageIcon },
  { name: "Advertisements", href: "/admin/ads", icon: DollarSign },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    try {
      const adminToken = localStorage.getItem("admin_token")
      if (adminToken) {
        setIsAuthenticated(true)
      }
    } catch (err) {
      console.error("Error checking authentication:", err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (email === "admin@umuhoza.com" && password === "admin123") {
      try {
        localStorage.setItem("admin_token", "mock_token")
        setIsAuthenticated(true)
        console.log("[v0] Admin login successful")
      } catch (err) {
        setError("Failed to save login session. Please try again.")
        console.error("[v0] Login error:", err)
      }
    } else {
      setError("Invalid credentials. Please use admin@umuhoza.com / admin123")
    }
  }

  const handleLogout = () => {
    try {
      localStorage.removeItem("admin_token")
      setIsAuthenticated(false)
      router.push("/admin")
    } catch (err) {
      console.error("Logout error:", err)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">UMUHOZA NEWS</h2>
            <p className="mt-2 text-sm text-gray-600">Admin Dashboard Login</p>
          </div>

          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@umuhoza.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full"
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
              Sign in to Admin Panel
            </Button>
            <div className="text-center">
              <p className="text-xs text-gray-500">Demo Credentials:</p>
              <p className="text-sm font-medium text-gray-700">admin@umuhoza.com / admin123</p>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <AdminProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex h-screen bg-gray-100">
          {/* Desktop Sidebar */}
          <div className="hidden md:flex md:w-64 md:flex-col">
            <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-xl font-bold text-red-600">UMUHOZA ADMIN</h1>
              </div>
              <div className="mt-8 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  {sidebarItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                          isActive ? "bg-red-100 text-red-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <item.icon
                          className={`mr-3 h-5 w-5 ${
                            isActive ? "text-red-500" : "text-gray-400 group-hover:text-gray-500"
                          }`}
                        />
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Top Navigation */}
            <header className="bg-white shadow-sm border-b">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                  {/* Mobile menu button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64">
                      <div className="py-4">
                        <h2 className="text-lg font-semibold text-red-600 mb-4">UMUHOZA ADMIN</h2>
                        <nav className="space-y-1">
                          {sidebarItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
                            >
                              <item.icon className="mr-3 h-5 w-5" />
                              {item.name}
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* Search */}
                  <div className="relative ml-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="search" placeholder="Search..." className="pl-10 w-64" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Notifications */}
                  <Button variant="ghost" size="sm">
                    <Bell className="h-5 w-5" />
                  </Button>

                  {/* User Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/admin-avatar.jpg" alt="Admin" />
                          <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">Admin User</p>
                          <p className="text-xs leading-none text-muted-foreground">admin@umuhoza.com</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </Suspense>
    </AdminProvider>
  )
}
