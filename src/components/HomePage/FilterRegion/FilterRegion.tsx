import { useState } from "react";
import { REGIONS_OPTIONS } from "./constans";
import { RegionOptions } from "./RegionOptions";

export const FilterRegion = () => {

  const [ selectedRegions, setSelectedRegions ] = useState<string[]>( [] );

  const handleSelectRegions = ( region: string ) => {
    if ( selectedRegions.includes( region )) return setSelectedRegions( selectedRegions.filter( regionOut => region !== regionOut ));
    setSelectedRegions( [...selectedRegions, region] );
  }

  return (
    <>
      <label className="text-secondary-300 font-sans font-bold text-caption">Region</label>
        <div className="flex flex-row flex-wrap gap-4">
          {
            REGIONS_OPTIONS.map( ( region ) => (
              <RegionOptions
                key={ region }
                region={ region }
                isSelected={ selectedRegions.includes( region ) }
                selectedRegion={ handleSelectRegions }
              />
            ))
          }
        </div>
    </>
  )
}
