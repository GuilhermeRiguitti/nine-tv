import { NewsHighlightSlide } from "@/modulos/news/components/NewsHighlightSlide";
import { NewsHomeIni } from "@/modulos/news/components/NewsHomeIni";
import { NewsService } from "@/modulos/news/news.service";

export default async function HomePage() {
    const service = new NewsService();
    const highlights = await service.getHighlights(4);
    const lastNews = await service.getLastNews(3)
    return (
        <div className="grid grid-cols-7 p-10 bg-white gap-2">
            <div className="col-span-3">
                <NewsHighlightSlide highlights={highlights} />
            </div>
            <div className="col-span-1">
                <NewsHomeIni news={lastNews} />
            </div>
        </div>
    )
}
