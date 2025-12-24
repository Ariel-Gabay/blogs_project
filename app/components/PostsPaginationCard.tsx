import { CalendarArrowUp, Eye, Heart, LibraryBig } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils/formatDate";
import styles from "@/lib/styles/PostsPagination.module.scss";

interface Props {
  post: PostPreview;
  categories: Category[];
}

const PostsPaginationCard = ({ post, categories }: Props) => {
  const categoryName = categories.find((c) => c.id === post.category_id)?.name;

  return (
    <Link href={`${categoryName}/${post.slug}`} className={styles.card}>
      <h2 className={styles.heading}>
        <span className={styles.title}>{post.title}</span>
        <br />
        <span className={styles.subTitle}>{post.sub_title}</span>
      </h2>
      <Image
        src="/image-1.png"
        alt="!"
        height={100}
        width={100}
        className={styles.image}
      />
      <div className={styles.iconsRow}>
        <div className={styles.iconTextGroup}>
          <LibraryBig className={styles.icon} />
          <p className={styles.iconText}>{categoryName}</p>
        </div>
        <div className={styles.iconTextGroup}>
          <Eye className={styles.icon} />
          <p className={styles.iconText}>{post.views}</p>
        </div>
        <div className={styles.iconTextGroup}>
          <Heart className={styles.icon} />
          <p className={styles.iconText}>{post.likes}</p>
        </div>
        <div className={styles.iconTextGroup}>
          <CalendarArrowUp className={styles.icon} />
          <p className={styles.iconText}>{formatDate(post.updated_at)}</p>
        </div>
      </div>
      <div />
    </Link>
  );
};

export default PostsPaginationCard;
