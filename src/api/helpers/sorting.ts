import { Country } from "../../interfaces/country.interface";

export const getSortedCountries = ( countries: Country[], sortOption: string ) => {

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