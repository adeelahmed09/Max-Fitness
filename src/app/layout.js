import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";


export const metadata = {
  title: "Max Fitness Center – Top Gym in Islampura, Lahore",
  description: "Max Fitness Center in Islampura, Lahore offers expert trainers, modern gym machines, and personalized fitness plans to help you stay fit and strong.",
  keywords: ["gym in Islampura", "Lahore gym", "Max Fitness Center", "fitness center", "personal training", "best gym in Lahore"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
