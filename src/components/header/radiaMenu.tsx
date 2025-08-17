import { useState } from "react";
import Link from "next/link";
import { HiMiniArrowsPointingIn } from "react-icons/hi2";
import { MdOutlineDesignServices, MdOutlineMenu } from "react-icons/md";
import { LuPrinterCheck } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { PiPrinterDuotone } from "react-icons/pi";
import { TfiPrinter } from "react-icons/tfi";
import useCategorys from "@/swr/useCategorys";
import { ICategory } from "@/server/db/models/categorys";

const RadialMenu = () => {
    const Categorys = useCategorys();

    const [isOpen, setIsOpen] = useState(false);
    const radius = 60; // khoảng cách từ tâm ra các icon
    const colorClasses = [
        "bg-blue-500 hover:bg-blue-700",
        "bg-sky-500 hover:bg-sky-700",
        "bg-cyan-500 hover:bg-cyan-700",
        "bg-teal-500 hover:bg-teal-700",
        "bg-indigo-500 hover:bg-indigo-700",
        "bg-blue-600 hover:bg-blue-800",
    ];

    if (Categorys.isLoading) return <div>Loading categorys...</div>;
    if (Categorys.error) return <div>Error loading categorys</div>;

    const getIconLink = (link: string) => {
        switch (link) {
            case "in-nhanh":
                return <LuPrinterCheck />;
            case "in-quang-cao":
                return <PiPrinterDuotone />;
            case "in-ban-ve":
                return <TfiPrinter />;
            case "thiet-ke":
                return <MdOutlineDesignServices />;
            default:
                return <IoHomeOutline />;
        }
    };

    const total = (Categorys.data?.length || 0) + 1; // categorys + home + setup

    return (
        <div className="fixed top-1/2 -translate-y-1/2 left-14 -translate-x-1/2 z-[60] lg:hidden">
            <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                {/* Nút trung tâm */}
                <button
                    aria-label="Nút menu trung tâm"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition z-10"
                >
                    {isOpen ? (
                        <HiMiniArrowsPointingIn className="h-4 w-4" />
                    ) : (
                        <MdOutlineMenu className="h-4 w-4" />
                    )}
                </button>

                {/* === TRANG CHỦ === */}
                {(() => {
                    const angleDeg = -90; // đầu nửa vòng phải
                    const rad = (angleDeg * Math.PI) / 180;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;

                    return (
                        <Link
                            href={`/`}
                            onClick={() => setIsOpen(false)}
                            className="absolute transition-all duration-500 ease-out group"
                            style={{
                                transform: isOpen
                                    ? `translate(${x}px, ${y}px)`
                                    : `translate(0px, 0px)`,
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            <div className="capitalize absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 whitespace-nowrap pointer-events-none">
                                Trang chủ
                            </div>
                            <div
                                className={`w-10 h-10 rounded-full ${colorClasses[0]} text-white flex items-center justify-center text-xl shadow-md hover:bg-blue-700 transition scale-100 hover:scale-110`}
                            >
                                {getIconLink("/")}
                            </div>
                        </Link>
                    );
                })()}

                {/* === CATEGORYS === */}
                {Categorys.data?.map((item: ICategory, index: number) => {
                    const angleDeg =
                        -90 + ((180 / (total - 1)) * (index + 1)); // +1 vì index bắt đầu từ 1
                    const rad = (angleDeg * Math.PI) / 180;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;

                    return (
                        <Link
                            key={index}
                            href={`/${item.link}`}
                            onClick={() => setIsOpen(false)}
                            className="absolute transition-all duration-500 ease-out group"
                            style={{
                                transform: isOpen
                                    ? `translate(${x}px, ${y}px)`
                                    : `translate(0px, 0px)`,
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            <div className="capitalize absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 whitespace-nowrap pointer-events-none">
                                {item.name}
                            </div>
                            <div
                                className={`w-10 h-10 rounded-full ${colorClasses[index % colorClasses.length]} text-white flex items-center justify-center text-xl shadow-md hover:bg-blue-700 transition scale-100 hover:scale-110`}
                            >
                                {getIconLink(item.link)}
                            </div>
                        </Link>
                    );
                })}

            </div>
        </div>
    );
};

export default RadialMenu;
