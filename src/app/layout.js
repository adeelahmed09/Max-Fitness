import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";


export const metadata = {
  title: "Max-Fitness-Center",
  description: "",
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
