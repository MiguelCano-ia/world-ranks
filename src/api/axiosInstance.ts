import axios from "axios";

export const countriesApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  params: {
    fields: 'flags,name,population,area,region,subregion,independent,unMember'
  },
});

export const countryApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/name',
});