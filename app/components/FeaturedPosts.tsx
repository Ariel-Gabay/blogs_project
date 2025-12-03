import PostCard from "./PostCard";
import Title from "./Title";

const p1: PostPreview = {
  id: "1",
  category_id: "רפואה",
  created_at: "24 - 03 - 2003",
  likes: 34,
  published: true,
  slug: "/htrh",
  title: "פוסט 1",
  views: 234,
  sub_title: "זה פוסט יקרץ אחלה פוסטץ כדאי לקרואץ מאוד מעמיק",
};
const p2: PostPreview = {
  id: "2",
  category_id: "רפואה",
  created_at: "24 - 03 - 2003",
  likes: 34,
  published: true,
  slug: "/htrh",
  title: "פוסט 2",
  views: 234,
  sub_title: "זה פוסט יקרץ אחלה פוסטץ כדאי לקרואץ מאוד מעמיק",
};

const p3: PostPreview = {
  id: "3",
  category_id: "רפואה",
  created_at: "24 - 03 - 2003",
  likes: 34,
  published: true,
  slug: "/htrh",
  title: "פוסט 3 bvsdfbs bb נקגינקג נקגינק נקני נמקנ",
  views: 234,
  sub_title: "זה פוסט יקרץ אחלה פוסטץ כדאי לקרואץ מאוד מעמיק",
};

const FeaturedPosts = () => {
  return (
    <nav className="p-6">
      <Title string="פוסטים מובילים" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[p1, p2, p3].map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </nav>
  );
};

export default FeaturedPosts;
