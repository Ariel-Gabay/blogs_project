import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Header from "./components/Header";
import "@/lib/styles/shared.scss";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "הַגֶּשֶׁר לִבְנֵי אָדָם",
  description: "נוצר עם Next.js",
  icons: {
    icon: "/head-light.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
