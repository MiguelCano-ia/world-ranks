interface Props {
  region: string,
  isSelected: boolean,
  selectedRegion: ( region: string ) => void,
}

export const RegionOptions = ({ region, isSelected, selectedRegion }: Props ) => {
  
  const styleIsActive = "bg-secondary-700 text-secondary-100 px-3 py-2 rounded-xl font-sans font-semibold text-body";
  const styleIsNotActive = "bg-secondary-900 text-secondary-300 px-3 py-2 rounded-xl font-sans font-semibold text-body hover:text-secondary-100 hover:bg-secondary-700"

  return (
    <button 
      onClick={ () => selectedRegion( region ) }
      className={ isSelected ?  styleIsActive : styleIsNotActive }
    >
      { region }
    </button>
  )
}
