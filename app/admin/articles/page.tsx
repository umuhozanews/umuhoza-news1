"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AdminArticlesPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Please fill in all fields")
      return
    }

    setUploading(true)

    let imageUrl = null

    if (file) {
      const filePath = `articles/${Date.now()}-${file.name}`
      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, file)

      if (uploadError) {
        alert("Upload failed: " + uploadError.message)
        setUploading(false)
        return
      }

      const { data: publicUrlData } = supabase.storage
        .from("media")
        .getPublicUrl(filePath)

      imageUrl = publicUrlData.publicUrl
    }

    // Insert into Supabase table
    const { error: insertError } = await supabase.from("articles").insert([
      {
        title,
        content,
        image_url: imageUrl, // ✅ match your DB column
      },
    ])

    if (insertError) {
      alert("Failed to add article: " + insertError.message)
    } else {
      alert("Article added successfully!")
      setTitle("")
      setContent("")
      setFile(null)
    }

    setUploading(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Article</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Article Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Input type="file" onChange={handleFileChange} />
          <Button onClick={handleSubmit} disabled={uploading}>
            {uploading ? "Saving..." : "Save Article"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
