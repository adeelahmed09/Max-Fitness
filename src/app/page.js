"use client"

import Head from "next/head";
import HomeSection1 from "./components/HomeSection1";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Max Fitness Center</title>
    </Head>
    <div className="w-screen h-[200vh]  relative">
      <HomeSection1/>
    </div>
    </>
  );
}