import styled from "styled-components";
import colors from "../../themes/colors";

export const Footer = styled.footer`
  background-color: ${colors.primary};
  height: 40px;
  color: ${colors.neutral};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    a {
      color: ${colors.neutral};

      &:hover {
        color: ${colors.tertiary};
      }
    }
  }
`;
