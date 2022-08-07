const countries = require('./countries')
// import countries from "./countries";

interface countryDTO {
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
}

const getCountryDetail = (value: string):countryDTO | {} => {
  const cdnUrl =
    "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/";

  const detail = countries.find(
    (country) =>
      country.iso2 === value || country.iso3 === value || country.name === value
  );
  return {
    ...detail,
    flag: `${cdnUrl}${detail?.iso2.toLowerCase()}.svg`,
  };
};

export default getCountryDetail;


