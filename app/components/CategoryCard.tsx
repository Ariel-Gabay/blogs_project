import Link from "next/link";
import Image from "next/image";
import { CircleSlash } from "lucide-react";

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link
      key={category.id}
      href={`/${category.slug}`}
      className="category-card"
    >
      <div>
        <CircleSlash size={12} />
      </div>
      <div></div>
      <div className="transform rotate-90">
        <CircleSlash size={12} />
      </div>
      <div></div>
      <div>
        {category.image && (
          <Image
            src={category.image.src}
            alt={category.image.alt}
            width={2000}
            height={1000}
          />
        )}
      </div>
      <div></div>
      <div></div>
      <div>
        <h1>{category.name}</h1>
        <h2>{category.description}</h2>
      </div>
      <div></div>
      <div className="transform rotate-90">
        <CircleSlash size={12} />
      </div>
      <div></div>
      <div>
        <CircleSlash size={12} />
      </div>
    </Link>
  );
};

export default CategoryCard;
