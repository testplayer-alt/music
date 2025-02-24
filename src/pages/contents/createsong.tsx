import dosei from "@/components/images/dosei.png"
import noimage from "@/components/images/noimage.png"
import purple from "@/components/images/purple.png"
import purple02 from "@/components/images/purple02.png"
import kyanfes from "@/components/images/kyanfes.png";
import create from "@/components/images/create.png";
import tiktok from "@/components/images/tiktok.png";
import work from "@/components/images/workshop.png";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image";

export default function singwithaguitar() {
    const music1 = "/music/music1.mp3";
    return (<>
        <div className=" m-auto h-fit relative z-10">
            <div id="singwithaguitar">
                <div className="w-full">
                    <div className="grid grid-cols-[repeat(11,minmax(0,1fr))] grid-rows-8 p-[2%] border-[#cdcdcd relative overflow-hidden">
                        <Image
                            src={purple}
                            alt=""
                            width={purple.width} height={purple.height}
                            className="absolute top-0 scale-x-[-1] scale-y-[-1] -z-20"
                        />
                        <section className=" col-span-11 row-span-2 place-content-center place-items-center">
                            <Image src={create} alt="" width={create.width} height={create.height} />
                        </section>
                        <section className=" col-span-11 row-span-1 place-items-center place-content-center">
                            <h1 className="subbigtitle">BGMなどの音楽制作を行っています!
                            </h1>
                        </section>
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <Image src={dosei} alt="" width={dosei.width} height={dosei.height} className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio src={music1} controls />
                                <div>
                                    <h2>作曲者:マサカイ</h2>
                                </div>
                            </section>
                        </div>
                        <div className=" col-span-1 row-span-2" />
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <Image src={noimage} alt="" width={noimage.width} height={noimage.height} className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio controls src={""}></audio>
                                <div>
                                    <h2>作曲者:</h2>
                                </div>
                            </section>
                        </div>
                        <div className=" col-span-1 row-span-2" />
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <Image src={noimage} alt="" width={noimage.width} height={noimage.height} className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio controls src={""}></audio>
                                <div>
                                    <h2>作曲者:</h2>
                                </div>
                            </section>
                        </div>
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <Image src={noimage} alt="" width={noimage.width} height={noimage.height} className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio controls src={""}></audio>
                                <div>
                                    <h2>作曲者:</h2>
                                </div>
                            </section>
                        </div>
                        <div className=" col-span-1 row-span-2" />
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <Image src={noimage} alt="" width={noimage.width} height={noimage.height} className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio controls src={""}></audio>
                                <div>
                                    <h2>作曲者:</h2>
                                </div>
                            </section>
                        </div>
                        <div className=" col-span-1 row-span-2" />
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <Image src={noimage} alt="" width={noimage.width} height={noimage.height} className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio controls src={""}></audio>
                                <div>
                                    <h2>作曲者:</h2>
                                </div>
                            </section>
                        </div>
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
                            { title: "TikTok", img: tiktok, page: "/contents/tiktok" },
                            { title: "ワークショップ", img: work, page: "/contents/workshop" },
                        ].map((item, index) => (
                            <Card key={index} className="w-[30%] sm:w-[30%] md:w-[20%] lg:w-[18%] p-2 pb-[1%] m-[1%]">
                                <CardContent className="p-4 py-[5vw]">
                                    <Image src={item.img} alt="" width={item.img.width}  // 🔴 画像の元の width を取得
                                        height={item.img.height} className="w-full rounded-lg h-[7vw] object-cover" />
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
                    <Image src={purple02} alt="" width={purple02.width} height={purple02.height} className=" absolute bottom-[0px] scale-x-[-1] -z-20" />
                </div>
            </div>
        </div >
    </>)
}