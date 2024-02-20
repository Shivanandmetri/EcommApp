import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import ProductDetails from "../components/ProductDetails";
import "../App.css";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index={true} element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
