import Link from "next/link";
import { useRouter } from "next/router";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";
import useCategorys from "@/swr/useCategorys";
import useCompany from "@/swr/useCompany";
import useProductDetail from "@/swr/useProductDetail";

export default function TabletHeader(props: { setShowFind: any }) {
    const { setShowFind } = props;
    const router = useRouter();
    //swr
    const Categorys = useCategorys();
    const Company = useCompany();

    const { link } = router.query;
    const product = useProductDetail(typeof link === "string" ? link : "");

    const isActive = (slug: string) => {
        const path = router.asPath.split('?')[0].replace(/\/$/, ''); // xóa dấu / cuối
        const pathSlug = path.replace(/^\//, ''); // bỏ dấu / đầu

        // Đúng category link (trang danh mục)
        if (pathSlug === slug) return true;

        // Trang chi tiết sản phẩm
        if (path.startsWith('/san-pham') && product.Data?.Category?.link === slug) {
            return true;
        }

        return false;
    };
    //state
    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="container flex justify-center items-center mx-auto">
                <div className="logo">
                    <Link href={"/"}>
                        <Image
                            width={120}
                            height={60}
                            src={`/img/logos/${Company.data?.logo}`}
                            alt="Logo"
                            className="h-24 lg:w-28  sm:w-16 w-16 cursor-pointer object-contain"
                        />
                    </Link>

                </div>
                {/* Thông tin */}
                <nav className="container mx-auto px-4">
                    <div className="flex justify-center items-center">
                        <div className="mr-8">
                            <div className="flex justify-start items-center">
                                <FaPhoneVolume
                                    fontSize={14}
                                    className="mr-3 text-blue-600"
                                />
                                <h6 className="font-bold text-[13px]">HOTLINE</h6>
                            </div>
                            <Link
                                className="text-blue-500 hover:text-blue-700 text-[14px]"
                                href={`tel:${Company.data?.hotline}` || ""}
                            >
                                {Company.data?.hotline}
                            </Link>
                        </div>
                        <div className="mr-8">
                            <div className="flex justify-start items-center">
                                <MdEmail fontSize={14} className="mr-3 text-blue-600" />
                                <h6 className="font-bold text-[13px]">EMAIL</h6>
                            </div>
                            <Link
                                className="text-blue-500 hover:text-blue-700 text-[14px]"
                                href={`mailto:${Company.data?.email}` || ""}
                            >
                                {Company.data?.email}
                            </Link>
                        </div>
                        <div className="">
                            <div className="flex justify-start items-center">
                                <FaClock fontSize={14} className="mr-3 text-blue-600" />
                                <h6 className="font-bold text-[13px]">GIỜ LÀM VIỆC</h6>
                            </div>
                            <p className="text-[14px]">
                                Mon - Sat <span>8h00 - 18h30</span>
                            </p>
                        </div>
                    </div>
                </nav>
                <button
                    aria-label="Nút trung tâm menu"
                    className={`group relative w-12 h-10 flex items-center justify-center text-white transition-all duration-300 bg-white hover:bg-gray-300`}
                    onClick={() => setShow(!show)}
                >
                    <div className="relative w-5 h-5 flex items-center justify-center">
                        {/* Gạch 1 */}
                        <span
                            className={`absolute h-0.5 w-5 bg-gray-600 transform transition-all duration-300 ease-in-out
        ${show ? "rotate-45" : "-translate-y-1.5"}
      `}
                        />
                        {/* Gạch 2 */}
                        <span
                            className={`absolute h-0.5 w-5 bg-gray-600 transition-all duration-300 ease-in-out
        ${show ? "opacity-0" : "opacity-100"}
      `}
                        />
                        {/* Gạch 3 */}
                        <span
                            className={`absolute h-0.5 w-5 bg-gray-600 transform transition-all duration-300 ease-in-out
        ${show ? "-rotate-45" : "translate-y-1.5"}
      `}
                        />
                    </div>
                </button>


            </div>
            <nav className={`bg-gray-800 max-h-0 overflow-hidden transition-all duration-1000 ${show && "max-h-36"}`}>
                <div className="flex flex-wrap justify-center p-6 gap-1">
                    <div onClick={() => setShow(false)} className={`cursor-pointer p-4 transition-all duration-300 shadow-lg rounded-md hover:bg-gray-400 ${router.asPath === "/" ? "text-blue-700 bg-gray-400" : "text-white bg-gray-700/50"}`}>
                        <Link href={`/`} className="flex justify-between items-center gap-2 min-w-20">
                            <span className="uppercase">Trang chủ</span>
                        </Link>
                    </div>

                    {
                        Categorys.data?.map((item: any, index: number) => (
                            <div onClick={() => setShow(false)} key={index} className={`cursor-pointer p-4 transition-all duration-300 shadow-lg rounded-md hover:bg-gray-400 ${isActive(item.link) ? "text-blue-700 bg-gray-400" : "text-white bg-gray-700/50"}`}>
                                <Link href={`/${item.link}`} className="flex justify-between items-center gap-2 min-w-20">
                                    {item.icon}
                                    <span className="uppercase"> {item.name}</span>
                                </Link>
                            </div>
                        ))
                    }
                    {/* <ButtonIcon
                        iconReact={IoMdSearch}
                        tooltip="Tìm sản phẩm"
                        onClick={() => setShowFind(true)}
                        className={` border-none rounded-md px-7 text-white bg-gray-700/50 hover:text-blue-600 hover:bg-gray-400`}
                        iconSize="w-5 h-5"
                    /> */}
                </div>
            </nav >
        </div >

    );
};