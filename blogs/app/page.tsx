import PostEditor from "@/lib/components/PostEditor";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <Categories />
      <PostEditor id={null} />
    </>
  );
};

export default Home;
