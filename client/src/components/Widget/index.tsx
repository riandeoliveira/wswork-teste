// Widget para servir como uma seção de cards de veículos.

import { WidgetProps } from "../../interfaces";
import * as S from "./styles";

export const Widget: React.FC<WidgetProps> = (props) => {
  return (
    <S.Widget>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <S.CardsBox>{props.children}</S.CardsBox>
    </S.Widget>
  );
};
