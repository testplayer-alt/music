import create from "@/components/images/create.png";
import kyanfes from "@/components/images/kyanfes.png";
import tiktok from "@/components/images/tiktok.png";
import work from "@/components/images/workshop.png";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
export default function Buttons() {
    return (<>
        <div className="flex flex-wrap justify-center gap-4 w-[90%] m-auto">
            {[
                { title: "キャンフェス", img: kyanfes, id: "#singwithaguitar", page: "/contents/campusfestival" },
                { title: "音楽制作", img: create, id: "#createsong", page: "/contents/createsong" },
                { title: "TikTok", img: tiktok, id: "#voicetraining", page: "contents/tiktok" },
                { title: "ワークショップ", img: work, id: "#workshop", page: "contents/workshop" },
            ].map((item, index) => (
                <Card key={index} className="w-[30%] sm:w-[30%] md:w-[20%] lg:w-[18%] p-2 pb-[1%] m-[1%] border-[#000]">
                    <CardContent className="p-4 py-[5vw]">
                        <Image src={item.img} alt="" width={item.img.width} height={item.img.height} className="w-full rounded-lg h-[7vw] object-cover" />
                    </CardContent>
                    <CardFooter className="w-full flex justify-center">
                        <Link href={item.page} className="ButtonStyle max-w-[90%] w-auto px-4 py-2 font-semibold rounded-lg text-[0.55rem] sm:text-sm  md:text-md lg:text-lg">{item.title}</Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </>)
}