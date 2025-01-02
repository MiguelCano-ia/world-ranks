import { CountriesContext } from "../../../context";
import { FounCountries } from "./FoundCountries";
import { SearchBar } from "./SearchBar";
import { useContext } from "react";

export const SearchResults = () => {

  const { lengthCountries } = useContext( CountriesContext );

  return (
    <div className="flex justify-between items-center max-md:flex-col max-md:gap-3">
      <FounCountries lengthCountries={ lengthCountries }/>
      <SearchBar />
    </div>
  )
}
