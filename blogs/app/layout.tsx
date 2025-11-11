import { ReactNode } from "react";
import "./globals.css";

interface Props {
  children: ReactNode;
}

const Home = ({ children }: Props) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default Home;
