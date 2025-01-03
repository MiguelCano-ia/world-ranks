import { useMemo, useState } from "react";
import { CountriesContext } from "./";
import { Country } from "../../../interfaces/country.interface";

interface Props {
  children: React.ReactNode;
}

export const CountriesProvider = ({ children }: Props) => {

  const [ isLoading, setIsLoading ] = useState( true );
  const [ query, setQuery ] = useState( '' )
  const [ countries, setCountries ] = useState<Country[]>( [] );

  const lengthCountries = useMemo(() => countries.length, [ countries ]);

  return (
    <CountriesContext.Provider value={{ lengthCountries, isLoading, countries, query, setCountries, setIsLoading, setQuery }}>
      { children }
    </CountriesContext.Provider>
  )
}
