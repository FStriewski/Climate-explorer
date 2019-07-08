import axios from 'axios';

const baseUrl = 'http://localhost:4000';

type RequestParams = {
  indicator: string;
  isoCountry: string;
};

type RequestParamsYear = {
  year: string;
} & RequestParams;

type RequestParamsMonth = {
  month: string;
} & RequestParams;

export const getYear = (props: RequestParamsYear) => {
  const { indicator, isoCountry, year } = props;

  if (!indicator || !isoCountry || !year) {
    return;
  }
  return axios.get(`${baseUrl}/temp/${indicator}/${isoCountry}/${year}/`);
};

export const getMonthTimeSeries = (props: RequestParamsMonth) => {
  const { indicator, isoCountry, month } = props;
  if (!indicator || !isoCountry || !month) {
    return;
  }
  return axios.get(`${baseUrl}/getMonthTimeSeries/${indicator}/${isoCountry}/${month}/`);
};

export const getTimeSeries = async (props: RequestParams) => {
  const { indicator, isoCountry } = props;
  if (!indicator || !isoCountry) {
    return;
  }
  
  const response =  await axios.get(`${baseUrl}/timeSeries/${indicator}/${isoCountry}/`);
  
  console.log(response.data)
  return response.data
};
