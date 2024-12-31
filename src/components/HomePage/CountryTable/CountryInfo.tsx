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
}

export const CountryInfo = ({ flags, name, population, area, region }: Props) => {
  return (
    <tr>
      <td className="pt-6">
        <img src={ flags?.svg } alt={ name?.common } className="object-cover w-12 h-9 rounded-sm"/>
      </td>
      <td className="pt-6">{ name?.common }</td>
      <td className="pt-6">{ population }</td>
      <td className="pt-6">{ area }</td>
      <td className="pt-6">{ region }</td>
    </tr>
  )
}
