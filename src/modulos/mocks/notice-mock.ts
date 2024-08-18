import { NewsPreviewModel } from "../news/models";
import { faker } from '@faker-js/faker';

export const newsImages: string[] = [
    'news-1.png',
    'news-2.png',
    'senna.png',
    'senna.png'
];

export const generateFakeNotices = (count: number): NewsPreviewModel[] => {
    const notices: NewsPreviewModel[] = [];

    for (let i = 0; i < count; i++) {
        const notice: NewsPreviewModel = {
            id: faker.number.int(),
            title: faker.lorem.sentence(),
            subtitle: faker.lorem.paragraph(),
            image: newsImages[i],
            imageHighlight: newsImages[i],
            date: faker.date.recent(),
        };

        notices.push(notice);
    }

    return notices;
};