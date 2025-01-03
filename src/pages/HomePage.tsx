import { FilterRegion, FilterStatus, SearchResults, SortBy,  } from "../components";
import { WorldRanksLayout } from "../layout/WorldRanksLayout";
import { CountryTable } from "./views";

export const HomePage = () => {
  return (
    <WorldRanksLayout>
      <div className="sm:px-12 sm:-mt-16 ">
        <div className="bg-secondary-900 sm:rounded-t-lg min-h-screen sm:border-[1px] sm:border-secondary-700">
          <div className="p-8 flex flex-col gap-10">
            <SearchResults />
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
              <div className="basis-4/5 bg-secondary-900">
                <CountryTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorldRanksLayout>
  )
}
