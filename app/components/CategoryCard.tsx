import Link from "next/link";
import { CircleSlash } from "lucide-react";
import styles from "@/lib/styles/Categories.module.scss";

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link
      key={category.id}
      href={`/${category.slug}`}
      className={styles.categoryCardLink}
    >
      <div
        className={`${styles.categoryCardContainer} ${styles.categoryHover}`}
      >
        <div className={styles.categoryCardDiv}>
          <CircleSlash size={5} />
        </div>
        <div />
        <div className={`${styles.categoryCardDiv} ${styles.rotate90}`}>
          <CircleSlash size={5} />
        </div>
        <div />
        <div className={styles.categoryCardDiv}>
          <h1>{category.name}</h1>
        </div>
        <div />
        <div />
        <div className={styles.categoryCardDiv}>
          <h2>{category.description}</h2>
        </div>
        <div />
        <div className={`${styles.categoryCardDiv} ${styles.rotate90}`}>
          <CircleSlash size={5} />
        </div>
        <div />
        <div className={styles.categoryCardDiv}>
          <CircleSlash size={5} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
