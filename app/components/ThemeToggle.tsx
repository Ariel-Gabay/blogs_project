"use client";

import { Button } from "../../components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark((isDark) => !isDark);
  };

  return (
    <Button onClick={toggleTheme} style={{ zIndex: 51 }}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggle;
