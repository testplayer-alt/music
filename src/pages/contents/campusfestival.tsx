"use client"; // クライアントコンポーネントとして明示

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import purple from "@/components/images/purple.png";
import purple02 from "@/components/images/purple02.png";
import kyanfes from "@/components/images/kyanfes.png";
import create from "@/components/images/create.png";
import tiktok from "@/components/images/tiktok.png";
import work from "@/components/images/workshop.png";

export default function SingWithAGuitar() {
    // 動画の `src` をクライアント側でセット
    const [videoSources, setVideoSources] = useState({
        movie1: "https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/nitijokakumei.mp4?alt=media&token=eb8dd141-0560-4c64-8e39-e4d6acbaff19",
        movie2: "https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/music2.mp4?alt=media&token=718b0fe3-7453-4969-9e45-030414fb1f55",
        movie3: "https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/anatanokoibito.mp4?alt=media&token=2258eeec-4a90-4d62-8980-7f5eb92aafbb",
        movie4: "https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/music3.mp4?alt=media&token=bcb0fc03-4e5d-4dba-918f-031cb04c6ca8",
        movie5: "https://firebasestorage.googleapis.com/v0/b/lightmusic-6f4f6.firebasestorage.app/o/music4.mp4?alt=media&token=bea1b37b-aa90-4480-acf1-977c8b200b5b",
    });


    return (
        <>
            <div className="m-auto h-fit relative z-10">
                <div id="singwithaguitar">
                    <div className="w-full">
                        <div className="grid grid-cols-[repeat(13,minmax(0,1fr))] grid-rows-11 p-[2%] border-[#cdcdcd] overflow-hidden relative">
                            <img
                                src={purple.src}
                                alt=""
                                className="absolute top-0 scale-x-[-1] scale-y-[-1] -z-20"
                            />
                            <section className="col-span-1 row-span-2" />
                            <section className="col-span-11 row-span-2 flex justify-center">
                                <img src={kyanfes.src} alt="" />
                            </section>
                            <section className="col-span-1 row-span-2" />
                            <section className="col-span-1 row-span-1" />
                            <section className=" col-span-11 row-span-1 place-items-center place-content-center">
                                <h2 className="subbigtitle">キャンパスフェスティバルでは<br />
                                    弾き語りやバンドなどの発表を行いました!
                                </h2>
                            </section>
                            <section className="col-span-1 row-span-1" />
                            <section className="col-span-1 row-span-1" />
                            <section className="col-span-11 row-span-1 flex justify-center items-end">
                                <h1 className="bigtitle">弾き語り</h1>
                            </section>
                            <section className="col-span-1 row-span-1" />
                            <section className="col-span-2 row-span-3" />

                            {[
                                { title: "日常革命", artist: "ねぐせ。", src: videoSources.movie1 },
                                { title: "残酷な天使のテーゼ", artist: "高橋洋子", src: videoSources.movie2 },
                                { title: "あなたの恋人になりたいのです", artist: "阿部真央", src: videoSources.movie3 },
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
                            <section className="col-span-2 row-span-3" />
                            <section className="col-span-1 row-span-1" />
                            <section className="col-span-11 row-span-1 flex justify-center items-end">
                                <h1 className="bigtitle">バンド</h1>
                            </section>
                            <section className="col-span-1 row-span-1" />
                            <section className="col-span-1 row-span-2" />
                            {[
                                { title: "僕に彼女ができたんだ", artist: "SHISHAMO", src: videoSources.movie4 },
                                { title: "洗濯機と君とラヂオ", artist: "マカロニえんぴつ", src: videoSources.movie5 },
                            ].map((video, index) => (
                                <>
                                    <section key={index} className="col-span-5 row-span-3 flex justify-center">
                                        <div className="text-center">
                                            {video.src && (
                                                <video
                                                    className="m-[0.3vw] rounded-[1vw] z-10"
                                                    src={video.src}
                                                    controls
                                                />
                                            )}
                                            <h2>{video.title}</h2>
                                            <p className="subtitle">{video.artist}</p>
                                        </div>
                                    </section>

                                    {/* 1つ目の要素の後に追加 */}
                                    {index === 0 && <section className="col-span-1 row-span-2" />}
                                </>
                            ))}

                        </div>

                        <h1>他にもこんな活動をしています!</h1>
                        <div className="flex flex-wrap justify-center gap-4 w-[90%] m-auto">
                            <div className="grid place-content-center">
                                <Link
                                    href={"/"}
                                    className="grid items-center ButtonStyle max-w-[90%] w-auto h-[100%] px-4 py-2 font-semibold rounded-lg text-[0.55rem] sm:text-sm  md:text-md lg:text-lg"
                                >
                                    前のページに戻る
                                </Link>
                            </div>

                            {[
                                { title: "音楽制作", img: create.src, page: "/contents/createsong" },
                                { title: "TikTok", img: tiktok.src, page: "/contents/tiktok" },
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

                            <img src={purple02.src} alt="" className="absolute bottom-0 scale-x-[-1] -z-20" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
