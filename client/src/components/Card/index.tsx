// Componente do card de veículos.

import { CardProps } from "../../interfaces";
import * as S from "./styles";

export const Card = ({ carData }: CardProps): JSX.Element => {
  return (
    <S.Card>
      <S.CarHeaderBox>
        <h2>{carData.marca_nome}</h2>
        <span>{carData.ano}</span>
      </S.CarHeaderBox>
      <h3>{carData.nome_modelo}</h3>
      <img src={carData.imagem} alt="" />
      <S.CarDataBox>
        <div>
          <span>Cor</span>
          <span>{carData.cor}</span>
        </div>
        <div>
          <span>Portas</span>
          <span>{carData.num_portas}</span>
        </div>
        <div>
          <span>Combustível</span>
          <span>{carData.combustivel}</span>
        </div>
        <h4>R$ {carData.valor_fipe}</h4>
      </S.CarDataBox>
    </S.Card>
  );
};
