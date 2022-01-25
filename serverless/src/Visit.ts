import uaParser from 'https://cdn.skypack.dev/ua_parser?dts';

export class Visit {
    host: string;

    path: string;

    useragent: Record<string, unknown>;

    timestamp: Date;

    constructor(timestamp: number, host: string, path: string, useragent: string) {
        this.host = host;
        this.path = path;
        this.useragent = uaParser.userAgent(useragent);

        this.timestamp = new Date(timestamp);
    }
}