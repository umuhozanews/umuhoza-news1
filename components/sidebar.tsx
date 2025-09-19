import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Star } from "lucide-react"

const mostReadArticles = [
  {
    id: 1,
    title: "Rwanda's Economic Growth Reaches New Heights in 2024",
    category: "Business",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Local Football Team Wins Regional Championship",
    category: "Sport",
    readTime: "2 min read",
  },
  {
    id: 3,
    title: "New Healthcare Initiative Launched Nationwide",
    category: "Health",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Technology Innovation Hub Opens in Kigali",
    category: "Business",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "Cultural Festival Celebrates Rwandan Heritage",
    category: "Entertainment",
    readTime: "2 min read",
  },
]

const editorsChoice = [
  {
    id: 1,
    title: "Climate Change Impact on Agriculture",
    category: "Politics",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Youth Entrepreneurship on the Rise",
    category: "Business",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Digital Education Revolution",
    category: "Health",
    readTime: "3 min read",
  },
]

export function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Most Read */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-accent" />
            Most Read
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mostReadArticles.map((article, index) => (
            <div key={article.id} className="flex gap-3 pb-3 border-b border-border last:border-b-0 last:pb-0">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium line-clamp-2 mb-1">{article.title}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Editor's Choice */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Star className="h-5 w-5 text-accent" />
            Editor's Choice
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {editorsChoice.map((article) => (
            <div key={article.id} className="pb-3 border-b border-border last:border-b-0 last:pb-0">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">{article.title}</h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="text-xs">
                  {article.category}
                </Badge>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  )
}
