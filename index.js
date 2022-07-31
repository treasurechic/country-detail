const countries = require("./countries");

const getCountryDetail = (value) => {
  const cdnUrl =
    "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/";

  const detail = countries.find(
    (country) =>
      country.iso2 === value || country.iso3 === value || country.name === value
  );
  return {
    ...detail,
    flag: `${cdnUrl}${detail.iso2.toLowerCase()}.svg`,
  };
};

module.exports = getCountryDetail;
