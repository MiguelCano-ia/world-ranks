import { useState } from "react";
import { StatusOption } from "./StatusOption";
import { STATUS_FILTER_OPTIONS } from "./constans";

export const FilterStatus = () => {

  const [ status, setStatus ] = useState( 'Member of the United Nations' );

  const onChangeStatus = ( option: string ) => {
    setStatus( option );
  }

  return (
    <>
      <label className="text-secondary-300 font-sans font-bold text-caption">Status</label>
        <div className="flex flex-col gap-2">
          {
            STATUS_FILTER_OPTIONS.map( option => (
              <StatusOption 
                key={ option }
                option={ option }
                isSelected={ status === option }
                onClick={ () => onChangeStatus( option )}
              />
            ))
          }
        </div>
    </>
  )
}
