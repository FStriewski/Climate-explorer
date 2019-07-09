import axios from 'axios';
import * as express from 'express';
import {
  generateTSArray,
  tagTSArray,
  determineTargetRange,
  reduceToMonthTS,
  reduceToFullTS
} from '../lib/transformations';
import { APIresponse, RecordSet, Parameter } from '../lib/types';

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
router.get('/year/:indicator/:iso/:targetYear/', (req, res) => {
  const { iso, targetYear, indicator } = req.params;
  const year = parseInt(targetYear, 10);
  
  const yearRange = determineTargetRange(year, iso, indicator);
  
  axios
  .get(yearRange)
  .then(response => {
      const monthsByYear = response.data.map(
        (record: APIresponse, index: number) => [
          record.fromYear + index,
          record.monthVals
        ]
      );

      const result = monthsByYear.find(
        (record: RecordSet) => record[0] === year
      );

      const monthTaggedValues = result[1].reduce((obj:{}, val: number, index: number) => {
        obj[index+1] = val;
        return obj
      }, {}
    );

      res.send(monthTaggedValues);
    })
    .catch(error => {
      console.log(error);
    });
});

// Full time series of a specific month for country
router.get('/month/:indicator/:iso/:month', (req, res) => {
  console.log(req.params);
  const urlCollection = generateTSArray({
    type: 'mavg',
    indicator: req.params.indicator,
    iso: req.params.iso
  });

  const promiseCollection = urlCollection.map(url => axios.get(url));

  Promise.all(promiseCollection)
    .then(response => {
      const fullTimeSeries = tagTSArray(response, Parameter.MONTH);
      const monthlyValues = reduceToMonthTS(fullTimeSeries, req.params.month);
      res.send(monthlyValues);
    })
    .catch(error => {
      console.log(error);
    });
});

// Full time series (all years) for country
router.get('/full/:indicator/:iso/', (req, res) => {
  const urlCollection = generateTSArray({
    type: 'annualavg',
    indicator: req.params.indicator,
    iso: req.params.iso
  });

  const promiseCollection = urlCollection.map(url => axios.get(url));

  Promise.all(promiseCollection)
    .then(response => {
      const fullTimeSeries = tagTSArray(response, Parameter.ANNUAL);
      const result = reduceToFullTS(fullTimeSeries);

      res.send(result);
    })
    .catch(error => {
      console.log(error);
    });
});

export default router;
