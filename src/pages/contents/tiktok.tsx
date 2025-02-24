"use client"; // クライアントコンポーネントとして明示
import create from "@/components/images/create.png";
import kyanfes from "@/components/images/kyanfes.png";
import purple from "@/components/images/purple.png";
import purple02 from "@/components/images/purple02.png";
import tiktok from "@/components/images/tiktok.png";
import tiktokicon from "@/components/images/tiktokicon.png";
import work from "@/components/images/workshop.png";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import Link from "next/link";

import { useState } from "react";
export default function singwithaguitar() {
    const [videoSources, setVideoSources] = useState({
        movie1: "https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/tiktoi1.mp4?alt=media&token=a22efb8f-86eb-4d7b-8102-fc5f9da6bd88",
        movie2: "https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/tiktok2.mp4?alt=media&token=bf5bfc98-7299-4120-923e-bd7929d49f0e",
    });
    return (<>
        <div className=" m-auto h-fit relative z-10">
            <div id="">
                <div className="w-full">
                    <div className="grid grid-cols-[repeat(10,minmax(0,1fr))] grid-rows-8 p-[2%] border-[#cdcdcd relative overflow-hidden">
                        <img src={purple.src} alt="" className=" absolute top-[0px] scale-x-[-1] scale-y-[-1] -z-20" />
                        <section className=" col-span-10 row-span-2 place-content-center place-items-center">
                            <img src={tiktok.src} alt="" />
                        </section>
                        <section className=" col-span-10 row-span-1 place-items-center place-content-center">
                            <h2 className="subbigtitle">TikTokに歌ってみたなどを投稿しています!</h2>
                            <a href="https://www.tiktok.com/@kobakaku2006?_t=ZS-8u9sYkeZgPq&_r=1" target="_blank" className=" font-bold text-[#4046ff] hover:border-b-2 border-[#4046ff] flex">
                                TikTokアカウント
                                <Avatar className=" h-[2.3vw] m-auto">
                                    <AvatarImage src={tiktokicon.src} alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </a>
                        </section>
                        <section className=" col-span-10 row-span-1 justify-center items-end place-items-center place-content-center" >
                            <h1>こういった動画を投稿しています!</h1>
                        </section>
                        <section className=" col-span-2 row-span-3" />
                        {[
                            { title: "渡月橋 〜君 想ふ〜", artist: "倉木麻衣", src: videoSources.movie1 },
                            { title: "愛してみてよ減るもんじゃないし", artist: "ねぐせ。", src: videoSources.movie2 },
                        ].map((video, index) => (
                            <section key={index} className="col-span-3 row-span-3 flex justify-center">
                                <div className="text-center">
                                    {video.src && (
                                        <video
                                            style={{ width: "max(20vh, 20vw)" }}
                                            className="m-[0.3vw] rounded-[1vw] z-10"
                                            src={video.src}
                                            controls
                                        />
                                    )}
                                    <h2>{video.title}</h2>
                                    <p className="subtitle">{video.artist}</p>
                                </div>
                            </section>
                        ))}
                        <section className=" col-span-2 row-span-3" />
                    </div>
                    <h1>他にもこんな活動をしています!</h1>
                    <div className="flex flex-wrap justify-center gap-4 w-[90%] m-auto">
                        <div className="grid place-content-center">
                            <Link href={"/"} className="grid items-center ButtonStyle max-w-[90%] w-auto h-[100%] px-4 py-2 font-semibold rounded-lg text-[0.55rem] sm:text-sm  md:text-md lg:text-lg">
                                前のページに戻る
                            </Link>
                        </div>

                        {[
                            { title: "キャンフェス", img: kyanfes.src, page: "/contents/campusfestival" },
                            { title: "音楽制作", img: create.src, page: "/contents/createsong" },
                            { title: "ワークショップ", img: work.src, page: "/contents/workshop" },
                        ].map((item, index) => (
                            <Card key={index} className="w-[30%] sm:w-[30%] md:w-[20%] lg:w-[18%] p-2 pb-[1%] m-[1%]">
                                <CardContent className="p-4 py-[5vw]">
                                    <img src={item.img} alt="" className="w-full rounded-lg h-[7vw] object-cover" />
                                </CardContent>
                                <CardFooter className="w-full flex justify-center">
                                    <Link
                                        href={item.page}
                                        className="ButtonStyle max-w-[90%] w-auto px-4 py-2 font-semibold rounded-lg text-[0.55rem] sm:text-sm  md:text-md lg:text-lg"
                                    >
                                        {item.title}
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <img src={purple02.src} alt="" className=" absolute bottom-[0px] scale-x-[-1] -z-20" />
                </div>
            </div>
        </div >
    </>)
}