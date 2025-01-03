import { Navigate, Route, Routes } from "react-router"
import { CountryPage, HomePage } from "../pages"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="country/:name" element={ <CountryPage /> } />

      <Route path="/*" element={ <Navigate to='/' />} />
    </Routes>
  )
}
