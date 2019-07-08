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

export const getYear = async (props: RequestParamsYear) => {
  const { indicator, isoCountry, year } = props;

  if (!indicator || !isoCountry || !year) {
    return;
  }
  const response = await axios.get(
    `${baseUrl}/temp/${indicator}/${isoCountry}/${year}/`
  );

  return response.data;
};

export const getMonthTimeSeries = async (props: RequestParamsMonth) => {
  const { indicator, isoCountry, month } = props;
  if (!indicator || !isoCountry || !month) {
    return;
  }
  const response = await axios.get(
    `${baseUrl}/getMonthTimeSeries/${indicator}/${isoCountry}/${month}/`
  );

  return response.data;
};

export const getTimeSeries = async (props: RequestParams) => {
  const { indicator, isoCountry } = props;
  if (!indicator || !isoCountry) {
    return;
  }

  const response = await axios.get(
    `${baseUrl}/timeSeries/${indicator}/${isoCountry}/`
  );

  return response.data;
};
