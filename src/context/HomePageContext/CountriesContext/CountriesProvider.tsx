import { useMemo, useState } from "react";
import { CountriesContext } from "./";
import { Country } from "../../../interfaces/country.interface";

interface Props {
  children: React.ReactNode;
}

export const CountriesProvider = ({ children }: Props) => {

  const [ isLoading, setIsLoading ] = useState( false );
  const [ countries, setCountries ] = useState<Country[]>( [] );

  const lengthCountries = useMemo(() => countries.length, [ countries ])


  return (
    <CountriesContext.Provider value={{ lengthCountries, isLoading, countries, setCountries, setIsLoading }}>
      { children }
    </CountriesContext.Provider>
  )
}
