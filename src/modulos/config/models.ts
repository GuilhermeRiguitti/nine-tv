import { uploadUrl } from "./helpers";

export interface IImgConfig {
    crop?: {
        w: number,
        h: number
    }
    getImage(url: string): { src: string, width: number; height: number; unoptimized: boolean };

}
export class ImgConfig implements IImgConfig {

    constructor(public path: string, public sizes: { w: number, h: number, crop?: { w: number, h: number } }) {
    }

    getImage(url: string): { src: string, width: number; height: number; unoptimized: boolean } {
        return {
            src: uploadUrl(this.path, url),
            width: this.sizes.w,
            height: this.sizes.h,
            unoptimized: true
        }
    }
}