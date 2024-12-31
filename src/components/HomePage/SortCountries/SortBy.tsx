import { SORT_OPTIONS } from "./constans";
import { useDropDown } from "./hooks/useDropDown";
import { SortOption } from "./SortOption";

export const SortBy = () => {

  const { dropDownRef, isOpen, value, handleOpen, handleValue } = useDropDown();

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
