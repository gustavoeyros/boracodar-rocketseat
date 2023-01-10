import styled from "styled-components";

export const TotalProgress = styled.div`
  background: #757575;

  width: 189.66px;
  height: 6px;
  border-radius: 9.6px;
`;

export const CurrentProgress = styled.div`
  background: #d9d9d9;
  width: ${(props) => {
    return `${props.value}%`;
  }};
  height: 6px;
  border-radius: 9.6px;
  opacity: 0.8;
`;

export const Timer = styled.div`
  display: flex;
  color: #c4c4cc;
  width: 100%;

  gap: 117px;
  font-size: 14.405px;
  opacity: 0.8;
`;

export const WrapperProgress = styled.div`
  display: flex;
  flex-direction: column;

  gap: 9.6px;
`;
