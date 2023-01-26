import { BrowserRouter } from "react-router-dom";

import "./assets/styles/base.scss";

import Aos from "aos";
import "aos/dist/aos.css";

import HeaderPromotion from "./components/HeaderPromotion/HeaderPromotion";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import AppRoutes from "./routes";

function App() {
  Aos.init({
    duration: 800,
    once: true,
  });

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPromotion />
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
