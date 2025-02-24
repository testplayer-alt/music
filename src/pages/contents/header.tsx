export default function Header() {
    return (<>
        <div className=" fixed z-20 right-[0px] top-[1.5%] bg-[#fff] rounded-l-full w-[67vw] border-2">
            <div className=" font-aoharu font-bold grid grid-cols-4 place-items-center items-center">
                <a href="#activity">
                    <button className="HeaderContents">
                        サークルについて
                    </button>
                </a>
                <button className="HeaderContents">
                    コンテンツ2
                </button>
                <button className="HeaderContents">
                    コンテンツ3
                </button>
                <button className="HeaderContents">
                    コンテンツ4
                </button>
            </div>
        </div>
    </>)
}