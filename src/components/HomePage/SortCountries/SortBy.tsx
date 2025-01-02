import { FiltersContext } from "../../../context";
import { listenForOutsideClicks, SORT_OPTIONS } from "../../../utilities";
import { SortOption } from "./SortOption";
import { useContext, useEffect, useRef, useState } from "react";

export const SortBy = () => {

  const { handleValue, handleOpen, sortOption: value, isOpen } = useContext( FiltersContext );
  const dropDownRef = useRef<HTMLDivElement | null>( null );
  const [ listening, setListening ] = useState( false );

  useEffect( listenForOutsideClicks( 
    listening, 
    setListening, 
    dropDownRef, 
    handleOpen, 
  ), []);

  return (
    <>
      <label className="text-secondary-300 font-sans font-bold text-caption">Sort by</label>
        <div className="flex justify-between border-2 border-secondary-700 rounded-xl p-3 cursor-pointer" ref={ dropDownRef } onClick={ handleOpen }>
          <p className="text-secondary-100 font-sans font-medium text-body">{ value }</p>
          <img src="../../../public/svg/Expand_down.svg" alt="expand-down" />
        </div>
        {
          isOpen && (
            <div className="bg-secondary-900">
              <ul className="flex flex-col gap-2">
                {
                  SORT_OPTIONS.map( option => (
                    <SortOption 
                      key={ option }
                      option={ option }
                      handleValue={ handleValue }
                    />
                  ))
                }
              </ul>
            </div>  
          )
        }
    </> 
  )
}
