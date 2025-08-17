import { useCart } from "@/hook/useCart";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DesktopHeader from "./desktop";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa6";
import TabletHeader from "./tablet";
import HeaderMobile from "./mobile";

export default function WrapHeader() {
    const router = useRouter();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { cartItems } = useCart();
    const [showFind, setShowFind] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <header
                className={`${router.pathname.includes("dashboard") || router.pathname.includes("admin") || router.pathname.includes("check-order")
                    ? "hidden"
                    : "sticky top-0 z-50 bg-white w-full shadow"
                    } `}
            >
                {/* Desktop */}
                <div className="hidden md:hidden lg:block">
                    <DesktopHeader setShowFind={setShowFind} />
                </div>
                {/* Tablet */}
                <div className="hidden md:block lg:hidden">
                    <TabletHeader setShowFind={setShowFind} />
                </div>
                <div className="block md:hidden">
                    <HeaderMobile setShowFind={setShowFind} />
                </div>
            </header>

            {/* Scroll to Top Button */}
            <div className="fixed bottom-10 right-10 z-50 overflow-hidden space-y-2">
                {
                    router.asPath !== "/bang-bao-gia" &&
                    <div
                        onClick={() => router.push("/bang-bao-gia")}
                        className={`rounded-full cursor-pointer w-10 h-10 lg:w-14 lg:h-14 bg-blue-400 relative transition-transform transform duration-500 ${cartItems.length < 1 ? "translate-x-[150px]" : "translate-x-0"}`}>
                        <Link aria-label="Bảng báo giá" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" href={"/bang-bao-gia"}>
                            <IoCartOutline className="w-5 h-5 text-white" />
                        </Link>
                        <div className="absolute top-0 right-0 w-4 h-4 lg:w-6 lg:h-6 bg-red-600 text-white rounded-full text-center lg:text-[12px] text-[8px]">
                            <div className="w-full h-full relative">
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> {cartItems.length}</span>
                            </div>
                        </div>
                    </div>
                }
                <div className={`rounded-full w-10 h-10 lg:w-14 lg:h-14 bg-blue-400 relative transition-transform transform duration-500 ${!showScrollTop ? "translate-x-[100px]" : "translate-x-0"}`}>
                    <button aria-label="Cuộn tran về đầu" onClick={scrollToTop} className="w-full h-full relative">
                        <FaArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                    </button>
                </div>
            </div>
            {/* <SearchProduct show={showFind} setShow={setShowFind} /> */}
        </>
    )
}