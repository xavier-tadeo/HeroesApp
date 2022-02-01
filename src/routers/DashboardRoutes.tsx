import { Route, Routes } from "react-router-dom";
import { DcScreen } from "../components/DcScreen/DcScreen";
import { Hero } from "../components/Hero/Hero";
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
        <Route path="hero/:heroId" element={<Hero />} />
        <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </>
  );
};
