import { FilePaths } from "./FilePaths";
import { ImgConfig } from "./models";

export const ImageConfig = {
    // news
    newsDb: {
        imgPreview: new ImgConfig(FilePaths.News, { w: 567, h: 706 }),
        imgDetail: new ImgConfig(FilePaths.News, { w: 800, h: 480 }),
    },
    newsImageDb: {
        imgSmall: new ImgConfig(FilePaths.NewsImage, { w: 295, h: 200 }),
        imgBig: new ImgConfig(FilePaths.NewsImage, { w: 800, h: 0, crop: { w: 800, h: 0 } }),
    },
}