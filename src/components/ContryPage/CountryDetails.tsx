import { Currency, Languages } from "../../interfaces/country.interface";
import { COUNTRY_DETAILS } from "../../utilities";

interface Props {
  capital: string[];
  subregion: string;
  languages: Languages;
  currencies: { [key: string]: Currency };
  continents: string[];
}

export const CountryDetails = ({ capital, subregion, languages, currencies, continents }: Props) => {

  const capitalsNames = () => {
    if ( !capital ) return '';

    return capital.map( capital => capital ).join(', ');
  }

  const languagesNames = () => {
    if ( !languages ) return '';

    return Object.values( languages ).join(', ')
  }
  
  const currencyNames = () => {
    if ( !currencies ) return '';
    
    return Object.entries( currencies as Record<string, { name: string; symbol: string }>)
      .map(([, details ] ) => details.name)
      .join(', ');
  }

  const continentsNames = () => {
    return continents.map( continent => continent).join(', ');
  }

  const details = [
    capitalsNames(),
    subregion,
    languagesNames(),
    currencyNames(),
    continentsNames()
  ]
  
  return (
    <div className="flex flex-col">
      {
        COUNTRY_DETAILS.map( ( detail, index ) => (
          <div key={ index } className="flex justify-between p-5 border-secondary-700 border-[1px] max-sm:p-3">
            <div className="font-sans text-secondary-300 font-bold text-body">{ detail }</div>
            <div className="font-sans text-secondary-100 font-bold text-body text-right">{ details[ index ] }</div>
          </div>
        ))
      }
    </div>
  )
}
