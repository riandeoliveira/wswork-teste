import * as S from "./styles";
import { InputBox } from "../../components/InputBox";

export const Form = (): JSX.Element => {
  return (
    <S.Form>
      <InputBox name="Nome da marca" type="text" />
      <InputBox name="Nome do modelo" type="text" />
      <InputBox name="Ano de lançamento" type="number" />
      <InputBox name="Nº de portas" type="number" />
      <InputBox name="Preço" type="number" />
      <InputBox name="Cor" type="text" />
      <InputBox name="Imagem" type="text" />
      <div>
        <label htmlFor="">Tipo de combustível</label>
        <select name="" id="">
          <option value="">Flex</option>
          <option value="">Gasolina</option>
          <option value="">Álcool</option>
        </select>
      </div>
      <button type="submit">Adicionar novo veículo</button>
    </S.Form>
  );
};
