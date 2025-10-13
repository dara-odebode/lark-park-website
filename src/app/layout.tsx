import type { Metadata } from "next";
import { Hammersmith_One, Prompt} from "next/font/google";
import "./globals.css";

//fonts

const hammersmith = Hammersmith_One({
  weight: "400",
  subsets: ["latin"],
})

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (  
    <html lang="en">
      {/* both fonts */}
      <body className={`${hammersmith.className} ${prompt.className}`}>
      {children} {/* main content */}
      </body>
    </html>
  );
}

