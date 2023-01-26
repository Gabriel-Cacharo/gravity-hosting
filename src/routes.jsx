import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products/:product" exact element={<ProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
