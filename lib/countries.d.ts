export declare const countries: ({
    iso2: string;
    iso3: string;
    latitude: number;
    longitude: number;
    name: string;
    currency: {
        code: string;
        name: string;
        symbol: string;
    };
    language: {
        code: string;
        name: string;
        iso639_2?: undefined;
        nativeName?: undefined;
    };
    dialCode: string;
} | {
    iso2: string;
    iso3: string;
    latitude: number;
    longitude: number;
    name: string;
    currency: {
        code: string;
        name: string;
        symbol: string;
    };
    language: {
        code: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    };
    dialCode: string;
})[];
