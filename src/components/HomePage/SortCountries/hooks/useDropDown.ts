import { useEffect, useRef, useState } from "react";
import { listenForOutsideClicks } from "../../../../utilities/listenForOutsideClick";

export const useDropDown = () => {

  const dropDownRef = useRef<HTMLDivElement | null>( null );
  const [ isOpen, setIsOpen ] = useState( false );
  const [ listening, setListening ] = useState( false );
  const [ value, setValue ]  = useState( 'Population' );

  useEffect( listenForOutsideClicks( 
    listening, 
    setListening, 
    dropDownRef, 
    setIsOpen 
  ), []);
    
  const handleOpen = () => {
    setIsOpen( !isOpen );
  }
  
  const handleValue = ( option: string ) => {
    setValue( option );
    setIsOpen( false );
  }

  return {
    dropDownRef,
    isOpen,
    value,
    handleOpen,
    handleValue,
  }
}
