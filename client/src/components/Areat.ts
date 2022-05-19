import styled from "styled-components";
import colors from "../themes/colors";

export const Widget = styled.section`
  background-color: ${colors.primary_light};
  margin: 100px 0;
  padding: 50px 50px;
  color: ${colors.neutral};
  width: 100%;

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    margin: 20px 0 20px;
  }
`;
