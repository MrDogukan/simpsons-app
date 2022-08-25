import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCharacter from "../pages/AddCharacter";
import Details from "../pages/Details";
import List from "../pages/List";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="details" element={<Details />} />
        <Route path="add" element={<AddCharacter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
