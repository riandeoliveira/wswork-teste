import * as S from "./styles";

export const Widget = (props: any) => {
  return (
    <S.Widget>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.children}
    </S.Widget>
  );
};
