import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  color: white;
  margin: 20px;
  background-color: #303030;
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
