import Link from "next/link";
import Categories from "./components/Categories";
import Gate from "./components/Gate";
import { CircleSlash } from "lucide-react";
import Posts from "./components/Posts";
import { supabase } from "../lib/supabase/clientServer";
import PostsPaginationCard from "./components/PostsPaginationCard";
import styles from "@/app/styles/posts-pagination-card.module.css";

const Home = async () => {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) return <div>שגיאה בטעינת הקטגוריות: {error.message}</div>;
  if (!data || data.length === 0) return <div>אין קטגוריות להצגה</div>;

  const categories = data as Category[];

  return (
    <main className="min-h-screen">
      {/* <div style={{ display: "flex", marginBottom: "1px" }}>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "var(--blue-dark)",
            color: "var(--burgundy-light)",
          }}
        >
          aaa
        </div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "var(--blue)",
            color: "var(--burgundy-light)",
          }}
        >
          aaa
        </div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "var(--blue-light)",
            color: "var(--burgundy-dark)",
          }}
        >
          aaa
        </div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "var(--blue-transparent)",
            color: "var(--blue-dark)",
          }}
        >
          aaa
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "var(--beige)",
            color: "var(--blue-dark)",
          }}
        >
          a
        </div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "var(--cadetblue)",
            color: "var(--blue-light)",
          }}
        >
          aaa
        </div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "var(--burgundy)",
            color: "var(--blue-dark)",
          }}
        >
          fff
        </div>
      </div> */}
      <div
        style={{
          height: "50px",
          width: "100%",
        }}
      ></div>

      {/* <Gate /> */}
      <Posts categories={categories} />
      {/* <div
        style={{
          height: "250px",
          width: "100%",
        }}
      ></div> */}
      <Categories categories={categories} />
    </main>
  );
};

export default Home;
