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
exports.determineTargetRange = (year, iso, indicator) => {
    if (1920 <= year && year <= 1939) {
        return `${baseUrl}/mavg/${indicator}/1920/1939/${iso}`;
    }
    else if (1940 <= year && year <= 1959) {
        return `${baseUrl}/mavg/${indicator}/1940/1959/${iso}`;
    }
    else if (1960 <= year && year <= 1979) {
        return `${baseUrl}/mavg/${indicator}/1960/1979/${iso}`;
    }
    else if (1980 <= year && year <= 1999) {
        return `${baseUrl}/mavg/${indicator}/1980/1999/${iso}`;
    }
    else {
        return;
    }
};
exports.tagTSArray = (response, parameter) => {
    const responseCollection = response.map(r => r.data);
    const flatResponse = [].concat.apply([], responseCollection);
    return flatResponse.map((d, index) => {
        const startYear = 1920;
        const year = String(startYear + index);
        const tsArray = d[parameter];
        const taggedValues = tsArray.map((val, index) => [
            [index + 1],
            val
        ]);
        return [year, taggedValues];
    });
};
exports.reduceToMonthTS = (fullTS, month) => fullTS.reduce((obj, year) => {
    const label = year[0];
    const targetMonth = year[1].filter(m => m[0][0] === parseInt(month, 10));
    const value = targetMonth[0][1];
    obj[label] = value;
    return obj;
}, {});
exports.reduceToFullTS = fullTS => fullTS.reduce((obj, record) => {
    const label = record[0];
    obj[label] = record[1][0][1];
    return obj;
}, {});
//# sourceMappingURL=transformations.js.map