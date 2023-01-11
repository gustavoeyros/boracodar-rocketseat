import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px;

  gap: 28.81px;
  width: 357.71px;
  height: 199.26px;
  background: #2a2141;
  border-radius: 9.60297px;

  @media (max-width: 767px) {
    width: 300px;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  gap: 28.81px;
  & img {
    width: 84.03px;
    height: 84.03px;
  }
`;
