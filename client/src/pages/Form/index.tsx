// Formulário para adicionar um novo veículo.

import * as S from "./styles";
import { InputBox } from "../../components/InputBox";
import { useState } from "react";
import { api } from "../../services/api";

export const Form = (): JSX.Element => {
  // Cada entrada de texto é armazenada em um estado.
  const [brandName, setBrandName] = useState<string>("");
  const [modelName, setModelName] = useState<string>("");
  const [releaseYear, setReleaseYear] = useState<number>(0);
  const [doorsNumber, setDoorsNumber] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");

  // Recebe os dados enviados pelo formulário, monta um objeto com os mesmos e chama uma função passando como argumento o objeto.
  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const newCar = {
      marca_id: 5,
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

  // Envia os dados para o servidor, cadastrando um novo carro no banco de dados.
  const sendPostRequest = async (postRequest: any) => {
    try {
      await api.post("/", postRequest);

      alert("Carro adicionado com sucesso!");
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
            onChange={(e: any) => setBrandName(e.target.value)}
          />
          <InputBox
            name="Nome do modelo"
            type="text"
            placeholder="Toro"
            onChange={(e: any) => setModelName(e.target.value)}
          />
          <InputBox
            name="Ano de lançamento"
            type="number"
            placeholder="2022"
            onChange={(e: any) => setReleaseYear(e.target.value)}
          />
          <InputBox
            name="Nº de portas"
            type="number"
            placeholder="4"
            onChange={(e: any) => setDoorsNumber(e.target.value)}
          />
        </div>
        <div>
          <InputBox
            name="Preço"
            type="number"
            placeholder="138000"
            onChange={(e: any) => setPrice(e.target.value)}
          />
          <InputBox
            name="Cor"
            type="text"
            placeholder="Preto"
            onChange={(e: any) => setColor(e.target.value)}
          />
          <InputBox
            name="Imagem"
            type="text"
            placeholder="URL da imagem do veículo"
            onChange={(e: any) => setImage(e.target.value)}
          />
          <InputBox
            name="Tipo de Combustível"
            type="text"
            placeholder="Flex"
            onChange={(e: any) => setFuelType(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Adicionar novo veículo</button>
    </S.Form>
  );
};
