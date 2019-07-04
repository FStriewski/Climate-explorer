import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());


const type = 'mavg'
const indicator = 'tas'
const start = 1940
const end = 1959
const iso = 'NLD'

const baseUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1940/1959/NLD'

const testUrl = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/${type}/${indicator}/${start}/${end}/${iso}`

app.get('/test', (req, res) => {

   axios.get('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1940/1959/NLD/')
    .then(response => {
      console.log(response.data);
      res.send(response.data)
    })
    .catch(error => {
      console.log(error);
    });

});

app.listen(4000, () => console.log('Example app listening on port 4000!'));