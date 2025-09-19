"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Save, Globe, Mail, Shield, Palette, Database, Bell, Upload } from "lucide-react"

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("UMUHOZA NEWS")
  const [siteDescription, setSiteDescription] = useState("Your trusted source for news and information")
  const [siteUrl, setSiteUrl] = useState("https://umuhoza.news")
  const [contactEmail, setContactEmail] = useState("contact@umuhoza.news")
  const [language, setLanguage] = useState("en")
  const [timezone, setTimezone] = useState("Africa/Kigali")

  const handleSaveSettings = (section: string) => {
    console.log(`Saving ${section} settings`)
    // Mock save functionality
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your website configuration and preferences</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Site Information
              </CardTitle>
              <CardDescription>Basic information about your news website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input id="siteName" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="siteUrl">Site URL</Label>
                  <Input id="siteUrl" value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} />
                </div>
              </div>
              <div>
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="language">Default Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="rw">Kinyarwanda</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select value={timezone} onValueChange={setTimezone}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Africa/Kigali">Africa/Kigali</SelectItem>
                    <SelectItem value="UTC">UTC</SelectItem>
                    <SelectItem value="America/New_York">America/New_York</SelectItem>
                    <SelectItem value="Europe/London">Europe/London</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={() => handleSaveSettings("general")}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Site Logo</CardTitle>
              <CardDescription>Upload your website logo and favicon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Main Logo</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Logo
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">PNG, SVG up to 2MB</p>
                  </div>
                </div>
                <div>
                  <Label>Favicon</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Favicon
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">ICO, PNG 32x32px</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5" />
                Theme Settings
              </CardTitle>
              <CardDescription>Customize the look and feel of your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Primary Color</Label>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-red-600 rounded border"></div>
                    <Input value="#dc2626" readOnly />
                  </div>
                </div>
                <div>
                  <Label>Secondary Color</Label>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-800 rounded border"></div>
                    <Input value="#1f2937" readOnly />
                  </div>
                </div>
              </div>
              <div>
                <Label>Font Family</Label>
                <Select defaultValue="inter">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="roboto">Roboto</SelectItem>
                    <SelectItem value="opensans">Open Sans</SelectItem>
                    <SelectItem value="lato">Lato</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label>Layout Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="dark-mode" />
                    <Label htmlFor="dark-mode">Enable Dark Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="sidebar-fixed" defaultChecked />
                    <Label htmlFor="sidebar-fixed">Fixed Sidebar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="breadcrumbs" defaultChecked />
                    <Label htmlFor="breadcrumbs">Show Breadcrumbs</Label>
                  </div>
                </div>
              </div>
              <Button onClick={() => handleSaveSettings("appearance")}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Configuration
              </CardTitle>
              <CardDescription>Configure email settings for notifications and newsletters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtpHost">SMTP Host</Label>
                  <Input id="smtpHost" placeholder="smtp.gmail.com" />
                </div>
                <div>
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input id="smtpPort" placeholder="587" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtpUser">SMTP Username</Label>
                  <Input id="smtpUser" placeholder="your-email@gmail.com" />
                </div>
                <div>
                  <Label htmlFor="smtpPass">SMTP Password</Label>
                  <Input id="smtpPass" type="password" placeholder="••••••••" />
                </div>
              </div>
              <div>
                <Label htmlFor="fromEmail">From Email Address</Label>
                <Input id="fromEmail" placeholder="noreply@umuhoza.news" />
              </div>
              <div className="space-y-3">
                <Label>Email Features</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Enable Newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="comment-notifications" defaultChecked />
                    <Label htmlFor="comment-notifications">Comment Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="user-registration" defaultChecked />
                    <Label htmlFor="user-registration">User Registration Emails</Label>
                  </div>
                </div>
              </div>
              <Button onClick={() => handleSaveSettings("email")}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security and authentication settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Authentication</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="two-factor" />
                    <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="password-reset" defaultChecked />
                    <Label htmlFor="password-reset">Allow Password Reset</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="login-attempts" defaultChecked />
                    <Label htmlFor="login-attempts">Limit Login Attempts</Label>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Content Security</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="comment-moderation" defaultChecked />
                    <Label htmlFor="comment-moderation">Comment Moderation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="spam-protection" defaultChecked />
                    <Label htmlFor="spam-protection">Spam Protection</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="content-backup" defaultChecked />
                    <Label htmlFor="content-backup">Automatic Content Backup</Label>
                  </div>
                </div>
              </div>
              <Button onClick={() => handleSaveSettings("security")}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure when and how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Admin Notifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="new-articles" defaultChecked />
                    <Label htmlFor="new-articles">New Article Submissions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="new-comments" defaultChecked />
                    <Label htmlFor="new-comments">New Comments</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="new-users" defaultChecked />
                    <Label htmlFor="new-users">New User Registrations</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="system-alerts" defaultChecked />
                    <Label htmlFor="system-alerts">System Alerts</Label>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>User Notifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="welcome-email" defaultChecked />
                    <Label htmlFor="welcome-email">Welcome Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="newsletter-signup" defaultChecked />
                    <Label htmlFor="newsletter-signup">Newsletter Confirmation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="comment-replies" defaultChecked />
                    <Label htmlFor="comment-replies">Comment Reply Notifications</Label>
                  </div>
                </div>
              </div>
              <Button onClick={() => handleSaveSettings("notifications")}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Advanced Configuration
              </CardTitle>
              <CardDescription>Advanced settings for developers and system administrators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Performance</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="caching" defaultChecked />
                    <Label htmlFor="caching">Enable Caching</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="compression" defaultChecked />
                    <Label htmlFor="compression">Enable Compression</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="lazy-loading" defaultChecked />
                    <Label htmlFor="lazy-loading">Lazy Load Images</Label>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>SEO & Analytics</Label>
                <div className="space-y-2">
                  <div>
                    <Label htmlFor="google-analytics">Google Analytics ID</Label>
                    <Input id="google-analytics" placeholder="G-XXXXXXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="google-search">Google Search Console</Label>
                    <Input id="google-search" placeholder="Verification code" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="sitemap" defaultChecked />
                    <Label htmlFor="sitemap">Generate XML Sitemap</Label>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>System Information</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-sm font-medium">Version</div>
                    <div className="text-sm text-gray-600">v1.0.0</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-sm font-medium">Database</div>
                    <div className="text-sm text-gray-600">Connected</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-sm font-medium">Storage</div>
                    <div className="text-sm text-gray-600">68MB / 1GB</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-sm font-medium">Last Backup</div>
                    <div className="text-sm text-gray-600">2024-01-15</div>
                  </div>
                </div>
              </div>
              <Button onClick={() => handleSaveSettings("advanced")}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
