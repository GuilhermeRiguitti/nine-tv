'use client'
import { NewsPreviewModel } from "../models";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";

type NewsHighlightIni = {
    highlights: NewsPreviewModel[];
};

export function NewsHighlightSlide({ highlights }: NewsHighlightIni) {

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
        >
            {highlights?.map(news => (
                <SwiperSlide key={news.id} className="relative">
                    <div className="overlay-gradient absolute top-0 bottom-0 left-0 right-0 z-10">
                    </div>
                    <Image
                        src={`/images/${news.imgPreview}`}
                        className="w-full"
                        width={567}
                        height={705}
                        alt={`news`}
                    />
                    <div className="absolute bottom-0 p-8 z-20">
                        <p className="text-white text-32">{news.title}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}