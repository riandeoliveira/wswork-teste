import * as S from "./styles";
import { InputBox } from "../../components/InputBox";
import { useState } from "react";
import { api } from "../../services/api";

export const Form = (): JSX.Element => {
  const [brandName, setBrandName] = useState<string>("");
  const [modelName, setModelName] = useState<string>("");
  const [releaseYear, setReleaseYear] = useState<number>(0);
  const [doorsNumber, setDoorsNumber] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");

  const handleBrandNameChange = (e: any) => setBrandName(e.target.value);
  const handleModelNameChange = (e: any) => setModelName(e.target.value);
  const handleReleaseYearChange = (e: any) => setReleaseYear(e.target.value);
  const handleDoorsNumberChange = (e: any) => setDoorsNumber(e.target.value);
  const handlePriceChange = (e: any) => setPrice(e.target.value);
  const handleColorChange = (e: any) => setColor(e.target.value);
  const handleImageChange = (e: any) => setImage(e.target.value);
  const handleFuelTypeChange = (e: any) => setFuelType(e.target.value);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const newCar = {
      marca_nome: brandName,
      nome_modelo: modelName,
      ano: Number(releaseYear),
      combustivel: fuelType,
      num_portas: Number(doorsNumber),
      valor_fipe: Number(price),
      cor: color,
      imagem: image,
      timestamp_cadastro: new Date().getTime(),
    };

    sendPostRequest(newCar);
  };

  const sendPostRequest = async (postRequest: any) => {
    try {
      await api.post("/", postRequest);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Form onSubmit={handleFormSubmit}>
      <div>
        <div>
          <InputBox
            name="Nome da marca"
            type="text"
            placeholder="FIAT"
            onChange={handleBrandNameChange}
          />
          <InputBox
            name="Nome do modelo"
            type="text"
            placeholder="Toro"
            onChange={handleModelNameChange}
          />
          <InputBox
            name="Ano de lançamento"
            type="number"
            placeholder="2022"
            onChange={handleReleaseYearChange}
          />
          <InputBox
            name="Nº de portas"
            type="number"
            placeholder="4"
            onChange={handleDoorsNumberChange}
          />
        </div>
        <div>
          <InputBox
            name="Preço"
            type="number"
            placeholder="138000"
            onChange={handlePriceChange}
          />
          <InputBox
            name="Cor"
            type="text"
            placeholder="Preto"
            onChange={handleColorChange}
          />
          <InputBox
            name="Imagem"
            type="text"
            placeholder="URL da imagem do veículo"
            onChange={handleImageChange}
          />
          <InputBox
            name="Tipo de Combustível"
            type="text"
            placeholder="Flex"
            onChange={handleFuelTypeChange}
          />
        </div>
      </div>
      <button type="submit">Adicionar novo veículo</button>
    </S.Form>
  );
};
