const countries = require("./countries");

const getCountryDetail = (value) => {
  return countries.find(
    (country) => country.iso2 === value || country.iso3 === value || country.name === value
  );
};

module.exports = getCountryDetail;
