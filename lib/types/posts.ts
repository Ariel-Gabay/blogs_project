type Category = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: { src: string; alt: string };
};

type PostPreview = {
  id: string;
  category_id: string;
  slug: string;
  published: boolean;
  updated_at: string;
  title: string;
  sub_title?: string;
  cover_image?: { src: string; alt: string };
  views: number;
  likes: number;
};

type PostBlock =
  | { type: "sectionTitle" | "paragraph" | "special_paragraph"; text: string }
  | { type: "image"; src: string; alt: string };

type Post = PostPreview & {
  content: PostBlock[];
};

type PostComment = {
  id: string;
  post_id: string;
  parent_id: string | null;
  published: boolean;
  created_at: string;
  name: string;
  text: string;
  likes: number;
};
