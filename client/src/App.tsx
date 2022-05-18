// Arquivo principal do cliente.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Brand } from "./pages/Brand";
import { Footer } from "./components/Footer";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { Car } from "./interfaces";
import { Form } from "./pages/Form";

export const App = () => {
  const [cars, setCars] = useState<Car[]>([]);

  // Chama a API e armazena os dados em um estado.
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
    // Rotas da aplicação.
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home carList={cars} />} />
          <Route path="/marcas" element={<Brand carList={cars} />} />
          <Route path="formulario" element={<Form />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
