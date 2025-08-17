import { FaEnvelope, FaFacebook, FaJoomla, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Line, SectionHeaderSkeleton, Skeleton } from ".";
import { SiZalo } from "react-icons/si";
import Link from "next/link";
import { LiaUserTagSolid } from "react-icons/lia";
import { TbCreditCardPay } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";

function LoaderFooter() {
    return (
        <footer
            className="bg-gray-800 text-white py-8"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="logo mx-auto">
                        <Skeleton className="w-28 h-28 mx-auto mb-4" />
                        <ul className="list-disc mx-auto text-[16px] italic">
                            <li>In ấn chuyên nghiệp, đáp ứng mọi yêu cầu</li>
                            <li>Sắc nét, chuẩn màu, giao hàng nhanh</li>
                            <li>Đồng hành cùng bạn trên mọi ấn phẩm</li>
                        </ul>

                    </div>
                    {[...Array(2)].map((_, index) => (
                        <div key={index}>
                            <SectionHeaderSkeleton />

                            <div className="space-y-2">
                                <p className="flex items-center hover:text-blue-300 transition-all duration-150">
                                    <FaMapMarkerAlt className="mr-8" />
                                    <Line />
                                </p>
                                <p className="flex items-center hover:text-blue-300 transition-all duration-150">
                                    <FaPhone className="mr-8" />
                                    <Line />
                                </p>
                                <p className="flex items-center hover:text-blue-300 transition-all duration-150">
                                    <FaEnvelope className="mr-8" />
                                    <Line />
                                </p>
                                <div
                                    className="flex items-center hover:text-blue-300 transition-all duration-150"
                                >
                                    <SiZalo fontSize={30} className="mr-5" />
                                    <Line />
                                </div>
                                <div
                                    className="flex items-center hover:text-blue-300 transition-all duration-150"
                                >
                                    <FaFacebook className="mr-8" />
                                    <Line />
                                </div>
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
    );
}

export default LoaderFooter;