import { Country } from "../interfaces/country.interface";
import { countryApi, fetchCountriesByRegions, getIndependentOrUnMemCountries, getSortedCountries, searchCountriesByNameRegionSubregion } from "./";

export const getCountries = async ( sortOption: string, regions: string[], statusOption: string[], query: string ) => {
  try {
    let countries = await fetchCountriesByRegions(regions);

    countries = getSortedCountries( countries, sortOption );
    countries = getIndependentOrUnMemCountries( countries, statusOption );
    countries = searchCountriesByNameRegionSubregion( query, countries );

    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw new Error('Failed to fetch countries');
  }
}

export const getCountryByName = async ( name: string ) => {
  try {
    const { data: country } = await countryApi.get<Country[]>(`name/${ name }?fullText=true`);
    return country;

  } catch ( error ) {
    console.error('Error fetching countries:', error);
    throw new Error('Failed to fetch countries');
  }
}

export const getCountriesByCode =  async ( codes: string[] ) => {
  try {
    const { data: countries } = await countryApi.get<Country[]>(`alpha?codes=${ codes.join(',') }`);
    return countries;

  } catch (error) {
    console.error('Error fetching countries:', error);
    throw new Error('Failed to fetch countries'); 
  }
}


