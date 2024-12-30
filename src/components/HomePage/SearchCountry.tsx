export const SearchCountry = () => {
  return (
    <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-3">
      <p className="font-sans text-secondary-300 text-heading-sm font-semibold">Found 234 countries</p>
      <form className="flex items-center bg-secondary-700 rounded-lg p-2 gap-2">
        <div>
          <img 
            src="../../public/svg/Search.svg" 
            alt="search"
            className="hover:transition-transform duration-200 hover:scale-110 cursor-pointer"  
          />
        </div>
        <input 
          type="text"
          placeholder="Search by Name, Region, Subregion"
          className="bg-inherit text-secondary-100 text-body font-medium font-sans opacity-60 focus:outline-none w-72" 
        />
      </form>
    </div>
  )
}
