import { useReducer } from "react";
import { FiltersContext, filtersReducer, types } from "../";

interface Props {
  children: React.ReactNode;
}

const filtersData = {
  sortOption: 'Population',
  regionOption: [],
  statusOption: ['Independent'],
  isOpen: false,
}

export const FiltersProvider = ({ children }: Props) => {

  const [ filters, dispatch ] = useReducer( filtersReducer, filtersData )

  const handleValue = ( sortOption: string ) => {
    const action = {
      type: types.sort,
      payload: sortOption,
    }

    dispatch( action );
  }
  
  const handleOpen = () => {
    const action = {
      type: types.isOpen,
    }

    dispatch( action );
  }

  const handleSelectRegions = ( region: string ) => {
    const action = {
      type: types.region,
      payload: region,
    }

    dispatch( action );
  }

  const onChangeStatus = ( option: string ) => {
    const action = {
      type: types.status,
      payload: option,
    }

    dispatch( action );
  }

  return (
    <FiltersContext.Provider value={{ ...filters, handleValue, handleOpen,onChangeStatus, handleSelectRegions }}> 
      { children }
    </FiltersContext.Provider>
  )
}

