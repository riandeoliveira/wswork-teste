import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Brand } from "./pages/Brand";
import { Footer } from "./components/Footer";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { Car } from "./interfaces";

export const App = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const getCarsData = async (): Promise<void> => {
    try {
      const { data } = await api.get("/");

      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarsData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home carList={cars} />} />
          <Route path="/marcas" element={<Brand carList={cars} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
