"use client"; // クライアントコンポーネントとして明示
import bodyjaket from "@/components/images/celestivalbody.png";
import create from "@/components/images/create.png";
import kyanfes from "@/components/images/kyanfes.png";
import purple from "@/components/images/purple.png";
import purple02 from "@/components/images/purple02.png";
import star from "@/components/images/starjaket.png";
import tiktok from "@/components/images/tiktok.png";
import work from "@/components/images/workshop.png";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import Link from "next/link";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Workshop() {
    const music1 = "/music/music2.mp3";
    const music2 = "/music/music3.mp3";
    const [videoSources, setVideoSources] = useState<string | undefined>(undefined);
    useEffect(() => {
        setVideoSources("https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/workshop.mp4?alt=media&token=299f5ce7-ad2d-4fbe-ba5b-3672a3ff03f5")
    }, []);
    return (<>
        <div className=" m-auto h-fit relative z-10">
            <div id="">
                <div className="w-full">
                    <div className="grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-11 p-[2%] border-[#cdcdcd relative overflow-hidden">
                        <Image src={purple} alt="" width={purple.width} height={purple.height} className=" absolute top-[0px] scale-x-[-1] scale-y-[-1] -z-20" />
                        <section className=" col-span-8 row-span-2 place-content-center place-items-center">
                            <Image src={work} alt="" width={work.width} height={work.height} />
                        </section>
                        <section className=" col-span-8 row-span-1 place-items-center place-content-center">
                            <h2 className="subbigtitle">生成AIを使用し、音楽制作を行うワークショップを実施しました!</h2>
                            <a href="https://creevo-music.com/composition/select-type" target="_blank" className=" font-bold text-[#4046ff] border-b-2 border-[#4046ff]">
                                使用した生成AI
                            </a>
                        </section>
                        <section className=" col-span-8 row-span-1 justify-center items-end place-items-center place-content-center" >
                            <h1>ワークショップの様子</h1>
                        </section>
                        {[
                            { src: videoSources },
                        ].map((video, index) => (
                            <div className=" col-span-8 row-span-3" key={index}>
                                {video.src && (
                                    <video
                                        style={{ width: "max(24vh, 24vw)" }}
                                        className="m-[0.3vw] rounded-[0.3vw] z-10 mx-auto"
                                        src={video.src}
                                        controls
                                    />
                                )}
                            </div>
                        ))}
                        <section className=" col-span-8 row-span-1 justify-center items-end place-items-center place-content-end" >
                            <h1>ワークショップで制作された音楽</h1>
                        </section>
                        <section className=" col-span-1 row-span-2" />
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <Image src={star} alt="" width={star.width} height={star.height} className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio src={music1} controls />
                            </section>
                        </div>
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <Image src={bodyjaket} alt="" width={bodyjaket.width} height={bodyjaket.height} className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio src={music2} controls />
                            </section>
                        </div>
                        <section className=" col-span-1 row-span-2" />
                        <section className="col-span-8 row-span-1 place-content-center place-items-center">
                            <h2 className="bigsubtitle">
                                参加者の方から「楽しかった」という言葉をたくさんいただけて嬉しかったです
                            </h2>
                        </section>
                    </div>
                    <h1>他にもこんな活動をしています!</h1>
                    <div className="flex flex-wrap justify-center gap-4 w-[90%] m-auto">
                        <div className="grid place-content-center">
                            <Link href={"/"} className="grid items-center ButtonStyle max-w-[90%] w-auto h-[100%] px-4 py-2 font-semibold rounded-lg text-[0.55rem] sm:text-sm  md:text-md lg:text-lg">
                                前のページに戻る
                            </Link>
                        </div>

                        {[
                            { title: "キャンフェス", img: kyanfes, page: "/contents/campusfestival" },
                            { title: "音楽制作", img: create, page: "/contents/createsong" },
                            { title: "TikTok", img: tiktok, page: "/contents/tiktok" },
                        ].map((item, index) => (
                            <Card key={index} className="w-[30%] sm:w-[30%] md:w-[20%] lg:w-[18%] p-2 pb-[1%] m-[1%]">
                                <CardContent className="p-4 py-[5vw]">
                                    <Image src={item.img} alt="" width={item.img.width} height={item.img.height} className="w-full rounded-lg h-[7vw] object-cover" />
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
                    <Image src={purple02.src} alt="" width={purple02.width} height={purple02.height} className=" absolute bottom-[0px] scale-x-[-1] -z-20" />
                </div>
            </div>
        </div >
    </>)
}