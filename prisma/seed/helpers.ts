
import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { ImageConfig } from '../../src/modulos/config/ImageConfig';
export type SeedImageUrls = Record<string, Record<string, string[]>> & {}

export const getTitleSlug = (maxChar: number): { title: string, slug: string } => {
    const title = faker.lorem.sentence().slice(0, maxChar).replaceAll('.', '');
    const slug = faker.helpers.slugify(title).toLowerCase();
    return { title, slug };
};

export const generateAndSaveImages = async (category: 'sports' | 'city' | 'nature' | 'fashion' | 'people' | 'technics' | 'nightlife' | 'transport', generateNewImages: boolean): Promise<SeedImageUrls> => {
    const imageUrls: SeedImageUrls = {};

    for (const [configName, configs] of Object.entries(ImageConfig)) {
        imageUrls[configName] = {};

        for (const [subConfigName, config] of Object.entries(configs)) {
            imageUrls[configName][subConfigName] = [];

            for (let i = 0; i < 3; i++) {
                const { w, h, crop } = config.sizes;
                const imagePath = path.join(__dirname, 'files', config.path, `${subConfigName}-${i}.jpg`);

                if (!generateNewImages) {
                    imageUrls[configName][subConfigName].push(`${subConfigName}-${i}.jpg`);
                    continue;
                }

                if (fs.existsSync(imagePath)) {
                    // Se o arquivo já existe, use-o
                    imageUrls[configName][subConfigName].push(`${subConfigName}-${i}.jpg`);
                } else {
                    // Define o URL da imagem
                    let imageUrl: string;
                    if (crop) {
                        const cropWidth = crop.w > 0 ? crop.w : w;
                        const cropHeight = crop.h > 0 ? crop.h : h;
                        imageUrl = faker.image.urlLoremFlickr({ category, width: cropWidth, height: cropHeight });
                    } else {
                        imageUrl = faker.image.urlLoremFlickr({ category, width: w, height: h });
                    }

                    // Baixa a imagem se não existir
                    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
                    const buffer = Buffer.from(response.data);

                    // Cria o diretório se não existir
                    fs.mkdirSync(path.dirname(imagePath), { recursive: true });

                    // Salva a imagem
                    fs.writeFileSync(imagePath, buffer);

                    imageUrls[configName][subConfigName].push(`${subConfigName}-${i}.jpg`);
                }
            }
        }
    }

    return imageUrls;
};
