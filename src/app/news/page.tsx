import { PageTitle } from "@/components/layout/PageTitle";
import { uploadUrl } from "@/modulos/config/helpers";
import { NewsService } from "@/modulos/news/news.service";
import Image from "next/image";

export default async function NewsPage() {
    const service = new NewsService();
    const news = await service.getAllNews();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 bg-white p-4">
            <div className="col-span-2 md:col-span-4 lg:col-span-5">
                <PageTitle title="Notícias" subtitle="Tudo sobre SimRacing" />
            </div>
            {news?.map(news => (
                <div key={news.id} className="relative rounded-[3px] overflow-hidden bg-black">
                    <Image
                        className="w-full opacity-40"
                        width={179}
                        height={223}
                        alt={news.title}
                        src={uploadUrl('/', news.imgPreview)}
                        unoptimized={true}
                    />
                    <div className="absolute bottom-0 p-4 text-white">
                        <p className="text-18 font-medium">{news.title}</p>
                        <p className="text-12">{news.subtitle}</p>
                        <time className="text-11 font-light">{news.datePublication.toLocaleDateString()}</time>
                    </div>
                </div>
            ))}
        </div>
    );
}
