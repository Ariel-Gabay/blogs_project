import { ReactNode } from "react";
import Header from "./components/Header";
import "@/lib/styles/shared.scss";

interface Props {
  children: ReactNode;
}

const Home = async ({ children }: Props) => {
  return (
    <html dir="rtl" lang="he" suppressHydrationWarning>
      <head>
        {/* <Script id="theme-logic" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const theme = localStorage.getItem("theme");
                const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === "dark" || (!theme && supportDarkMode)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch (e) {}
            })();
          `}
        </Script> */}
        <title>הַגֶּשֶׁר לִבְנֵי אָדָם</title>
      </head>
      <body>
        {/* <Providers> */}
        <Header />
        {children}
        {/* </Providers> */}
      </body>
    </html>
  );
};

export default Home;
