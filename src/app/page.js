"use client"

import Head from "next/head";
import HomeSection1 from "./components/HomeSection1";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Max Fitness Center</title>
      <meta
          name="description"
          content="Max Fitness Center in Islampura, Lahore offers expert trainers, modern gym machines, and personalized fitness plans to help you stay fit and strong."
        />
        <meta
          name="keywords"
          content="gym in Islampura, Lahore gym, Max Fitness Center, fitness center, personal training, best gym in Lahore"
        />
    </Head>
    <div className="w-screen h-[200vh]  relative">
      <HomeSection1/>
    </div>
    </>
  );
}