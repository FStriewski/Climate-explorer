import axios from 'axios';

const baseUrl = 'http://localhost:4000';

type RequestParams = {
  indicator: string;
  country: string;
};

type RequestParamsYear = {
  year: string;
} & RequestParams;

type RequestParamsMonth = {
  month: string;
} & RequestParams;

export const getYear = (props: RequestParamsYear) => {
  const { indicator, country, year } = props;

  if (!indicator || !country || !year) {
    return;
  }
  axios.get(`${baseUrl}/temp/${indicator}/${country}/${year}/`);
};

export const getMonthTimeSeries = (props: RequestParamsMonth) => {
  const { indicator, country, month } = props;
  if (!indicator || !country || !month) {
    return;
  }
  axios.get(`${baseUrl}/getMonthTimeSeries/${indicator}/${country}/${month}/`);
};

export const getTimeSeries = (props: RequestParams) => {
  const { indicator, country } = props;
  if (!indicator || !country) {
    return;
  }

  axios.get(`${baseUrl}/timeSeries/${indicator}/${country}/`);
};
