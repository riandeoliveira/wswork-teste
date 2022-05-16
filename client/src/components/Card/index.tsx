import { CardProps } from "../../interfaces";
import * as S from "./styles";

export const Card = ({ data }: CardProps): JSX.Element => {
  return (
    <S.Card>
      <S.CarHeaderBox>
        <h2>{data.marca_nome}</h2>
        <span>{data.ano}</span>
      </S.CarHeaderBox>
      <h3>{data.nome_modelo}</h3>
      <img src={data.imagem} alt="" />
      <S.CarDataBox>
        <div>
          <span>Cor</span>
          <span>{data.cor}</span>
        </div>
        <div>
          <span>Portas</span>
          <span>{data.num_portas}</span>
        </div>
        <div>
          <span>Combustível</span>
          <span>{data.combustivel}</span>
        </div>
      </S.CarDataBox>
    </S.Card>
  );
};
