import { Country } from "../../interfaces/country.interface";
import { countriesApi } from "../axiosInstance";

export const fetchCountriesByRegions = async (regions: string[]): Promise<Country[]> => {
  if ( !regions.length ) {
    const { data } = await countriesApi.get<Country[]>( '/all' );
    return data;
  }

  const promises = regions.map(async (region) => {
    const { data } = await countriesApi.get<Country[]>( `/region/${region}` );
    return data;
  });

  return ( await Promise.all(promises) ).flat();
};
