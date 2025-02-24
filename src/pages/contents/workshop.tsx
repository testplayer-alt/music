"use client"; // クライアントコンポーネントとして明示
import create from "@/components/images/create.png";
import kyanfes from "@/components/images/kyanfes.png";
import purple from "@/components/images/purple.png";
import purple02 from "@/components/images/purple02.png";
import tiktok from "@/components/images/tiktok.png";
import work from "@/components/images/workshop.png";
import workyousu from "@/components/images/workyousu.png";
import workyousu2 from "@/components/images/workyousu2.png";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import Link from "next/link";

import Image from "next/image";

export default function Workshop() {
    return (<>
        <div className=" m-auto h-fit relative z-10">
            <div id="">
                <div className="w-full">
                    <div className="grid grid-cols-[repeat(9,minmax(0,1fr))] grid-rows-9 p-[2%] border-[#cdcdcd relative overflow-hidden">
                        <Image src={purple} alt="" width={purple.width} height={purple.height} className=" absolute top-[0px] scale-x-[-1] scale-y-[-1] -z-20" />
                        <section className=" col-span-9 row-span-2 place-content-center place-items-center">
                            <Image src={work} alt="" width={work.width} height={work.height} />
                        </section>
                        <section className=" col-span-9 row-span-1 place-items-center place-content-center">
                            <h2 className="subbigtitle">生成AIを使用し、音楽制作を行うワークショップを実施しました!</h2>
                            <a href="https://creevo-music.com/composition/select-type" target="_blank" className=" font-bold text-[#4046ff] hover:border-b-2 border-[#4046ff]">
                                使用した生成AI
                            </a>
                        </section>
                        <section className=" col-span-9 row-span-1 justify-center items-end place-items-center place-content-center" >
                            <h1>ワークショップの様子</h1>
                        </section>
                        <section className=" col-span-1 row-span-3" />
                        {[
                            { src: workyousu },
                            { src: workyousu2 },
                        ].map((video, index) => (
                            <>
                                <section key={index} className="col-span-3 row-span-4 flex justify-center">
                                    <div className="text-center">
                                        <Image src={video.src} alt="" width={video.src.width} height={video.src.height} className="h-[70vh] w-full object-cover" />
                                    </div>
                                </section>
                                {index === 0 && <section className="col-span-1 row-span-2" />}
                            </>

                        ))}
                        <section className=" col-span-1 row-span-3" />
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