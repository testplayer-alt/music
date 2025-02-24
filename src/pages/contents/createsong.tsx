import dosei from "@/components/images/dosei.png"
import noimage from "@/components/images/noimage.png"
import purple from "@/components/images/purple.png"
import purple02 from "@/components/images/purple02.png"
import kyanfes from "@/components/images/kyanfes.png";
import create from "@/components/images/create.png";
import tiktok from "@/components/images/tiktok.png";
import work from "@/components/images/workshop.png";
import music1 from "@/components/music/music1.m4a"
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import Link from "next/link"

export default function singwithaguitar() {
    return (<>
        <div className=" m-auto h-fit relative z-10">
            <div id="singwithaguitar">
                <div className="w-full">
                    <div className="grid grid-cols-[repeat(11,minmax(0,1fr))] grid-rows-8 p-[2%] border-[#cdcdcd relative overflow-hidden">
                        <img src={purple.src} alt="" className=" absolute top-[0px] scale-x-[-1] scale-y-[-1] -z-20" />
                        <section className=" col-span-11 row-span-2 place-content-center place-items-center">
                            <img src={create.src} alt="" />
                        </section>
                        <section className=" col-span-11 row-span-1 place-items-center place-content-center">
                            <h1 className="subbigtitle">BGMなどの音楽制作を行っています!
                            </h1>
                        </section>
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <img src={dosei.src} alt="" className=" w-[10em] border-2 border-[#000]" />
                            </section>
                            <section className="row-span-1 place-items-center" >
                                <audio controls src={music1}></audio>
                                <div>
                                    <h2>作曲者:マサカイ</h2>
                                </div>
                            </section>
                        </div>
                        <div className=" col-span-1 row-span-2" />
                        <div className="col-span-3 row-span-2 place-items-center grid grid-cols-1 grid-rows-1 mt-[2rem]">
                            <section className=" " >
                                <img src={noimage.src} alt="" className=" w-[10em] border-2 border-[#000]" />
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
                                <img src={noimage.src} alt="" className=" w-[10em] border-2 border-[#000]" />
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
                                <img src={noimage.src} alt="" className=" w-[10em] border-2 border-[#000]" />
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
                                <img src={noimage.src} alt="" className=" w-[10em] border-2 border-[#000]" />
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
                                <img src={noimage.src} alt="" className=" w-[10em] border-2 border-[#000]" />
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
                            { title: "キャンフェス", img: kyanfes.src, page: "/contents/campusfestival" },
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
                    </div>
                    <img src={purple02.src} alt="" className=" absolute bottom-[0px] scale-x-[-1] -z-20" />
                </div>
            </div>
        </div >
    </>)
}