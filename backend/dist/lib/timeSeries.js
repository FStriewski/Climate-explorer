"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/';
exports.generateTSArray = ({ type, indicator, iso }) => {
    const till1939 = `${baseUrl}/${type}/${indicator}/1920/1939/${iso}`;
    const till1959 = `${baseUrl}/${type}/${indicator}/1940/1959/${iso}`;
    const till1979 = `${baseUrl}/${type}/${indicator}/1960/1979/${iso}`;
    const till1999 = `${baseUrl}/${type}/${indicator}/1980/1999/${iso}`;
    return [till1939, till1959, till1979, till1999];
};
exports.yearTagTSArray = (response) => {
    const responseCollection = response.map(r => r.data);
    const flatResponse = [].concat.apply([], responseCollection);
    const yearTaggedValues = flatResponse.map((d, index) => {
        const startYear = 1920;
        const year = String(startYear + index);
        const monthArray = d.monthVals;
        const monthTaggedValues = monthArray.map((val, index) => ({ [index + 1]: val }));
        return { [year]: monthTaggedValues };
    });
    return yearTaggedValues;
};
//# sourceMappingURL=timeSeries.js.map