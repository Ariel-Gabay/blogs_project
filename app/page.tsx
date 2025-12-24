import Gate from "./components/Gate";
import Posts from "./components/Posts";
import { categories } from "@/lib/mock";
import Categories from "./components/Categories";
import PuzzleTile from "./components/PuzzleTile";

const Home = async () => {
  // const { data, error } = await supabase.from("categories").select("*");
  // const categories = data as Category[];

  return (
    <main>
      <Gate />
      <Posts categories={categories} />
      <Categories categories={categories} />
      <input type="file" />
      <PuzzleTile index="1" top right bottom left />
      <PuzzleTile
        index="2"
        top={false}
        right={false}
        bottom={false}
        left={false}
      />
    </main>
  );
};

export default Home;
