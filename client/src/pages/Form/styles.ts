import styled from "styled-components";
import colors from "../../themes/colors";

export const Form = styled.form`
  display: flex;
  color: ${colors.neutral};
  margin: 100px 0;
  background-color: ${colors.primary_light};
  flex-direction: column;
  padding: 30px;

  & > div {
    display: flex;
    justify-content: center;

    & > div {
      width: 400px;
    }
  }

  button {
    align-self: center;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;
  }
`;
