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
    const { data: country } = await countryApi.get(`/${ name }?fullText=true`);
    return country;

  } catch ( error ) {
    console.error('Error fetching countries:', error);
    throw new Error('Failed to fetch countries');
  }
}


