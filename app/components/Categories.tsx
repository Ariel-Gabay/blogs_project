import CategoryCard from "./CategoryCard";
import styles from "@/lib/styles/Categories.module.scss";
import Title from "./Title";

interface Props {
  categories: Category[];
}

const Categories = async ({ categories }: Props) => {
  return (
    <>
      <Title string="עולמות תוכן" />
      <div className={styles.categories}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default Categories;
