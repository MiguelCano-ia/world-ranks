interface Props {
  option: string,
  handleValue: ( option: string ) => void
}

export const SortOption = ({ option, handleValue }: Props) => {
  return (
    <li 
      className="hover:bg-secondary-700 font-sans font-medium text-body text-secondary-100 p-2 rounded-lg cursor-pointer transition-colors duration-200 border-b-2 border-secondary-700"
      onClick={ () => handleValue( option ) }
    >
      { option }
    </li>
  )
}
