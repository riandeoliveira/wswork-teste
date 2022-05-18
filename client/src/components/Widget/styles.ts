import styled from "styled-components";
import colors from "../../themes/colors";

export const Widget = styled.section`
  background-color: ${colors.primary_light};
  margin: 100px 0;
  padding: 20px;
  color: ${colors.neutral};

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
  }
`;

export const CardsBox = styled.div`
  display: flex;
  justify-content: center;
`;
