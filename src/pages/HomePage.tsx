import { FilterRegion, FilterStatus, SearchCountry, SortBy } from "../components";
import { WorldRanksLayout } from "../layout/WorldRanksLayout";

export const HomePage = () => {
  return (
    <WorldRanksLayout>
      <SearchCountry />
      <div className="flex flex-grow h-screen gap-10">
        <div className="basis-1/5 bg-secondary-900 flex flex-col gap-10">
          <div className="flex flex-col gap-2 w-full">
            <SortBy />
          </div>
          <div className="flex flex-col gap-3">
            <FilterRegion />
          </div>
          <div className="flex flex-col gap-2">
            <FilterStatus />
          </div>
        </div>
        <div className="basis-4/5 bg-white">
          
        </div>
      </div>
    </WorldRanksLayout>
  )
}
