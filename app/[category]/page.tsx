import { supabase } from "../../lib/supabase/clientServer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { category: string };
}

const Category = async ({ params }: Props) => {
  const { category: slug } = await Promise.resolve(params);

  const { data: dataCategory } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", decodeURIComponent(slug))
    .single();

  if (!dataCategory) return notFound();

  const category = dataCategory as Category;

  const { data: dataPosts } = await supabase
    .from("posts")
    .select("*")
    .eq("category_id", category.id)
    .eq("published", true)
    .order("created_at", { ascending: false });

  const posts = dataPosts as PostPreview[];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
      {category.description && (
        <p className="text-gray-600 mb-6">{category.description}</p>
      )}

      {(!posts || posts.length === 0) && <div>אין פוסטים להצגה</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(posts as PostPreview[])?.map((post) => (
          <Link
            key={post.id}
            href={`/${category.slug}/${post.slug}`}
            className="block border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {post.cover_image && (
              <img
                src={post.cover_image.src}
                alt={post.cover_image.alt}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
            {post.sub_title && (
              <p className="text-gray-600">{post.sub_title}</p>
            )}
            <p className="text-sm text-gray-400 mt-2">
              {new Date(post.created_at).toLocaleDateString()} • {post.views}{" "}
              צפיות • {post.likes} לייקים
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
