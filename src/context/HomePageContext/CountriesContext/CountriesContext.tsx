import { createContext, Dispatch, SetStateAction } from "react";
import { Country } from "../../../interfaces/country.interface";

interface CountriesContextProps {
  lengthCountries: number,
  isLoading: boolean,
  query: string,
  countries: Country[],
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setCountries: Dispatch<SetStateAction<Country[]>>,
  setQuery: Dispatch<SetStateAction<string>>,
}

export const CountriesContext = createContext<CountriesContextProps>({} as CountriesContextProps);