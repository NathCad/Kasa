import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/root/Root";
import Error404 from "./routes/errors/Error404";
import APropos from "./routes/aPropos/APropos";
import Accueil from "./routes/accueil/Accueil";
import Appartement from "./routes/appartement/Appartement";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Accueil />} />
          <Route path="aPropos" element={<APropos />} />
          <Route path="appartements/:id" element={<Appartement />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
