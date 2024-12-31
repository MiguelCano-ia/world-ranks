import { countriesApi } from "../api/axiosCountries";
import { Country } from "../interfaces/country.interface";

export const getCountries = async ( sortOption: string ) => {

  const { data: countries } = await countriesApi.get<Country[]>(`?fields=flags,name,population,area,region`);
  
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