import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Brand } from "./pages/Brand";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { Car } from "./interfaces";
import { Widget } from "./components/Widget";

export const App = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [carBrands, setCarBrands] = useState<string[]>([]);

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
      <>
        {cars.map(
          (car: Car, i: number) =>
            !carBrands.includes(car.marca_nome) &&
            setCarBrands([...carBrands, car.marca_nome])
        )}
        {carBrands.map((carBrand, i) => (
          <Widget key={i} title={carBrand}>
            {cars.map(
              (car: Car, i: number) =>
                car.marca_nome === carBrand && <Card key={i} data={car} />
            )}
          </Widget>
        ))}
        {/* {cars.map((car: Car, i: number) => (
          <Card key={i} data={car} />
        ))} */}
      </>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marcas" element={<Brand />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
