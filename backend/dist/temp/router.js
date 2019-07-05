"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express = __importStar(require("express"));
const timeSeries_1 = require("../lib/timeSeries");
const router = express.Router();
// const testUrl = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/${type}/${indicator}/${start}/${end}/${iso}`
router.get('/test', (req, res) => {
    axios_1.default.get('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1940/1959/NLD/')
        .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
        .catch(error => {
        console.log(error);
    });
});
router.get('/fullTS', (req, res) => {
    const urlCollection = timeSeries_1.generateTSArray({ type: 'mavg', indicator: 'tas', iso: 'NLD' });
    const promiseCollection = urlCollection.map(url => axios_1.default.get(url));
    Promise.all(promiseCollection)
        .then(response => {
        const responseCollection = response.map(r => r.data);
        const flatResponse = [].concat.apply([], responseCollection);
        const yearTaggedValues = flatResponse.map((d, index) => {
            const startYear = 1920;
            const year = String(startYear + index);
            const values = d.monthVals;
            return { [year]: values };
        });
        res.send(yearTaggedValues[2]);
    })
        .catch(error => {
        console.log(error);
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map