interface Props {
  population: number,
  area: number,
}

export const CountryStats = ({ population, area }: Props) => {
  return (
    <div className="flex justify-center gap-10">
      <div className="flex items-center bg-secondary-700 px-6 py-2 rounded-xl font-sans font-semibold text-body text-secondary-100 gap-5">
        <div>Population</div>
        <div className="border-r-2 border-secondary-900 h-8"></div>
        <div>{ population }</div>              
      </div>
      <div className="flex items-center gap-5 bg-secondary-700 px-6 py-2 rounded-xl font-sans font-semibold text-body text-secondary-100">
        <div>Area</div>
        <div className="border-r-2 border-secondary-900 h-8"></div>
        <div>{ area }</div>
      </div>
    </div>
  )
}
