interface Props {
  flags: {
    svg: string,
  }
  area: number,
  population: number,
  region: string,
  name: {
    common: string,
  }
  onCountryName: ( countryName: string ) => void;
}

export const CountryInfo = ({ flags, name, population, area, region, onCountryName }: Props) => {

  const handleCountryName = () => {
    onCountryName( name.common.toLowerCase() );
  }

  return (
    <tr  onClick={ handleCountryName }  className="cursor-pointer">
      <td className="pt-6">
        <img src={ flags.svg } alt={ name.common } className="object-cover w-12 h-9 rounded-sm"/>
      </td>
      <td className="pt-6">{ name.common }</td>
      <td className="pt-6">{ population }</td>
      <td className="pt-6">{ area }</td>
      <td className="pt-6">{ region }</td>
    </tr>
  )
}
