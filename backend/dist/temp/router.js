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
const transformations_1 = require("../lib/transformations");
const router = express.Router();
// const testUrl = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/${type}/${indicator}/${start}/${end}/${iso}`
// router.get('/test', (req, res) => {
//   axios.get('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1940/1959/NLD/')
//     .then(response => {
//       console.log(response.data);
//       res.send(response.data)
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });
// Specific year (12 months) for country
router.get('/temp/:iso/:target', (req, res) => {
    const { iso, target } = req.params;
    const year = parseInt(target, 10);
    const yearRange = transformations_1.determineTargetRange(year, iso);
    axios_1.default.get(yearRange).then(response => {
        const monthsByYear = response.data
            .map((record, index) => ([record.fromYear + index, record.monthVals]));
        const result = monthsByYear.find((record) => record[0] === year);
        const monthTaggedValues = result[1].map((val, index) => ({ [index + 1]: val }));
        res.send({ [year]: monthTaggedValues });
    }).catch(error => {
        console.log(error);
    });
});
// Full time series (monts) for country
router.get('/tempTS/:iso', (req, res) => {
    const urlCollection = transformations_1.generateTSArray({ type: 'mavg', indicator: 'tas', iso: req.params.iso });
    const promiseCollection = urlCollection.map(url => axios_1.default.get(url));
    Promise.all(promiseCollection)
        .then(response => {
        const fullTimeSeries = transformations_1.yearTagTSArray(response);
        res.send(fullTimeSeries);
    })
        .catch(error => {
        console.log(error);
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map