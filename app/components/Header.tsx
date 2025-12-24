import { Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import styles from "@/lib/styles/Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.imageLight} />
        <div className={styles.imageDark} />
        <p>הַגֶּשֶׁר לִבְנֵי אָדָם</p>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
