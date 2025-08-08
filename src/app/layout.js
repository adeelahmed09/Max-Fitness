import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";


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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
