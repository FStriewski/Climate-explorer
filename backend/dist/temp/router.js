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
const types_1 = require("../lib/types");
const router = express.Router();
// Specific year (12 months) for country
router.get('/year/:indicator/:iso/:targetYear/', (req, res) => {
    const { iso, targetYear, indicator } = req.params;
    const year = parseInt(targetYear, 10);
    const yearRange = transformations_1.determineTargetRange(year, iso, indicator);
    axios_1.default
        .get(yearRange)
        .then(response => {
        const monthsByYear = response.data.map((record, index) => [
            record.fromYear + index,
            record.monthVals
        ]);
        const result = monthsByYear.find((record) => record[0] === year);
        const monthTaggedValues = result[1].reduce((obj, val, index) => {
            obj[index + 1] = val;
            return obj;
        }, {});
        res.send(monthTaggedValues);
    })
        .catch(error => {
        console.log(error);
    });
});
// Full time series of a specific month for country
router.get('/month/:indicator/:iso/:month', (req, res) => {
    console.log(req.params);
    const urlCollection = transformations_1.generateTSArray({
        type: 'mavg',
        indicator: req.params.indicator,
        iso: req.params.iso
    });
    const promiseCollection = urlCollection.map(url => axios_1.default.get(url));
    Promise.all(promiseCollection)
        .then(response => {
        const fullTimeSeries = transformations_1.tagTSArray(response, types_1.Parameter.MONTH);
        const monthlyValues = transformations_1.reduceToMonthTS(fullTimeSeries, req.params.month);
        res.send(monthlyValues);
    })
        .catch(error => {
        console.log(error);
    });
});
// Full time series (all years) for country
router.get('/full/:indicator/:iso/', (req, res) => {
    const urlCollection = transformations_1.generateTSArray({
        type: 'annualavg',
        indicator: req.params.indicator,
        iso: req.params.iso
    });
    const promiseCollection = urlCollection.map(url => axios_1.default.get(url));
    Promise.all(promiseCollection)
        .then(response => {
        const fullTimeSeries = transformations_1.tagTSArray(response, types_1.Parameter.ANNUAL);
        const result = transformations_1.reduceToFullTS(fullTimeSeries);
        res.send(result);
    })
        .catch(error => {
        console.log(error);
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map