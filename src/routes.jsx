import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { SearchResult } from "./pages/SearchResult/SearchResult";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search/:username" element={<SearchResult />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}