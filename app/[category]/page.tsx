import { createClient } from "@/lib/supabaseClient";
import Link from "next/link";

interface PageProps {
  params: { category: string };
}

export default async function CategoryPage({ params }: PageProps) {
  const supabase = createClient();

  // Map category slugs to human-readable names
  const categories: Record<string, string> = {
    business: "Business",
    entertainment: "Entertainment",
    health: "Health",
    live: "Live",
    politics: "Politics",
    religion: "Religion",
    sport: "Sport",
  };

  const category = params.category;
  const categoryName = categories[category] || "Unknown";

  // Fetch articles from Supabase
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="p-6 text-red-600">Error loading articles: {error.message}</div>;
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">{categoryName}</h1>
        <p className="mt-2">No articles found in this category.</p>
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{categoryName}</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">{article.content}</p>
            <p className="text-sm text-gray-400 mt-2">
              Published: {new Date(article.created_at).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>
    </div>
  );
}
