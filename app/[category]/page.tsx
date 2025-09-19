// app/[category]/page.tsx
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    category: string;
  };
};

// List of categories we allow
const VALID_CATEGORIES = [
  "business",
  "sport",
  "politics",
  "health",
  "entertainment",
  "religion",
  "live",
];

export default async function CategoryPage({ params }: PageProps) {
  const { category } = params;

  // ✅ check if category is valid
  if (!VALID_CATEGORIES.includes(category)) {
    notFound();
  }

  // ✅ fetch articles from Supabase
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .eq("category", category);

  if (error) {
    console.error(error);
    return <p className="text-red-500">Failed to load articles</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold capitalize mb-4">{category}</h1>

      {articles && articles.length > 0 ? (
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.id} className="border-b pb-2">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-muted-foreground">{article.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles found in {category}</p>
      )}
    </main>
  );
}
