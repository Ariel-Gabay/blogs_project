"use client";

import PostsPagination from "./components/PostsPagination";

const category: Category = {
  id: "cat-001",
  name: "טכנולוגיה ופיתוח",
  slug: "tech-development",
  description: "מאמרים, טיפים ותובנות מעולם הפיתוח והתוכנה",
};

const posts: PostPreview[] = [
  {
    id: "post-001",
    category_id: "cat-001",
    slug: "react-basics",
    published: true,
    created_at: "2025-01-01T10:00:00Z",
    title: "יסודות React למתחילים",
    views: 120,
    likes: 15,
  },
  {
    id: "post-002",
    category_id: "cat-001",
    slug: "nextjs-vs-react",
    published: true,
    created_at: "2025-01-03T09:30:00Z",
    title: "Next.js מול React – מה לבחור?",
    views: 98,
    likes: 12,
  },
  {
    id: "post-003",
    category_id: "cat-001",
    slug: "state-management",
    published: true,
    created_at: "2025-01-05T14:20:00Z",
    title: "ניהול סטייט נכון באפליקציות גדולות",
    views: 76,
    likes: 9,
  },
  {
    id: "post-004",
    category_id: "cat-001",
    slug: "css-tips",
    published: true,
    created_at: "2025-01-07T11:10:00Z",
    title: "טיפים מתקדמים ל־CSS נקי ויעיל",
    views: 65,
    likes: 7,
  },
  {
    id: "post-005",
    category_id: "cat-001",
    slug: "performance-web",
    published: true,
    created_at: "2025-01-10T08:45:00Z",
    title: "שיפור ביצועי אתרי ווב",
    views: 143,
    likes: 21,
  },
  {
    id: "post-006",
    category_id: "cat-001",
    slug: "typescript-guide",
    published: true,
    created_at: "2025-01-12T16:00:00Z",
    title: "מדריך מעשי ל־TypeScript",
    views: 110,
    likes: 18,
  },
  {
    id: "post-007",
    category_id: "cat-001",
    slug: "backend-basics",
    published: true,
    created_at: "2025-01-15T13:40:00Z",
    title: "היכרות עם עולם ה־Backend",
    views: 54,
    likes: 6,
  },
  {
    id: "post-008",
    category_id: "cat-001",
    slug: "databases-intro",
    published: true,
    created_at: "2025-01-18T10:25:00Z",
    title: "מבוא לבסיסי נתונים",
    views: 87,
    likes: 10,
  },
  {
    id: "post-009",
    category_id: "cat-001",
    slug: "api-design",
    published: true,
    created_at: "2025-01-20T09:00:00Z",
    title: "עקרונות לתכנון API איכותי",
    views: 69,
    likes: 8,
  },
  {
    id: "post-010",
    category_id: "cat-001",
    slug: "deployment-guide",
    published: true,
    created_at: "2025-01-22T17:15:00Z",
    title: "פריסה נכונה של אפליקציות לפרודקשן",
    views: 101,
    likes: 14,
  },
];

export default function ({ error }: { error: Error }) {
  return (
    <PostsPagination
      firstPagePosts={posts}
      categories={[category]}
      totalPages={posts.length}
    />
  );
}
