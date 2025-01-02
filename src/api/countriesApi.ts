import { Country } from "../interfaces/country.interface";
import { countriesApi } from "./";

export const getCountries = async ( sortOption: string, regions: string[], statusOption: string[] ) => {

  try {
    let countries = [];

    if ( !regions.length ) {
      const { data } = await countriesApi.get<Country[]>(`/all?fields=flags,name,population,area,region,independent,unMember`);
      countries = data;
    } else {
      const promises = regions.map( async ( region ) => {
        const { data } = await countriesApi.get<Country[]>(`/region/${ region }?fields=flags,name,population,area,region,independent,unMember`);

        return data;
      })

      countries = await Promise.all( promises );
    }

    countries = getSortedCountries( countries.flat(), sortOption );

    if ( statusOption.length !== 0) countries = getIndependentOrUnMemCountries( countries, statusOption ); 

    return countries;
    
  } catch ( error ) {
    console.error('Error fetching countries:', error);
    throw new Error('Failed to fetch countries');
  }

}

const getSortedCountries = ( countries: Country[], sortOption: string ) => {

  switch ( sortOption.toLocaleLowerCase() ) {
    case 'population':
      countries.sort(( a, b ) => a.population - b.population ).reverse();      
      break;
    case 'area':
      countries.sort(( a, b ) => a.area - b.area ).reverse();
      break;
    case 'alphabetic':
      countries.sort(( a, b ) => a.name.common.localeCompare( b.name.common ) );
      break;
  }

  return countries;
}

const getIndependentOrUnMemCountries = ( countries: Country[], statusOption: string[] ) => {
  
  return countries.filter( country => {
    return statusOption.every( option => {
      if ( option === 'Independent' ) return country.independent;
      if ( option === 'Member of the United Nations') return country.unMember;
    });
  });
}