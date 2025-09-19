"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function MediaPage() {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [mediaFiles, setMediaFiles] = useState<any[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleUpload = async () => {
    if (!files.length) return
    setUploading(true)

    for (const file of files) {
      const filePath = `uploads/${Date.now()}-${file.name}`

      // Upload file to Supabase storage
      const { error } = await supabase.storage
        .from("media") // 🔹 make sure bucket name = "media"
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        })

      if (error) {
        console.error("Upload error:", error.message)
        alert("Upload failed: " + error.message)
        continue
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("media")
        .getPublicUrl(filePath)

      const publicUrl = publicUrlData.publicUrl

      // Save metadata to "media" table
      const { error: dbError } = await supabase.from("media").insert([
        {
          name: file.name,
          type: file.type.split("/")[0], // "image", "video", "audio"
          url: publicUrl,
        },
      ])

      if (dbError) {
        console.error("DB insert error:", dbError.message)
        alert("Failed to save file in DB: " + dbError.message)
      } else {
        alert(`Uploaded ${file.name} successfully!`)
      }
    }

    setUploading(false)
    setFiles([])
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Media</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" multiple onChange={handleFileChange} />
          <Button
            className="mt-4"
            onClick={handleUpload}
            disabled={uploading || files.length === 0}
          >
            {uploading ? "Uploading..." : "Upload"}
            <Upload className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
