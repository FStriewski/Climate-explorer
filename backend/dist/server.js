"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
const type = 'mavg';
const indicator = 'tas';
const start = 1940;
const end = 1959;
const iso = 'NLD';
const baseUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1940/1959/NLD';
const testUrl = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/${type}/${indicator}/${start}/${end}/${iso}`;
app.get('/test', (req, res) => {
    axios_1.default.get('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1940/1959/NLD/')
        .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
        .catch(error => {
        console.log(error);
    });
});
app.listen(4000, () => console.log('Example app listening on port 4000!'));
//# sourceMappingURL=server.js.map