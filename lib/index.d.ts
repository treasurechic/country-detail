declare type countryDTO = {
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
    };
    dialCode: string;
    flag: string;
};
declare const getCountryDetail: (value: string) => countryDTO;
export default getCountryDetail;
