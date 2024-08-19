
import { prismaClient } from "../prisma-client/prisma-client";
import { NewsPreviewModel } from "./models";
import { Prisma, StatusEnumDb } from "@prisma/client";

export class NewsService {

    private whereNoticiaAtiva = {
        stats: StatusEnumDb.ENABLE,
        datePublication: {
            lte: new Date(),
        },
        category: {
            stats: StatusEnumDb.ENABLE,
        },
        subcategory: {
            stats: StatusEnumDb.ENABLE,
        }
    }

    async searchNews(
        page: number,
        perPage: number,
        form: {
            search?: string,
            categoryId?: number,
            subcategoryId?: number,
        }
    ): Promise<NewsPreviewModel[]> {
        const { search, categoryId, subcategoryId } = form;

        const whereClause: Prisma.NewsDbWhereInput = {
            ...this.whereNoticiaAtiva,
            ...(search || categoryId || subcategoryId ? {
                ...(search ? {
                    OR: [
                        { title: { contains: search } },
                        { subtitle: { contains: search } },
                        { text: { contains: search } }
                    ]
                } : {}),
                ...(categoryId ? {
                    categoryId,
                } : {}),
                ...(subcategoryId ? {
                    subcategoryId,
                } : {})
            } : {})
        };

        const news = await prismaClient.newsDb.findMany({
            where: whereClause,
            orderBy: {
                datePublication: 'desc',
            },
        });
        return news;
    };

    async getHighlights(qtd: number): Promise<NewsPreviewModel[]> {
        console.log(StatusEnumDb)
        const highlights = await prismaClient.newsDb.findMany({
            where: {
                ...this.whereNoticiaAtiva,
                highlight: true,
            },
            orderBy: { datePublication: 'desc' },
            take: qtd
        });

        if (!highlights) {
            return [];
        }
        return highlights;
    };
}