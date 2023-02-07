import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import TermsPage from "./pages/TermsPage/TermsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products/:product" exact element={<ProductPage />} />
      <Route path="/terms" exact element={<TermsPage />} />
    </Routes>
  );
};

export default AppRoutes;
