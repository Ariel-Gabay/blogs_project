import { CalendarArrowUp, Eye, Heart, LibraryBig } from "lucide-react";
import styles from "../styles/posts-pagination-card.module.css";
import Link from "next/link";

const formatDate = (iso: string): string => {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")}-${String(
    d.getMonth() + 1
  ).padStart(2, "0")}-${d.getFullYear()}`;
};

interface Props {
  post: PostPreview;
  categories: Category[];
}

const PostsPaginationCard = ({ post, categories }: Props) => {
  const categoryName = categories.find((c) => c.id === post.category_id)?.name;

  return (
    // <div className={styles.wrapper}>
    <Link href={`${categoryName}/${post.slug}`} className={styles.card}>
      <div className={styles.contentArea}>
        <div className={styles.statsRow}>
          <div className={styles.iconTextGroup}>
            <LibraryBig className={styles.icon} />
            <p className={styles.iconText}>{categoryName}</p>
          </div>
        </div>
        <div className={styles.headingArea}>
          <h2 className={styles.title}>{post.title}</h2>
          <h3 className={styles.subtitle}>{post.sub_title}</h3>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.iconTextGroup}>
            <Eye className={styles.icon} />
            <p className={styles.iconText}>{post.views}</p>
          </div>
          <div className={styles.iconTextGroup}>
            <CalendarArrowUp className={styles.icon} />
            <p className={styles.iconText}>{formatDate(post.created_at)}</p>
          </div>
          <div className={styles.iconTextGroup}>
            <Heart className={styles.icon} />
            <p className={styles.iconText}>{post.likes}</p>
          </div>
        </div>
      </div>
      {/* אזור תמונה/איור - כרגע רק רקע צבעוני */}
      <div className={styles.imageArea}></div>
    </Link>
    // </div>
  );
};

export default PostsPaginationCard;
