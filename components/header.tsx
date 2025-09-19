"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Sun, Moon, Globe, User } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocale, useTranslations } from "next-intl"

const mainMenuItems = [
  { key: "home", href: "/" },
  { key: "entertainment", href: "/entertainment" },
  { key: "sport", href: "/sport" },
  { key: "politics", href: "/politics" },
  { key: "health", href: "/health" },
  { key: "religion", href: "/religion" },
  { key: "business", href: "/business" },
  { key: "live", href: "/live" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const locale = useLocale()
  const t = useTranslations()

  const currentDate = new Date().toLocaleDateString(
    locale === "rw" ? "rw-RW" : "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top Bar */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">{currentDate}</div>
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Globe className="h-4 w-4" />
                    {locale.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/" locale="en">
                      English
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/" locale="rw">
                      Kinyarwanda
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* Login Button */}
              <Button
                variant="outline"
                size="sm"
                className="gap-1 bg-transparent"
              >
                <User className="h-4 w-4" />
                {t("login")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              UMUHOZA NEWS
            </h1>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder={t("searchPlaceholder")}
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Main Nav Menu */}
        <nav className="hidden md:flex gap-6 mt-4">
          {mainMenuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium hover:underline"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
