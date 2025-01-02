export const CountryStats = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="flex items-center bg-secondary-700 px-6 py-2 rounded-xl font-sans font-semibold text-body text-secondary-100 gap-5">
        <div>Population</div>
        <div className="border-r-2 border-secondary-900 h-8"></div>
        <div>1,380,004,385</div>              
      </div>
      <div className="flex items-center gap-5 bg-secondary-700 px-6 py-2 rounded-xl font-sans font-semibold text-body text-secondary-100">
        <div>Area</div>
        <div className="border-r-2 border-secondary-900 h-8"></div>
        <div>2,973,190</div>
      </div>
    </div>
  )
}