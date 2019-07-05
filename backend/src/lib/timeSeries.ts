
const baseUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/'

type TSArrayInput = {
  type: 'mavg' | 'annualavg';
  indicator: 'pr' | 'tas';
  iso: string;
}

export const generateTSArray = ({ type, indicator, iso }: TSArrayInput): string[] => {

  const till1939 = `${baseUrl}/${type}/${indicator}/1920/1939/${iso}`
  const till1959 = `${baseUrl}/${type}/${indicator}/1940/1959/${iso}`
  const till1979 = `${baseUrl}/${type}/${indicator}/1960/1979/${iso}`
  const till1999 = `${baseUrl}/${type}/${indicator}/1980/1999/${iso}`

  return [till1939, till1959, till1979, till1999]

}