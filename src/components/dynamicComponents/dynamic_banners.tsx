"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation as SwiperNavigation,
    Autoplay as SwiperAutoplay,
    Pagination as SwiperPagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IImage } from "@/server/db/models/images";
import { RenderImageUrl } from "@/server/api/config";

type Props = {
    banners: IImage[];
};

export default function DynamicBanners({ banners }: Props) {
    return (
        <div className="container mx-auto px-4 py-4 sm:py-8">
            <Swiper
                modules={[SwiperNavigation, SwiperAutoplay, SwiperPagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="rounded-xl overflow-hidden"
            >
                {banners.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full aspect-[12/5]">
                            <Image
                                src={RenderImageUrl(slide.folder, slide.filename)}
                                alt={slide.filename}
                                width={1200}
                                height={800}
                                className="object-contain w-full"
                                fetchPriority="high"
                                priority
                            />

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
