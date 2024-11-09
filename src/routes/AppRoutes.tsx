import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"

export const AppRoutes:FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
