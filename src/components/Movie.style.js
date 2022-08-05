import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #ffb92a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  color: white;
`;
export const Box = styled.div`
  width: 50%;
  background-color: #201f28;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;

  @media (max-width: 962px) {
    width: 60%;
    height: auto;
  }

  @media (max-width: 745px) {
    width: 90%;
  }
`;
export const Input = styled.input`
  width: 250px;
  height: 33px;
  background-color: inherit;
  border: 2px solid #a0a0a0;
  border-radius: 5px;
  text-indent: 5px;
  outline: none;
  color: white;
  font-size: 15px;
`;

export const Button = styled.button`
  width: 180px;
  height: 38px;
  background-color: #ffb92a;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

export const Infos = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 18px;

  @media (max-width: 745px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 150px;
`;

export const TextsBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: white;

  p {
    font-size: 20px;
  }

  span {
    margin: 5px;
    color: #a0a0a0;
  }
`;

export const Genre = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  button {
    height: 28px;
    background-color: inherit;
    color: white;
    border: 1px solid #a0a0a0;
    margin: 5px;
    border-radius: 4px;
  }
`;

export const PlotCast = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  margin-top: 30px;
  h1 {
    font-size: 20px;
    margin: 0;

    &:nth-child(1n) {
      margin-top: 23px;
    }
  }
  p {
    margin: 0;
    color: #a0a0a0;
  }
`;
