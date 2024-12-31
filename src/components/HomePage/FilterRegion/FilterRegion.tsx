import { useContext } from "react";
import { REGIONS_OPTIONS } from "./constans";
import { RegionOptions } from "./RegionOptions";
import { FiltersContext } from "../../../context";

export const FilterRegion = () => {

  const { regionOption, handleSelectRegions } = useContext( FiltersContext );  

  return (
    <>
      <label className="text-secondary-300 font-sans font-bold text-caption">Region</label>
        <div className="flex flex-row flex-wrap gap-4">
          {
            REGIONS_OPTIONS.map( ( region ) => (
              <RegionOptions
                key={ region }
                region={ region }
                isSelected={ regionOption.includes( region ) }
                selectedRegion={ handleSelectRegions }
              />
            ))
          }
        </div>
    </>
  )
}
