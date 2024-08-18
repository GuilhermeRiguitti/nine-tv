import Image from "next/image";
import { NewsPreviewModel } from "../models";
import { ImageConfig } from "@/modulos/config/ImageConfig";

type NewsHomeProps = {
    news: NewsPreviewModel[];
};

export function NewsHomeIni({ news }: NewsHomeProps) {
    console.log({ ...ImageConfig.newsDb.imgPreview.getImage(news[1].imgPreview) })
    return (
        <div className="grid grid-cols-1 gap-2">
            {news?.map((news) => (
                <div key={news.id} className="relative">
                    <div className="overlay-gradient absolute top-0 bottom-0 left-0 right-0 z-10">
                    </div>
                    <Image
                        className="w-full "
                        width={179}
                        height={223}
                        alt={`Doi`}
                        {...ImageConfig.newsDb.imgPreview.getImage(news.imgPreview)}
                    />
                    <div className="absolute bottom-0 p-2 z-20">
                        <p className="text-white text-14">{news.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

