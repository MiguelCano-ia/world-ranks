import { useParams } from "react-router";
import { CountryDetails, CountryFlag, CountryHeader, CountryStats, NeighbouringCountries } from "../components";
import { WorldRanksLayout } from "../layout/WorldRanksLayout";
import { getCountryByName } from "../api";
import { Country } from "../interfaces/country.interface";
import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../context";

export const CountryPage = () => {

  const { name } = useParams();
  const [ country, setCountry ] = useState<Country>();
  const [ isLoading, setisLoading ] = useState( true );
  const { setQuery } = useContext( CountriesContext );

  const getCountry = async () => {
    setisLoading( true );
    if ( !name ) return;

    const country = await getCountryByName( name );
    setCountry( country[0] );
    setQuery( country[0].name.common );
    setisLoading( false );
  }
  
  useEffect(() => {
    getCountry();
  }, [ name ])
  

  return (
    <WorldRanksLayout>
      {
        isLoading 
        ? 
        <div className="flex items-center justify-center sm:h-[500px] h-[250px]">
          <img src="../../public/svg/oval.svg" alt="loading" className="text-secondary-100 w-16 h-16"></img>
        </div>
        :
        country && 
          <div className="sm:px-12 sm:-mt-16 ">
            <div className="flex flex-col gap-10 bg-secondary-900 sm:rounded-t-lg min-h-screen sm:border-[1px]sm:border-secondary-700 w-2/3 m-auto sm:border-[1px] sm:border-secondary-700 max-sm:w-screen">
              <CountryFlag png={ country.flags.png } />
              <div className="flex flex-col gap-10">
                <CountryHeader name={ country.name } />
                <CountryStats population={ country.population } area={ country.area } />
              </div>
              <CountryDetails { ...country } />
              <NeighbouringCountries neighbouringCountries={ country.borders } />
            </div>
          </div>
      }
    </WorldRanksLayout>
  )
}
