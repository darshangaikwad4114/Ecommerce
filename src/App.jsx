import {} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./modules/Home/Home";
import Product from "./modules/Product/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
