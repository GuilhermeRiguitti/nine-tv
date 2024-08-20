import Image from "next/image";
import { NewsPreviewModel } from "../models";
import { uploadUrl } from "@/modulos/config/helpers";

type NewsHomeProps = {
    news: NewsPreviewModel[];
};

export function NewsHomeIni({ news }: NewsHomeProps) {

    return (
        <div className="grid grid-cols-1 gap-[9px]">
            {news?.map((news) => (
                <div key={news.id} className="relative rounded-[3px] overflow-hidden">
                    <div className="overlay-gradient absolute top-0 bottom-0 left-0 right-0 z-10">
                    </div>
                    <Image
                        className="w-full "
                        width={179}
                        height={223}
                        alt={news.title}
                        src={uploadUrl('/', news.imgPreview)}
                        unoptimized={true}
                    />
                    <div className="absolute bottom-0 p-2 z-20 text-white">
                        <p className="text-16 font-medium">{news.title}</p>
                        <time className="text-10 font-light">{news.datePublication.toLocaleDateString()}</time>
                    </div>
                </div>
            ))}
        </div>
    );
}

