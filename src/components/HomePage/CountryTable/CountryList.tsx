
import { CountriesContext, FiltersContext } from "../../../context";
import { CountryInfo } from "./CountryCard";
import { getCountries } from "../../../api";
import { THDEAD_NAME } from "../../../utilities"
import { useContext, useEffect } from "react";

export const CountryTable = () => {

  const { sortOption, regionOption, statusOption } = useContext( FiltersContext );
  const { isLoading, countries, setCountries, setIsLoading } = useContext( CountriesContext );

  const getAllCountries = async () => {
    setIsLoading( false );
    const allCountries = await getCountries( sortOption, regionOption, statusOption );
    setCountries( allCountries );
    setIsLoading( true );
  }

  useEffect( () => {
    getAllCountries();
  }, [ sortOption, regionOption, statusOption ]);
  

  return (
    <table className="lg:table-fixed table-auto w-full border-collapse">
      <thead className="font-sans font-bold text-secondary-300 text-caption text-left border-b-2 border-secondary-700">
        <tr>
          {
            THDEAD_NAME.map( thdead =>
              <th
                key={ thdead } 
                className="pb-4">
                  { thdead }
              </th>
            )
          }
        </tr>
      </thead>
      <tbody className="font-sant text-caption text-secondary-100 font-bold sm:text-body">
        {
          isLoading
            ? countries.map( country => (
              <CountryInfo
                key={ country.name.official }
                { ...country }
              />
            ))
            :
            Array.from({ length: 10 }).map((_, index) => (
              <SkeletonRow key={index} />
            ))
        }
      </tbody>
    </table>
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
      <td className="pt-6">
        <div className="bg-secondary-700 w-32 h-3 rounded-full" />
      </td>
    </tr>
  );
};

