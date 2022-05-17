import { InputBoxProps } from "../../interfaces";
import * as S from "./styles";

export const InputBox = ({ name, type }: InputBoxProps): JSX.Element => {
  return (
    <S.InputBox>
      <label htmlFor="">{name}</label>
      <input type={type} />
    </S.InputBox>
  );
};
