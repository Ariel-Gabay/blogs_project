"use client";

import { useEffect, useState } from "react";
import PostsPaginationCard from "./PostsPaginationCard";
import styles from "@/lib/styles/PostsPagination.module.scss";
import { posts as postsM } from "@/lib/mock";

interface Props {
  categories: Category[];
  firstPagePosts: PostPreview[];
  totalPages: number;
}

const PostsPagination = ({ categories, firstPagePosts, totalPages }: Props) => {
  const [posts, setPosts] = useState<PostPreview[]>(firstPagePosts);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const isLastPage = pageIndex === totalPages;

  useEffect(() => {
    if (pageIndex === 1) {
      return;
    }
    (async () => {
      const from = (pageIndex - 1) * 6;
      const to = from + 5;
      // const { data } = await supabase
      //   .from("posts")
      //   .select(
      //     "category_id, update_up, id, likes, title, sub_title, slug, views"
      //   )
      //   .eq("published", true)
      //   .order("update_up", { ascending: false })
      //   .range(from, to);
      // setPosts(data as PostPreview[]);
      setPosts(postsM.slice(from, to + 1));
    })();
  }, [pageIndex]);

  return (
    <div className={styles.pagination}>
      <div
        className={`${styles.paginationCards} ${
          isLastPage ? styles.isLastPage : ""
        }`}
      >
        {posts.map((post) => (
          <PostsPaginationCard
            key={post.id}
            post={post}
            categories={categories}
          />
        ))}
      </div>
      <div className={styles.paginationActions}>
        <button
          className={`iconButton ${pageIndex === totalPages ? "disable" : ""}`}
          onClick={() => setPageIndex((prev) => prev + 1)}
          disabled={pageIndex === totalPages}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages })
          .map((_, index) => (
            <button
              key={index}
              className={`iconButton ${
                pageIndex === index + 1 ? "presses" : ""
              }`}
              onClick={() => setPageIndex(index + 1)}
            >
              {index + 1}
            </button>
          ))
          .reverse()}
        <button
          className={`iconButton ${pageIndex === 1 ? "disable" : ""}`}
          onClick={() => setPageIndex((prev) => prev - 1)}
          disabled={pageIndex === 1}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PostsPagination;
