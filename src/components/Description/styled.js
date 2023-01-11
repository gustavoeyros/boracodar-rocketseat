import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: white;

  & h1 {
    font-size: 24px;
  }
  & span {
    font-size: 19px;
    font-weight: 400;
    padding-top: 9.6px;
    opacity: 0.67;
  }
`;
