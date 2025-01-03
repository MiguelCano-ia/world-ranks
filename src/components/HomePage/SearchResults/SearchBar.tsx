import { ChangeEvent, useContext, useRef } from "react"
import { CountriesContext } from "../../../context";

export const SearchBar = () => {

  const debounceRef = useRef<NodeJS.Timeout>();
  const { setQuery } = useContext( CountriesContext );

  const onQueryChanged = ({ target }: ChangeEvent<HTMLInputElement>) => {
    
    if ( debounceRef.current ) {
      clearTimeout( debounceRef.current );
    }

    debounceRef.current = setTimeout( () => {
      setQuery( target.value );
    }, 300 );
  }

  return (
    <form className="flex items-center bg-secondary-700 rounded-lg p-2 gap-2">
      <button type="button">
        <img 
          src="../../public/svg/Search.svg" 
          alt="search"
          className="hover:transition-transform duration-200 hover:scale-110 cursor-pointer"  
        />
      </button>
      <input 
        type="text"
        name="country"
        onChange={ onQueryChanged }
        placeholder="Search by Name, Region, Subregion"
        className="bg-inherit text-secondary-100 text-body font-medium font-sans opacity-60 focus:outline-none w-72" 
      />
    </form>
  )
}   
