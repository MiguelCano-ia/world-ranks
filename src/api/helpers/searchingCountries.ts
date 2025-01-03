import { Country } from "../../interfaces/country.interface";

export const searchCountriesByNameRegionSubregion = ( query: string, countries: Country[] ) => {
  return countries.filter( country => {
    if ( country.name.common.toLowerCase().startsWith( query.toLowerCase() ) ) return country;
    if ( country.region.toLowerCase().startsWith( query.toLowerCase() ) ) return country;
    if ( country.subregion.toLowerCase().startsWith( query.toLowerCase() ) ) return country;
    return false; 
  });
}

