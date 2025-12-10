import PostsPagination from "./PostsPagination";
import { supabase } from "../../lib/supabase/clientServer";

interface Props {
  categories: Category[];
}

const Posts = async ({ categories }: Props) => {
  const { data, error } = await supabase
    .from("posts")
    .select("category_id, created_at, id, likes, title, sub_title, slug, views")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(10);

  const firstPagePosts = data as PostPreview[];

  const { count } = await supabase
    .from("posts")
    .select("*", { count: "exact", head: true })
    .eq("published", true);

  return (
    <PostsPagination
      firstPagePosts={firstPagePosts}
      categories={categories}
      totalPages={Math.ceil((count ?? 0) / 10)}
    />
  );
};

export default Posts;
