import axios from 'axios';
import * as express from 'express';
import { generateTSArray, yearTagTSArray, determineTargetRange } from '../lib/transformations';
import { APIresponse, RecordSet } from '../lib/types';

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
  const { iso, target } = req.params
  const year = parseInt(target, 10);

  const yearRange = determineTargetRange(year, iso)

  axios.get(yearRange).then(response => {
    const monthsByYear = response.data
      .map((record: APIresponse, index: number) => ([record.fromYear + index, record.monthVals]))

    const result = monthsByYear.find((record: RecordSet) => record[0] === year)

    const monthTaggedValues = result[1].map((val: number, index: number) => ({ [index + 1]: val }))

    res.send({ [year]: monthTaggedValues })
  }).catch(error => {
    console.log(error);
  });
})

// Full time series (monts) for country
router.get('/tempTS/:iso', (req, res) => {

  const urlCollection = generateTSArray({ type: 'mavg', indicator: 'tas', iso: req.params.iso })

  const promiseCollection = urlCollection.map(url => axios.get(url));

  Promise.all(promiseCollection)
    .then(response => {
      const fullTimeSeries = yearTagTSArray(response)
      res.send(fullTimeSeries)
    })
    .catch(error => {
      console.log(error);
    });
});

export default router;