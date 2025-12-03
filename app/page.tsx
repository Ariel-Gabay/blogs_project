import Categories from "./components/Categories";
import FeaturedPosts from "./components/FeaturedPosts";
import Gate from "./components/Gate";

const Home = () => {
  return (
    <main className="min-h-screen pt-[80px]">
      <Gate />
      <FeaturedPosts />
      <Categories />
    </main>
  );
};

export default Home;
