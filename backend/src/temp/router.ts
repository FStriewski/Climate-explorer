import axios from 'axios';
import * as express from 'express';
import { generateTSArray, yearTagTSArray} from '../lib/timeSeries';


const router = express.Router();

// const testUrl = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/${type}/${indicator}/${start}/${end}/${iso}`

router.get('/test', (req, res) => {

  axios.get('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1940/1959/NLD/')
    .then(response => {
      console.log(response.data);
      res.send(response.data)
    })
    .catch(error => {
      console.log(error);
    });

});

router.get('/fullTS', (req, res) => {

  const urlCollection = generateTSArray({type: 'mavg', indicator: 'tas', iso: 'NLD'})

  const promiseCollection = urlCollection.map(url => axios.get(url));

  Promise.all(promiseCollection)
    .then(response => {

      const yearTaggedValues = yearTagTSArray(response)


      res.send(yearTaggedValues[2])
    })
    .catch(error => {
      console.log(error);
    });

});

export default router;