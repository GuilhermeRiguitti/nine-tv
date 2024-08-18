import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { getTitleSlug } from "./helpers";


export async function newsSeed(prisma: PrismaClient) {

    // categoria
    await prisma.newsCategoryDb.upsert({
        where: {
            slug: 'f1',
            id: 1,
        },
        update: {},
        create: {
            id: 1,
            name: 'F1',
            slug: 'f1'
        }
    });

    await prisma.newsCategoryDb.upsert({
        where: {
            slug: 'gt3',
            id: 2,
        },
        update: {},
        create: {
            id: 2,
            name: 'GT3',
            slug: 'gt3'
        }
    });

    //subcat
    await prisma.newsSubcatoryDb.upsert({
        where: {
            slug: 'resultados',
            id: 1,
        },
        update: {},
        create: {
            id: 1,
            name: 'Resultados',
            slug: 'resultados',
            categoryId: 1
        }
    });
    await prisma.newsSubcatoryDb.upsert({
        where: {
            slug: 'penalidades',
            id: 2,
        },
        update: {},
        create: {
            id: 2,
            name: 'Penalidades',
            slug: 'penalidades',
            categoryId: 1,
        }
    });

    await prisma.newsSubcatoryDb.upsert({
        where: {
            slug: 'corridas',
            id: 3,
        },
        update: {},
        create: {
            id: 3,
            name: 'Corridas',
            slug: 'corridas',
            categoryId: 2,
        }
    });

    await prisma.newsSubcatoryDb.upsert({
        where: {
            slug: 'acidentes',
            id: 4,
        },
        update: {},
        create: {
            id: 4,
            name: 'Acidentes',
            slug: 'acidentes',
            categoryId: 2,
        }
    });

    // noticias
    // adicionar 50 noticias avulsas apenas se não tiver nenhuma
    const news = await prisma.newsDb.findFirst();
    if (!news) {
        const imgsPreview = ['ImgPreview-0.png', 'ImgPreview-1.png', 'ImgPreview-2.png'];
        const imgDetail = 'ImgDetail-1.png';

        for (let i = 1; i <= 50; i++) {
            const randomImgLista = imgsPreview[Math.floor(Math.random() * imgsPreview.length)];
            const randomBoolean = Math.random() < 0.5;
            const randomSubtitulo = faker.lorem.sentence().slice(0, 200);
            const randomTexto = faker.lorem.paragraphs({ min: 4, max: 10 }, '<br />');
            const randomData = faker.date.between({ from: new Date(2023, 1, 1), to: new Date() });
            const randomAutor = faker.person.fullName().slice(0, 100);
            const randomFonte = faker.lorem.words({ min: 1, max: 2 }).slice(0, 100);

            // adicionar galeria de imagens somente as vezes
            const randomGaleria = Math.random() < 0.5;
            const qtdFotos = Math.floor(Math.random() * 10);

            await prisma.newsDb.upsert({
                where: {
                    id: i
                },
                update: {},
                create: {
                    id: i,
                    ...getTitleSlug(160),
                    imgPreview: randomImgLista,
                    imgDetail,
                    categoryId: 1,
                    subcategoryId: i % 4 + 1,
                    datePublication: randomData,
                    subtitle: randomSubtitulo,
                    highlight: randomBoolean,
                    stats: 'ENABLE',
                    text: randomTexto,
                    autor: randomAutor,
                    font: randomFonte,
                    dateRegistration: new Date(),
                    dateChenge: new Date(),

                    ...(randomGaleria ? {
                        images: {
                            create: Array.from({ length: qtdFotos }, (_, i) => ({ imgBig: imgDetail, imgSmall: imgsPreview[Math.floor(Math.random() * imgsPreview.length)] }))
                        }
                    } : {})
                }
            });
        }

        //Noticias do DEAF
        for (let i = 51; i <= 60; i++) {
            let subcat = 5;
            if (i > 55) {
                subcat = 6;
            }
            const randomImgLista = imgsPreview[Math.floor(Math.random() * imgsPreview.length)];
            const randomBoolean = Math.random() < 0.5;
            const randomTitulo = faker.lorem.sentence().slice(0, 160);
            const randomSubtitulo = faker.lorem.sentence().slice(0, 200);
            const randomTexto = faker.lorem.paragraphs({ min: 4, max: 10 }, '<br />');
            const randomData = faker.date.between({ from: new Date(2023, 1, 1), to: new Date() });
            const randomSlug = faker.helpers.slugify(randomTitulo);
            const randomAutor = faker.person.fullName().slice(0, 100);
            const randomFonte = faker.lorem.words({ min: 1, max: 2 }).slice(0, 100);

            // adicionar galeria de imagens somente as vezes
            const randomGaleria = Math.random() < 0.5;
            const qtdFotos = Math.floor(Math.random() * 10);

            await prisma.newsDb.upsert({
                where: {
                    id: i
                },
                update: {},
                create: {
                    id: i,
                    imgPreview: randomImgLista,
                    imgDetail,
                    categoryId: 2,
                    subcategoryId: i % 4 + 1,
                    datePublication: randomData,
                    slug: randomSlug,
                    title: randomTitulo,
                    subtitle: randomSubtitulo,
                    highlight: randomBoolean,
                    stats: 'ENABLE',
                    text: randomTexto,
                    autor: randomAutor,
                    font: randomFonte,
                    dateRegistration: new Date(),
                    dateChenge: new Date(),
                    ...(randomGaleria ? {
                        images: {
                            create: Array.from({ length: qtdFotos }, (_, i) => ({ imgBig: imgDetail, imgSmall: imgsPreview[Math.floor(Math.random() * imgsPreview.length)] }))
                        }
                    } : {})
                }
            });
        }
    }

    console.log('Noticias seed completed');

}