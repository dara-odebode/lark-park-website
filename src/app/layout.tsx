import type { Metadata } from "next";
import { Hammersmith_One, Prompt} from "next/font/google";
import "./globals.css";

//fonts

const hammersmith = Hammersmith_One({
  weight: "400",
  subsets: ["latin"],
})

const prompt = Prompt({
  weight: "400",
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={hammersmith.className}>{children}</body>
      <body className={prompt.className}>{children}</body>
    </html>
  );
}

//nav bar
