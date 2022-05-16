import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Brand } from "./pages/Brand";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Card />
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
