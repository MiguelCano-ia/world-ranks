import { useState } from "react";
import { StatusOption } from "./StatusOption";
import { STATUS_FILTER_OPTIONS } from "./constans";

export const FilterStatus = () => {

  const [ status, setStatus ] = useState<string[]>( [] );

  const onChangeStatus = ( option: string ) => {
    if ( status.includes( option )) return setStatus( [] );
    if ( !status.includes( option ) && status.length === 1 ) return setStatus( STATUS_FILTER_OPTIONS.filter( status => status === option) );
    setStatus([ ...status, option ]);
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
                isSelected={ status.includes( option ) }
                onClick={ () => onChangeStatus( option )}
              />
            ))
          }
        </div>
    </>
  )
}
