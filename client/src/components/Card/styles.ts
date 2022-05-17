import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  color: #6c6c6c;
  background-color: #151515;
  height: 400px;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;

  h3 {
    font-size: 32px;
    color: white;
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: contain;
  }
`;

export const CarHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 16px;
  }
`;

export const CarDataBox = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  h4 {
    color: white;
    text-align: center;
    font-size: 20px;
  }
`;
