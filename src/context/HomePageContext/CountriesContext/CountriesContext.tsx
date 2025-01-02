import { createContext, Dispatch, SetStateAction } from "react";
import { Country } from "../../../interfaces/country.interface";

interface CountriesContextProps {
  lengthCountries: number,
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  countries: Country[],
  setCountries: Dispatch<SetStateAction<Country[]>>,
}

export const CountriesContext = createContext<CountriesContextProps>({} as CountriesContextProps);