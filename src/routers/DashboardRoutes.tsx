import { Route, Routes } from "react-router-dom";
import { DcScreen } from "../components/DcScreen/DcScreen";
import { MarvelScreen } from "../components/MarvelScreen/MarvelScreen";
import { Navbar } from "../components/Navbar/Navbar";
import { Search } from "../components/Search/Search";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<Search />} />
        <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </>
  );
};
