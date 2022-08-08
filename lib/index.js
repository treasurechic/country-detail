"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var countries_1 = require("./countries");
var getCountryDetail = function (value) {
    var cdnUrl = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/";
    var detail = countries_1.countries.find(function (country) {
        return country.iso2 === value || country.iso3 === value || country.name === value;
    });
    return __assign(__assign({}, detail), { flag: "".concat(cdnUrl).concat(detail === null || detail === void 0 ? void 0 : detail.iso2.toLowerCase(), ".svg") });
};
exports.default = getCountryDetail;
