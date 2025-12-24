import PostsPagination from "./PostsPagination";
import { posts } from "@/lib/mock";
import Title from "./Title";

interface Props {
  categories: Category[];
}

const Posts = async ({ categories }: Props) => {
  // const { data, error } = await supabase
  //   .from("posts")
  //   .select("category_id, update_at, id, likes, title, sub_title, slug, views")
  //   .eq("published", true)
  //   .order("update_up", { ascending: false })
  //   .limit(6);
  // const firstPagePosts = data as PostPreview[];
  const firstPagePosts = posts.slice(0, 6);

  // const { count } = await supabase
  //   .from("posts")
  //   .select("*", { count: "exact", head: true })
  //   .eq("published", true);
  const count = posts.length;

  return (
    <>
      <Title string="פוסטים" />
      <PostsPagination
        categories={categories}
        firstPagePosts={firstPagePosts}
        totalPages={Math.ceil((count ?? 0) / 6)}
      />
    </>
  );
};

export default Posts;
