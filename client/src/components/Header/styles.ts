import styled from "styled-components";
import colors from "../../themes/colors";

export const Header = styled.header`
  background-color: ${colors.primary};
  height: 80px;

  div {
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: space-between;
    margin: auto;
    max-width: 1200px;

    svg {
      fill: ${colors.secondary};
      height: 50px;
      margin: 0 20px;
      width: 50px;
    }

    nav {
      height: inherit;

      ul {
        display: flex;
        flex-direction: row;
        height: inherit;

        li {
          border-bottom: 3px solid transparent;
          margin: 0 20px;

          &:hover {
            border-color: ${colors.secondary};
          }

          a {
            display: flex;
            align-items: center;
            color: ${colors.secondary_lightness};
            height: 80px;

            &:hover {
              color: ${colors.neutral};
            }
          }
        }
      }
    }
  }
`;
