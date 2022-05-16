import { WidgetProps } from "../../interfaces";
import * as S from "./styles";

export const Widget: React.FC<WidgetProps> = (props) => {
  return (
    <S.Widget>
      <h1>{props.title}</h1>
      <S.CardsBox>{props.children}</S.CardsBox>
    </S.Widget>
  );
};
