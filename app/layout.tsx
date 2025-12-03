import { ReactNode } from "react";
import Header from "./components/Header";
import "./globals.css";

interface Props {
  children: ReactNode;
}

const Home = async ({ children }: Props) => {
  return (
    <html dir="rtl" lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Home;
