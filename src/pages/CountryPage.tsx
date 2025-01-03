import { useParams } from "react-router";
import { CountryDetails, CountryFlag, CountryHeader, CountryStats, NeighbouringCountries } from "../components";
import { WorldRanksLayout } from "../layout/WorldRanksLayout";
import { getCountryByName } from "../api";
import { Country } from "../interfaces/country.interface";
import { useEffect, useState } from "react";

export const CountryPage = () => {

  const { name } = useParams();
  const [ country, setCountry ] = useState<Country>();

  const getCountry = async () => {
    if ( !name ) return;

    const country = await getCountryByName( name );
    setCountry( country[0] );
  }
  
  useEffect(() => {
    getCountry();
  }, [ name ])
  

  return (
    <WorldRanksLayout>
      {
        country && 
          <div className="sm:px-12 sm:-mt-16 ">
            <div className="flex flex-col gap-10 bg-secondary-900 sm:rounded-t-lg min-h-screen sm:border-[1px]sm:border-secondary-700 w-2/3 m-auto sm:border-[1px] sm:border-secondary-700">
              <CountryFlag png={ country.flags.png } />
              <div className="flex flex-col gap-10">
                <CountryHeader name={ country.name } />
                <CountryStats population={ country.population } area={ country.area } />
              </div>
              <CountryDetails { ...country } />
              <NeighbouringCountries />
            </div>
          </div>
      }
    </WorldRanksLayout>
  )
}
