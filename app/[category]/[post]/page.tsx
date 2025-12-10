import { notFound } from "next/navigation";
import { supabase } from "../../../lib/supabase/clientServer";

interface Props {
  params: { category: string; post: string };
}

const Post = async ({ params }: Props) => {
  const { post: postSlug } = await Promise.resolve(params);

  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", decodeURIComponent(postSlug))
    .eq("published", true)
    .single();

  if (!data) return notFound();

  const post = data as Post;

  return (
    <div
      className="p-6 max-w-4xl mx-auto "
      style={{ top: "150px", color: "var(--light)" }}
    >
      <h1
        className="text-4xl font-bold mb-4"
        style={{ fontSize: "var(--size-xxl)" }}
      >
        {post.title}
      </h1>
      {post.sub_title && (
        <h2
          className="text-xl text-gray-600 mb-6"
          style={{ fontSize: "var(--size-xl)", color: "var(--light)" }}
        >
          {post.sub_title}
        </h2>
      )}
      {post.cover_image && (
        <img
          src={post.cover_image.src}
          alt={post.cover_image.alt}
          className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg"
        />
      )}

      <div className="space-y-6">
        {post.content.map((block: PostBlock, index: number) => {
          switch (block.type) {
            case "sectionTitle":
              return (
                <h3
                  key={index}
                  className="text-2xl font-semibold"
                  style={{ fontSize: "var(--size-lg)", color: "var(--light)" }}
                >
                  {block.text}
                </h3>
              );
            case "paragraph":
              return (
                <p
                  key={index}
                  className="text-gray-700"
                  style={{ fontSize: "var(--size-md)", color: "var(--light)" }}
                >
                  {block.text}
                </p>
              );
            case "special_paragraph":
              return (
                <p
                  key={index}
                  className="text-gray-900 font-semibold bg-gray-100 p-4 rounded"
                  style={{ fontSize: "var(--size-md)", color: "var(--light)" }}
                >
                  {block.text}
                </p>
              );
            case "image":
              return (
                <img
                  key={index}
                  src={block.src}
                  alt={block.alt}
                  className="w-full object-cover rounded-xl shadow"
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Post;
