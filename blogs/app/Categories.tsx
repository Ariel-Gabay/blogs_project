import Link from "next/link";
import { supabase } from "@/lib/supabase/clientServer";

const Categories = async () => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) return <div>שגיאה בטעינת הקטגוריות: {error.message}</div>;
  if (!categories || categories.length === 0)
    return <div>אין קטגוריות להצגה</div>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">קטגוריות</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(categories as Category[]).map((cat) => (
          <Link
            key={cat.id}
            href={`/${cat.slug}`}
            className="block border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {cat.image && (
              <img
                src={cat.image.src}
                alt={cat.image.alt}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{cat.name}</h2>
            {cat.description && (
              <p className="text-gray-600">{cat.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
