import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #151515;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    a {
      color: white;

      &:hover {
        color: #0074ba;
      }
    }
  }
`;
