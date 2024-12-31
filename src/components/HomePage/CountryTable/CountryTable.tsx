import { useEffect, useState } from "react";
import { getCountries } from "../../../helpers/getCountries"
import { THDEAD_NAME } from "./constants"
import { CountryInfo } from "./CountryInfo";
import { Country } from "../../../interfaces/country.interface";

export const CountryTable = () => {

  const [ countries, setcountries ] = useState<Country[]>( [] )

  const getAllCountries = async ( ) => {
    const allCountries = await getCountries( 'Alphabetic' );
    setcountries( allCountries );
  }

  useEffect( () => {
    getAllCountries( );
  }, [ ])
  

  return (
    <table className="lg:table-fixed table-auto w-full border-collapse">
      <thead className="font-sans font-bold text-secondary-300 text-caption text-left border-b-2 border-secondary-700">
        <tr>
          {
            THDEAD_NAME.map( thdead =>
              <th
                key={ thdead } 
                className="pb-4">
                  { thdead }
              </th>
            )
          }
        </tr>
      </thead>
      <tbody className="font-sant text-caption text-secondary-100 font-bold sm:text-body">
        {
          countries.map( country => (
            <CountryInfo
              key={ country.name.official }
              { ...country }
            />
          ))
        }
      </tbody>
    </table>
  )
}
