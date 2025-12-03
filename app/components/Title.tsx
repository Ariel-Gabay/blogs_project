import { CircleStop } from "lucide-react";

interface Props {
  string: string;
}

const Title = ({ string }: Props) => {
  return (
    <div className="title-container">
      <CircleStop size={15} strokeWidth={3} />
      <h1>{string}</h1>
      <CircleStop size={15} strokeWidth={3} />
    </div>
  );
};

export default Title;
