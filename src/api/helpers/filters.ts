import { Country } from "../../interfaces/country.interface";

export const getIndependentOrUnMemCountries = ( countries: Country[], statusOption: string[] ) => {
  
  return countries.filter( country => {
    return statusOption.every( option => {
      if ( option === 'Independent' ) return country.independent;
      if ( option === 'Member of the United Nations') return country.unMember;
    });
  });
}