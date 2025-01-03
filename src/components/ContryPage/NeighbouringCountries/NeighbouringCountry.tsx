interface Props {
  png: string,
  name: {
    common: string,
  }
  onCountryName: ( countryName: string ) => void,
}

export const NeighbouringCountry = ({ png, name, onCountryName }: Props) => {
  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={ () => onCountryName( name.common ) }
    >
      <img 
        src={ png } alt={ name.common } className="w-20 h-16 object-cover rounded-md" />
      <p className="font-sans text-secondary-100 font-medium text-caption mt-2">{ name.common }</p>
    </div>  
  )
}
