import Link from "next/link";
import { useRouter } from "next/router";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { ICategory } from "@/server/db/models/categorys";
import useCategorys from "@/swr/useCategorys";
import useCompany from "@/swr/useCompany";
import useProductDetail from "@/swr/useProductDetail";

export default function DesktopHeader(props: { setShowFind: any }) {
    const { setShowFind } = props;
    const router = useRouter();
    //swr
    const Categorys = useCategorys();
    const Company = useCompany();

    const { link } = router.query;
    const product = useProductDetail(typeof link === "string" ? link : "");

    const isActive = (slug: string) => {
        const path = router.asPath.split('?')[0].replace(/\/$/, '');
        const pathSlug = path.replace(/^\//, '');

        // Đúng link danh mục
        if (pathSlug === slug) return true;

        // Nếu đang ở trang chi tiết sản phẩm và đã có Category
        if (
            pathSlug.startsWith('san-pham') &&
            product?.Data?.Category?.link === slug
        ) {
            return true;
        }

        return false;
    };
    return (
        <div className="container flex justify-between items-center mx-auto">
            <div className="logo sm:ml- ml-3">
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
            <div className="header_wrap">
                {/* Thông tin */}
                <nav className="container mx-auto px-4 py-4">
                    <div className="hidden md:flex justify-end items-center">
                        <div className="mr-8">
                            <div className="flex justify-start items-center">
                                <FaPhoneVolume
                                    fontSize={20}
                                    className="mr-3 text-blue-600"
                                />
                                <h6 className="font-bold">HOTLINE</h6>
                            </div>
                            <Link
                                className="text-gray-600 hover:text-blue-700"
                                href={`tel:${Company.data?.hotline}` || ""}
                            >
                                {Company.data?.hotline}
                            </Link>
                        </div>
                        <div className="mr-8">
                            <div className="flex justify-start items-center">
                                <MdEmail fontSize={20} className="mr-3 text-blue-600" />
                                <h6 className="font-bold">EMAIL</h6>
                            </div>
                            <Link
                                className="text-gray-600 hover:text-blue-700"
                                href={`mailto:${Company.data?.email}` || ""}
                            >
                                {Company.data?.email}
                            </Link>
                        </div>
                        <div className="">
                            <div className="flex justify-start items-center">
                                <FaClock fontSize={20} className="mr-3 text-blue-600" />
                                <h6 className="font-bold">GIỜ LÀM VIỆC</h6>
                            </div>
                            <p>
                                Mon - Sat <span>8h00 - 18h30</span>
                            </p>
                        </div>
                    </div>
                </nav>
                {/* Menu Desktop */}
                <nav className="container mx-auto relative">
                    <div className="hidden lg:flex flex-wrap gap-1 border-t transition-all duration-300 py-3">
                        <Link
                            href={`/`}
                            className={`px-4 xl:px-6 2xl:px-8 py-3 xl:py-4 text-[0.8rem] sm:text-sm md:text-base xl:text-[1rem] whitespace-nowrap uppercase font-semibold rounded-md transition duration-300 hover:text-blue-600 hover:bg-blue-100 ${router.asPath === "/"
                                ? "text-blue-700 bg-blue-100"
                                : "bg-blue-500/10 text-gray-800"
                                }`}
                        >
                            Trang chủ
                        </Link>
                        {Categorys.data?.map((item: ICategory, index: number) => (
                            <Link
                                key={index}
                                href={`/${item.link}`}
                                className={`px-4 xl:px-6 2xl:px-8 py-3 xl:py-4 text-[0.8rem] sm:text-sm md:text-base xl:text-[1rem] whitespace-nowrap uppercase font-semibold rounded-md transition duration-300 hover:text-blue-600 hover:bg-blue-100 ${isActive(item.link)
                                    ? "text-blue-700 bg-blue-100"
                                    : "bg-blue-500/10 text-gray-800"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* <ButtonIcon
                            iconReact={IoMdSearch}
                            tooltip="Tìm sản phẩm"
                            onClick={() => setShowFind(true)}
                            className={` rounded-md px-7 transition duration-300 bg-blue-500/10 hover:text-blue-600 hover:bg-blue-100`}
                            iconSize="w-5 h-5"
                        /> */}
                    </div>
                </nav>
            </div>
        </div>
    );
};

