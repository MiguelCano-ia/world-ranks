import { CountryInfo } from "../../components/HomePage/CountryTable/CountryCard";
import { NotFoundCountry } from "./NotFoundCountry";
import { THDEAD_NAME } from "../../utilities";
import { useCountries } from "../../hooks";
import { useNavigate } from "react-router";

export const CountryTable = () => {

  const { isLoading, lengthCountries, countries, currentPage, setCurrentPage } = useCountries();

  const navigate = useNavigate();

  if ( !isLoading && !lengthCountries ) {
    return <NotFoundCountry />
  }

  const filteredCountries = () => {
    if ( lengthCountries > 8 ) return countries.slice( currentPage, currentPage + 8);
    return countries;
  }

  const prevPage = () => {
    if ( currentPage > 0 ) setCurrentPage( currentPage - 8);
  }

  const nextPage = () => {
    if ( currentPage + 8 < lengthCountries ) setCurrentPage( currentPage + 8);
  }

  const navigateToCountry = ( countryName: string ) => {
    navigate( `/country/${ countryName }` );
  }

  return (
    <>
      <table className="lg:table-fixed table-auto w-full border-collapse">
        <thead className="font-sans font-bold text-secondary-300 text-caption text-left border-b-2 border-secondary-700">
          <tr>
            {
              THDEAD_NAME.map( thdead =>
                <th
                  key={ thdead } 
                  className= {`pb-4  ${ thdead === 'Region' && 'max-sm:hidden' } `}>
                    { thdead }
                </th>
              )
            }
          </tr>
        </thead>
        <tbody className="font-sant text-caption text-secondary-100 font-bold sm:text-body">
          {
            isLoading
              ? 
              Array.from({ length: 10 }).map((_, index) => (
                <SkeletonRow key={ index } />
              )) 
              : 
              filteredCountries()?.map( country => (
                <CountryInfo
                  key={ country.name.common }
                  { ...country }
                  onCountryName={ navigateToCountry }
                />
              ))     
          }
        </tbody>
      </table>
      <div className="flex gap-10 mt-10 justify-center">
        <button type="button" onClick={ prevPage } className="bg-secondary-700 rounded-md" title="Previous Page">
          <img src="../../../public/svg/prev2.svg" alt="Previous" className="p-2 fill-secondary-100"/>
        </button>
        <button type="button" onClick={ nextPage } className="bg-secondary-700 rounded-md" title="Next Page">
          <img src="../../../public/svg/next.svg" alt="Next" className="p-2 fill-secondary-100 transition-transform"/>
        </button>
      </div>
    </>
  )
}

const SkeletonRow = () => {
  return (
    <tr className="animate-pulse">
      <td className="pt-6">
        <div className="bg-secondary-700 w-12 h-9 rounded-sm" />
      </td>
      <td className="pt-6">
        <div className="bg-secondary-700 w-32 h-3 rounded-full" />
      </td>
      <td className="pt-6">
        <div className="bg-secondary-700 w-32 h-3 rounded-full" />
      </td>
      <td className="pt-6">
        <div className="bg-secondary-700 w-32 h-3 rounded-full" />
      </td>
      <td className="pt-6 ">
        <div className="bg-secondary-700 w-32 h-3 rounded-full" />
      </td>
    </tr>
  );
};