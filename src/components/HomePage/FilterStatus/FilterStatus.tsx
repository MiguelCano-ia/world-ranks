import { useContext } from "react";
import { StatusOption } from "./StatusOption";
import { STATUS_FILTER_OPTIONS } from "./constans";
import { FiltersContext } from "../../../context/FiltersContext";

export const FilterStatus = () => {

  const { statusOption, onChangeStatus } = useContext( FiltersContext );

  return (
    <>
      <label className="text-secondary-300 font-sans font-bold text-caption">Status</label>
        <div className="flex flex-col gap-2">
          {
            STATUS_FILTER_OPTIONS.map( option => (
              <StatusOption 
                key={ option }
                option={ option }
                isSelected={ statusOption.includes( option ) }
                onClick={ () => onChangeStatus( option )}
              />
            ))
          }
        </div>
    </>
  )
}
