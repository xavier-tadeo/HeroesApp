import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DcScreen } from "../components/DcScreen/DcScreen";
import { Login } from "../components/Login/Login";
import { MarvelScreen } from "../components/MarvelScreen/MarvelScreen";
import { Navbar } from "../components/Navbar/Navbar";
import { Search } from "../components/Search/Search";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MarvelScreen />} />
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
