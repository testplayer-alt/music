"use client"; // クライアントコンポーネントとして明示

import Buttons from "@/components/ui/comp/pagebutton";
import { useEffect, useState } from "react";
import Header from "./contents/header";

import beige from "@/components/images/bg_beige.png";
import blue from "@/components/images/bg_blue.png";
import white from "@/components/images/bg_white.png";
import yellow from "@/components/images/bg_yellow.png";




export default function Home() {
  const [videoSources, setVideoSources] = useState<string | undefined>(undefined);
  useEffect(() => {
    setVideoSources("https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/sakuru.mp4?alt=media&token=32b11945-9788-4494-b1cd-fa89cde06c80")
  }, []);
  return (<>
    <div>
      <Header />
      <div className="h-[100vh] w-full relative grid grid-rows-10">
        <p className="title w-fit grid place-items-center font-aoharu font-bold inset-auto m-auto row-span-10">けいおんサークル！</p>
      </div>
      <img src={yellow.src} alt="" className=" absolute" />
      <img id="activity" src={white.src} alt="" className=" relative top-0" />
    </div>
    <div className=" bg-white h-fit pt-[2rem]">
      {[
        { src: videoSources },
      ].map((video, index) => (
        <div className="text-center my-[3rem]" key={index}>
          <h1>サークル紹介映像</h1>
          {video.src && (
            <video
              style={{ width: "max(50vh, 50vw)" }}
              className="m-[0.3vw] rounded-[0.3vw] z-10 mx-auto"
              src={video.src}
              controls
            />
          )}
        </div>
      ))}

      <div className="pt-[10rem]">
        <h1>軽音サークルではこんな活動をしています!</h1>
        <Buttons></Buttons>
        <div className="mt-[3%] text-center">
        </div>
      </div>


      <div className="relative mb-[5rem]">
        <img src={blue.src} alt="" className=" bodybottom pt-[6%]" />
        <img src={beige.src} alt="" className="absolute top-[0rem]" />
      </div>
    </div >
    <div className="h-[20rem]">

    </div>
  </>)
}