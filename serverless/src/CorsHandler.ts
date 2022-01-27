export function getCorsHeader(response: Response) {
    const headers = new Headers(response.headers);

    if (!headers.has("access-control-allow-origin")) {
        headers.set("access-control-allow-origin", "*");
        headers.set("access-control-allow-headers", "*");
    }

    return headers;
}