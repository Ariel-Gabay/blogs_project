import { supabase } from "@/lib/supabase/clientServer";
import CategoryCard from "./CategoryCard";
import Title from "./Title";

const Categories = async () => {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) return <div>שגיאה בטעינת הקטגוריות: {error.message}</div>;
  if (!data || data.length === 0) return <div>אין קטגוריות להצגה</div>;

  const categories = data as Category[];
  // const c1: Category = {
  //   id: "1",
  //   name: "name",
  //   slug: "fdfdfd/gdfg",
  //   description: "ujnyjnfy gthgre htherth ",
  //   image: { src: "/image-1.png", alt: "nubv" },
  // };
  // const c2: Category = {
  //   id: "2",
  //   name: "name",
  //   slug: "fdfdfd/gdfg",
  //   description: "ujnyjnfy gthgre htherth ",
  //   image: { src: "/image-2.png", alt: "nubv" },
  // };
  // const c3: Category = {
  //   id: "3",
  //   name: "name",
  //   slug: "fdfdfd/gdfg",
  //   description: "ujnyjnfy gthgre htherth ",
  //   image: { src: "/image-3.png", alt: "nubv" },
  // };
  // const c4: Category = {
  //   id: "4",
  //   name: "name",
  //   slug: "fdfdfd/gdfg",
  //   description: "ujnyjnfy gthgre htherth ",
  //   image: { src: "/image-4.png", alt: "nubv" },
  // };
  // const c5: Category = {
  //   id: "5",
  //   name: "זה קטגוריה ראשונה מספר 1",
  //   slug: "fdfdfd/gdfg",
  //   description: " זה הקדעמה עגג עגדעג, זה התיאור של הקטגוריה, זה בהחלט מעניין",
  //   image: { src: "/image-5.png", alt: "nubv" },
  // };
  // const c6: Category = {
  //   id: "6",
  //   name: "name",
  //   slug: "fdfdfd/gdfg",
  //   description: "ujnyjnfy gthgre htherth ",
  //   image: { src: "/image-6.png", alt: "nubv" },
  // };

  return (
    <nav className="p-6">
      <Title string="עולמות תוכן" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </nav>
  );
};

export default Categories;
