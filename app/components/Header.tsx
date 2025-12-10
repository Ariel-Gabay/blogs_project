import { Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <nav className="z-50 bg-white/50 fixed left-0 w-full h-[var(--header-hight)] p-[3px] flex items-center justify-around backdrop-blur-lg shadow-md">
      <div></div>
      <div>
        <p className="blue">הַגֶּשֶׁר לִבְנֵי אָדָם</p>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
