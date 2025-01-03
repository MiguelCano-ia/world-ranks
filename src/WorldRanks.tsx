import { CountriesProvider, FiltersProvider } from "./context"
import { AppRouter } from "./router/AppRouter"

export const WorldRanks = () => {
  return (
    <FiltersProvider>
      <CountriesProvider>
        <AppRouter />
      </CountriesProvider>
    </FiltersProvider>
  )
}
