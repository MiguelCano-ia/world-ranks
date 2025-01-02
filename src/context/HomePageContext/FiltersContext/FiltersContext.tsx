import { createContext } from "react";

export type FiltersContextProps = {
  sortOption: string,
  regionOption: string[],
  statusOption: string[],
  isOpen: boolean,
  onChangeStatus: ( option: string ) => void,
  handleSelectRegions: ( region: string ) => void,
  handleOpen: () => void,
  handleValue: ( sortOption: string ) => void,
}

export const FiltersContext = createContext<FiltersContextProps>({} as FiltersContextProps);