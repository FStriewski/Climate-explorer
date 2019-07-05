import { TSArrayInput, APIresponse} from '../lib/types';


const baseUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/'

export const generateTSArray = ({ type, indicator, iso }: TSArrayInput): string[] => {

  const till1939 = `${baseUrl}/${type}/${indicator}/1920/1939/${iso}`
  const till1959 = `${baseUrl}/${type}/${indicator}/1940/1959/${iso}`
  const till1979 = `${baseUrl}/${type}/${indicator}/1960/1979/${iso}`
  const till1999 = `${baseUrl}/${type}/${indicator}/1980/1999/${iso}`

  return [till1939, till1959, till1979, till1999]
}

export const determineTargetRange = (year: number, iso: string) => {
  if (1920 <= year && year <= 1939) {
    return `${baseUrl}/mavg/tas/1920/1939/${iso}`
  }
  else if (1940 <= year && year <= 1959) {
    return `${baseUrl}/mavg/tas/1940/1959/${iso}`
  }
  else if (1960 <= year && year <= 1979) {
    return `${baseUrl}/mavg/tas/1960/1979/${iso}`
  }
  else if (1980 <= year && year <= 1999) {
    return `${baseUrl}/mavg/tas/1980/1999/${iso}`
  }
  else { return; }
}

export const yearTagTSArray = (response) => {
  const responseCollection = response.map(r => r.data)
  const flatResponse = [].concat.apply([], responseCollection);
  const yearTaggedValues = flatResponse.map((d: APIresponse, index: number) => {
    const startYear = 1920;
    const year = String(startYear + index);
    const monthArray = d.monthVals
    const monthTaggedValues = monthArray.map((val: number, index: number) => ({ [index+1]: val }))
    return { [year]: monthTaggedValues }
  })

  return yearTaggedValues
}