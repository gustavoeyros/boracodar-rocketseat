import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: white;
  gap: 9.6px;

  & h1 {
    font-size: 24px;
  }

  & span {
    font-size: 19px;
    font-weight: 400;
    opacity: 0.67;
  }
`;

export const Desc = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;
