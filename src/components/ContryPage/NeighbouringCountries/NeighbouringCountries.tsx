import { Country } from "../../../interfaces/country.interface";
import { getCountriesByCode } from "../../../api";
import { NeighbouringCountry } from "./NeighbouringCountry";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface Props {
  neighbouringCountries: string[] | undefined;
}

export const NeighbouringCountries = ({ neighbouringCountries }: Props) => {

  const navigate = useNavigate();
  const [ countries, setCountries ] = useState<Country[]>( [] );
  
  const getCountries = async () => {

    if ( !neighbouringCountries ) return <div>No neighbouringCountries founded</div>

    const countriesByCode = await getCountriesByCode( neighbouringCountries );
    setCountries( countriesByCode );
  }

  useEffect( () => {
    getCountries();
  }, [ countries ]);
  
  const navigateToCountry = ( countryName: string ) => {
    navigate(`/country/${ countryName }`)
  }

  return (
    <div className="flex flex-col px-5">
      <p className="font-sans text-secondary-300 font-semibold text-caption mb-5">Neighbouring Countries</p>
      <div className="flex flex-wrap gap-5">
        {
          countries.map( country => (
            <NeighbouringCountry 
              key={ country.name.common }
              png={ country.flags.png }
              name={ country.name }
              onCountryName={ navigateToCountry }
            />
          ))
        }
      </div>
    </div>
  )
}
