import styled from "styled-components";

export const TotalProgress = styled.div`
  background: #757575;

  width: 100%;
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

  ${(props) => (props.gapType === "second" ? "gap: 210px;" : "gap:117px;")}
  font-size: 14.405px;
  opacity: 0.8;

  @media (max-width: 767px) {
    ${(props) => (props.gapType === "second" ? "gap: 150px;" : "gap:117px;")}
  }
`;

export const WrapperProgress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 9.6px;
`;
