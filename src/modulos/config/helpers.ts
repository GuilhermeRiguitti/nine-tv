export function uploadUrl(path: string, url: string) {
    // if (path && path != "") {
    //     path = `/${path}`;
    // } else {
    //     path = "";
    // }
    return process.env.NEXT_PUBLIC_UPLOAD_URL + path + url;
}