import type { Metadata } from "next";
import React from "react";
import { Hammersmith_One, Prompt} from "next/font/google"; //both fonts
import "./globals.css";
import { Footer7 } from "@/components/Footer7"; 

//fonts

const hammersmith = Hammersmith_One({
  weight: "400",
  subsets: ["latin"],
})

  export const metadata = {
    title: {
    default: "Lark Park Theatre",
    template: "%s | Lark Park Theatre",
      },
    icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  }
}

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
      <Footer7 /> {/* footer component */} 
    </body>
  </html>
 );
}

