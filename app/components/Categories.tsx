import CategoryCard from "./CategoryCard";

interface Props {
  categories: Category[];
}

const Categories = async ({ categories }: Props) => {
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
    <div className="w-full grid grid-cols-[repeat(auto-fill,_300px)] justify-center gap-2.5 py-20 categories-image bg-[length:70px]">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
