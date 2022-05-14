import styled from "styled-components";

export const Header = styled.header`
  background-color: #151515;
  height: 80px;

  div {
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: space-between;
    margin: auto;
    max-width: 1200px;

    svg {
      fill: #fe0000;
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
            border-color: #fe0000;
          }

          a {
            display: flex;
            align-items: center;
            color: #6c6c6c;
            height: 80px;

            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
`;
