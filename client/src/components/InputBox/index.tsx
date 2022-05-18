// Caixa de input para o formulário.

import { InputBoxProps } from "../../interfaces";
import * as S from "./styles";

export const InputBox = ({
  name,
  type,
  placeholder,
  onChange,
}: InputBoxProps): JSX.Element => {
  return (
    <S.InputBox>
      <label htmlFor="">{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </S.InputBox>
  );
};
