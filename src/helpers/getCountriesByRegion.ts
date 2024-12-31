import axios from "axios";

export const getCountriesByRegion = async ({ regions }) => {

  const allCountries = [];

  regions.map( region => {

    const countries = await axios.get(`/${ region }`)
  })
} 