"use client";

import { Button } from "../../components/ui/button";
import { supabase } from "../../lib/supabase/clientBrowser";
import { useEffect, useState } from "react";
import PostsPaginationCard from "./PostsPaginationCard";

interface Props {
  categories: Category[];
  firstPagePosts: PostPreview[];
  totalPages: number;
}

const PostsPagination = ({ categories, firstPagePosts, totalPages }: Props) => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [posts, setPosts] = useState<PostPreview[]>(firstPagePosts);

  useEffect(() => {
    if (pageIndex === 1) {
      setPosts(firstPagePosts);
      return;
    }

    (async () => {
      const from = (pageIndex - 1) * 10;
      const to = from + 9;
      const { data } = await supabase
        .from("posts")
        .select(
          "category_id, created_at, id, likes, title, sub_title, slug, views"
        )
        .eq("published", true)
        .order("created_at", { ascending: false })
        .range(from, to);

      setPosts(data as PostPreview[]);
    })();
  }, [pageIndex]);

  return (
    <div className="pagination">
      <div className="pagination-cards">
        {posts.map((post, index) => (
          <>
            <PostsPaginationCard
              key={post.id}
              post={post}
              categories={categories}
            />
          </>
        ))}
      </div>
      <div className="pagination-actions">
        <Button>{"<"}</Button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            className={pageIndex === index + 1 ? "red" : ""}
            onClick={() => setPageIndex(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button>{">"}</Button>
      </div>
    </div>
  );
};

export default PostsPagination;
