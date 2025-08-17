import { useRouter } from "next/router";
import {
    FaEnvelope,
    FaFacebook,
    FaJoomla,
    FaMapMarkerAlt,
    FaPhone,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { LiaUserTagSolid } from "react-icons/lia";
import { TbCreditCardPay } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import useCompany from "@/swr/useCompany";
import LoaderFooter from "@/loaders/loader_footer";
import { RenderImageUrl } from "@/server/api/config";

function WrapFooter() {
    const router = useRouter();
    const Company = useCompany();

    if (Company.isLoading) return <LoaderFooter />;
    if (Company.error) return "Error load company";
    return (
        <>
            <footer
                className={
                    router.pathname.includes("dashboard") || router.pathname.includes("admin") || router.pathname.includes("check-order")
                        ? "hidden"
                        : "bg-gray-800 text-white py-8"
                }
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="logo mx-auto">
                            <Link href={"/"}>
                                <Image
                                    width={60}
                                    height={50}
                                    src={RenderImageUrl("logos", Company.data?.logo || "")}
                                    alt="Logo"
                                    className="h-16 w-1/2 mx-auto cursor-pointer object-contain mb-6"
                                />
                            </Link>

                            <ul className="list-disc mx-auto text-[16px] italic">
                                <li>In ấn chuyên nghiệp, đáp ứng mọi yêu cầu</li>
                                <li>Sắc nét, chuẩn màu, giao hàng nhanh</li>
                                <li>Đồng hành cùng bạn trên mọi ấn phẩm</li>
                            </ul>

                        </div>
                        {Company.data?.Brands?.map((brand, index) => (
                            <div key={index}>
                                <h5 className="relative text-xl font-bold mb-4 after:content-[''] after:absolute after:left-0 after:-bottom-1 inline-block after:w-full after:h-[4px] after:bg-white">
                                    {brand.name}
                                </h5>

                                <div className="space-y-2">
                                    <p className="flex items-center hover:text-blue-300 transition-all duration-150">
                                        <FaMapMarkerAlt className="mr-8" />
                                        {brand.address}
                                    </p>
                                    <p className="flex items-center hover:text-blue-300 transition-all duration-150">
                                        <FaPhone className="mr-8" />
                                        {brand.hotline}
                                    </p>
                                    <p className="flex items-center hover:text-blue-300 transition-all duration-150">
                                        <FaEnvelope className="mr-8" />
                                        {brand.email}
                                    </p>
                                    <Link
                                        target="_blank"
                                        href={
                                            `https://zalo.me/${brand?.zalo?.split("||")[1]}` || "#"
                                        }
                                        className="flex items-center hover:text-blue-300 transition-all duration-150"
                                    >
                                        <SiZalo fontSize={30} className="mr-5" />
                                        {brand?.zalo?.split("||")[0]}
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href={brand?.facebook?.split("||")[1] || "#"}
                                        className="flex items-center hover:text-blue-300 transition-all duration-150"
                                    >
                                        <FaFacebook className="mr-8" />
                                        {brand?.facebook?.split("||")[0]}
                                    </Link>
                                </div>
                            </div>
                        ))}

                        <div>
                            <h6
                                className="relative text-xl font-bold mb-4 after:content-[''] after:absolute after:left-0 after:-bottom-1 inline-block after:w-full after:h-[4px] after:bg-white">
                                Quick Link
                            </h6>
                            <div className="space-y-2">
                                <Link
                                    href="/about"
                                    className="flex items-center hover:text-blue-300 transition-all duration-150"
                                >
                                    <LiaUserTagSolid className="mr-4" />
                                    Về Chúng Tôi
                                </Link>

                                <Link
                                    href="/phuong-thuc-thanh-toan"
                                    className="flex items-center hover:text-blue-300 transition-all duration-150"
                                >
                                    <TbCreditCardPay className="mr-4" />
                                    Phương Thức Thanh Toán
                                </Link>

                                <Link
                                    href="/thoa-thuan-chinh-sach"
                                    className="flex items-center hover:text-blue-300 transition-all duration-150"
                                >
                                    <MdOutlinePolicy className="mr-4" />
                                    Thỏa Thuận & Chính Sách
                                </Link>
                                <Link
                                    href="https://tuyendung.innhanh79.vn"
                                    target="_blank"
                                    className="flex items-center hover:text-blue-300 transition-all duration-150"
                                >
                                    <FaJoomla className="mr-4" />
                                    Cơ Hội VIệc Làm
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block mt-6">
                        <iframe
                            title="Bản đồ địa chỉ In Nhanh 79"
                            name="map"
                            aria-label="Bản đồ địa chỉ In Nhanh 79"
                            className="w-full rounded-xl shadow p-2"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.891467456159!2d106.67629628733745!3d10.802857331937814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cef69d5c5f%3A0xc1629708439d12a5!2sInNhanh%2079!5e0!3m2!1svi!2s!4v1753924697435!5m2!1svi!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-300">
                            © {new Date().getFullYear()}{" "}
                            InNhanh79 . All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
            {router.asPath !== "/dashboard" && (
                <div className="fixed bottom-10 left-10 z-50 space-y-3 hidden md:block">
                    {/* Facebook */}
                    <div className="relative w-10 h-10 lg:w-14 lg:h-14">
                        <span className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-60 scale-110"></span>
                        <button
                            aria-label="Liên hệ message facebook InNhanh79"
                            onClick={() => window.open("https://m.me/132480864044639")}
                            className="relative w-full h-full rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:bg-sky-700 transition"
                        >
                            <FaFacebookMessenger className="text-white w-3 h-3 lg:w-6 lg:h-6" />
                        </button>
                    </div>

                    {/* Zalo */}
                    <div className="relative w-10 h-10 lg:w-14 lg:h-14">
                        <span className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-60 scale-110"></span>
                        <button
                            aria-label="Liên hệ zalo InNhanh79"
                            onClick={() => window.open(`https://zalo.me/${Company.data?.zalo}`)}
                            className="relative w-full h-full rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:bg-sky-700 transition"
                        >
                            <SiZalo className="text-white w-3 h-3 lg:w-6 lg:h-6" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default WrapFooter;
