import { CountryDetails, CountryFlag, CountryHeader, CountryStats, NeighbouringCountries } from "../components"
import { WorldRanksLayout } from "../layout/WorldRanksLayout"

export const CountryPage = () => {
  return (
    <WorldRanksLayout>
      <div className="sm:px-12 sm:-mt-16 ">
        <div className="flex flex-col gap-10 bg-secondary-900 sm:rounded-t-lg min-h-screen sm:border-[1px]sm:border-secondary-700 w-2/3 m-auto sm:border-[1px] sm:border-secondary-700">
          <CountryFlag />
          <div className="flex flex-col gap-10">
            <CountryHeader />
            <CountryStats />
          </div>
          <CountryDetails />
          <NeighbouringCountries />
        </div>
      </div>
    </WorldRanksLayout>
  )
}
