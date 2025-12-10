import Link from "next/link";
import { CircleSlash } from "lucide-react";

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link
      key={category.id}
      href={`/${category.slug}`}
      className="border border-[0.5px] border-[var(--cadetblue)] rounded-[5px]"
    >
      <div className="h-[200px] bg-[var(--dark)] rounded-[5px] grid grid-cols-[30px_1fr_30px] grid-rows-[30px_3fr_4fr_30px] category-hover">
        <div className="category-card-div">
          <CircleSlash size={5} />
        </div>
        <div />
        <div className="category-card-div transform rotate-90">
          <CircleSlash size={5} />
        </div>
        <div />
        <div className="category-card-div">
          <h1
            className="font-bold text-center"
            style={{ fontSize: "var(--size-xl)", color: "var(--light)" }}
          >
            {category.name}
          </h1>
        </div>
        <div />
        <div />
        <div className="category-card-div">
          <h2
            className="text-center"
            style={{ fontSize: "var(--size-md)", color: "var(--light)" }}
          >
            {category.description}
          </h2>
        </div>
        <div />
        <div className="category-card-div transform rotate-90">
          <CircleSlash size={5} />
        </div>
        <div />
        <div className="category-card-div">
          <CircleSlash size={5} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
