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
const baseUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/';
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
router.get('/temp/:iso/:target', (req, res) => {
    const { iso, target } = req.params;
    const year = parseInt(target, 10);
    const yearRange = (year) => {
        if (1920 <= year && year <= 1939) {
            return `${baseUrl}/mavg/tas/1920/1939/${iso}`;
        }
        else if (1940 <= year && year <= 1959) {
            return `${baseUrl}/mavg/tas/1940/1959/${iso}`;
        }
        else if (1960 <= year && year <= 1979) {
            return `${baseUrl}/mavg/tas/1960/1979/${iso}`;
        }
        else if (1980 <= year && year <= 1999) {
            return `${baseUrl}/mavg/tas/1980/1999/${iso}`;
        }
        else {
            return;
        }
    };
    axios_1.default.get(yearRange(year)).then(response => {
        const monthsByYear = response.data
            .map((record, index) => ([record.fromYear + index, record.monthVals]));
        const result = monthsByYear.find(record => record[0] === year);
        const monthTaggedValues = result[1].map((val, index) => ({ [index + 1]: val }));
        res.send({ [year]: monthTaggedValues });
    });
});
router.get('/tempTS/:iso', (req, res) => {
    const urlCollection = timeSeries_1.generateTSArray({ type: 'mavg', indicator: 'tas', iso: req.params.iso });
    const promiseCollection = urlCollection.map(url => axios_1.default.get(url));
    Promise.all(promiseCollection)
        .then(response => {
        const fullTimeSeries = timeSeries_1.yearTagTSArray(response);
        res.send(fullTimeSeries);
    })
        .catch(error => {
        console.log(error);
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map