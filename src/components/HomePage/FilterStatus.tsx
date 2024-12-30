import { useState } from "react";

const statusFilter = ['Member of the United Nations', 'Independent'];

export const FilterStatus = () => {

  const [ status, setStatus ] = useState( 'Member of the United Nations' );
  
  const styleSelected = "bg-primary rounded-[4px]";
  const styleNotSelected = "bg-secondary-900 border-2 border-secondary-300 rounded-[4px] w-6 h-6";
  const imgElemnt = <img src="../../public/svg/Done_round.svg" alt="done-round" />

  const onChangeStatus = ( option: string ) => {
    setStatus( option );
  }

  return (
    <>
      <label className="text-secondary-300 font-sans font-bold text-caption">Status</label>
        <div className="flex flex-col gap-2">
          {
            statusFilter.map( option => (
              <>
                <div className="flex items-center gap-2">
                  <div
                    key={ option }
                    onClick={ () => onChangeStatus( option ) }
                    className={ status === option ? styleSelected : styleNotSelected }
                  > 
                    { status === option && imgElemnt}
                  </div>
                  <div className="font-sans text-secondary-100 text-body font-semibold">{ option }</div>
                </div>
              </>
            ))
          }
        </div>
    </>
  )
}
