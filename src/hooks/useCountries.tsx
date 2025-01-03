import { CountriesContext, FiltersContext } from "../context";
import { getCountries } from "../api";
import { useContext, useEffect, useState } from "react";

export const useCountries = () => {

  const [ currentPage, setCurrentPage] = useState( 0 );
  const { sortOption, regionOption, statusOption } = useContext( FiltersContext );
  const { isLoading, lengthCountries, countries, query, setCountries, setIsLoading } = useContext( CountriesContext );

  const getAllCountries = async () => {
    setIsLoading( true );

    try {
      const allCountries = await getCountries( sortOption, regionOption, statusOption, query );
      setCountries( allCountries );
    } catch ( error ) {
      console.error( 'Error fetching countries:', error );
    } finally {
      setIsLoading( false );
      setCurrentPage( 0 );
    }
  }
  
  useEffect( () => {
    getAllCountries();
  }, [ sortOption, regionOption, statusOption, query ]);

  return {
    isLoading,
    lengthCountries,
    countries,
    currentPage,
    setCurrentPage,
  }
}
