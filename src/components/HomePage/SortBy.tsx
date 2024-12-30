import { useDropDown } from "../../hooks";

const sortBy = ['Population', 'Area', 'Alphabetic', 'Name'];

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
                  sortBy.map( type => (
                    <li 
                      key={ type } 
                      className="hover:bg-secondary-700 font-sans font-medium text-body text-secondary-100 p-2 rounded-lg cursor-pointer transition-colors duration-200 border-b-2 border-secondary-700"
                      onClick={ () => handleValue( type ) }
                    >
                      { type }
                    </li>
                  ))
                }
              </ul>
            </div>  
          )
        }
    </> 
  )
}
