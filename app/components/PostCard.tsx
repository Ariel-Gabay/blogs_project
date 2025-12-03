import Link from "next/link";
import { Heart, Eye, CircleStar, CalendarPlus } from "lucide-react";

interface Props {
  post: PostPreview;
}

const PostCard = ({ post }: Props) => {
  return (
    post.published && (
      <Link key={post.id} href={post.slug} className="post-card">
        <div className="text">
          <p>{post.category_id}</p>
          <div className="w-full flex justify-between items-center">
            <CircleStar size={12} />
            <h1>{post.title}</h1>
            <CircleStar size={12} />
          </div>
          <h2>{post.sub_title}</h2>
        </div>
        <div className="icons">
          <div>
            <Eye />
            <p>{post.views}</p>
          </div>
          <div>
            <Heart />
            <p>{post.likes}</p>
          </div>
        </div>
      </Link>
    )
  );
};

export default PostCard;
