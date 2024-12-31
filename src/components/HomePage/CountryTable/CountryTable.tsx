import { THDEAD_NAME } from "./constants"
import { CountryInfo } from "./CountryInfo"

export const CountryTable = () => {
  return (
    <table className="lg:table-fixed table-auto w-full border-collapse">
      <thead className="font-sans font-bold text-secondary-300 text-caption text-left border-b-2 border-secondary-700">
        <tr>
          {
            THDEAD_NAME.map( thdead =>
              <th className="pb-4">{ thdead }</th>
            )
          }
        </tr>
      </thead>
      <tbody className="font-sant text-caption text-secondary-100 font-bold sm:text-body">
        <CountryInfo />
      </tbody>
    </table>
  )
}
