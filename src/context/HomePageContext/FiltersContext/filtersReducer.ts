import { types } from ".";

interface Filters {
  sortOption: string,
  regionOption: string[],
  statusOption: string[],
  isOpen: boolean,
}

type Action =
  | { type: 'SORT_OPTION', payload: string }
  | { type: 'IS_OPEN' }
  | { type: 'CHANGE_STATUS', payload: string }
  | { type: 'REGION_OPTION', payload: string };


export const filtersReducer = ( state: Filters, action: Action ) => {

  switch ( action.type ) {
    case types.sort: 
      return {
        ...state,
        sortOption: action.payload,
        isOpen: false,
      }
    case types.isOpen:
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    case types.status: {
      const option = action.payload;

      if ( state.statusOption.includes( option ) ) {
        return { 
          ...state, 
          statusOption: state.statusOption.filter( opOut => opOut !== option), 
        };
      }

      return { 
        ...state, 
        statusOption: [ ...state.statusOption, option ],      }
    }
    case types.region: {
      const region = action.payload;

      if ( state.regionOption.includes( region ) ) {
        const selectedRegions = state.regionOption.filter( regionOut => region !== regionOut );

        return { 
          ...state, 
          regionOption: selectedRegions 
        }
      }

      return { 
        ...state, 
        regionOption: [ ...state.regionOption, region ] 
      }
    }
  }
}