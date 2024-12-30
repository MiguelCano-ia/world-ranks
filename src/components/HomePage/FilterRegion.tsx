import { useState } from "react";

const regions = ['Americas', 'Antartic', 'Africa', 'Asia', 'Europe', 'Oceania'];

export const FilterRegion = () => {

  const [ selectedRegions, setSelectedRegions ] = useState<string[]>( [] );
  
  const styleIsActive = "bg-secondary-700 text-secondary-100 px-3 py-2 rounded-xl font-sans font-semibold text-body";
  const styleIsNotActive = "bg-secondary-900 text-secondary-300 px-3 py-2 rounded-xl font-sans font-semibold text-body hover:text-secondary-100 hover:bg-secondary-700"

  const handleSelectRegions = ( region: string ) => {
    if ( selectedRegions.includes( region )) return setSelectedRegions( selectedRegions.filter( regionOut => region !== regionOut ));
    setSelectedRegions( [...selectedRegions, region] );
  }

  return (
    <>
      <label className="text-secondary-300 font-sans font-bold text-caption">Region</label>
        <div className="flex flex-row flex-wrap gap-4">
          {
            regions.map( ( region ) => (
              <button 
                key={ region }
                onClick={ () => handleSelectRegions( region ) }
                className={ selectedRegions.includes( region ) ?  styleIsActive : styleIsNotActive }
              >
                { region }
              </button>
            ))
          }
        </div>
    </>
  )
}
