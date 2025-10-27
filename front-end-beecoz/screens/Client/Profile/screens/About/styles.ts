import styled from "../../../../../styles/styledComponents";

export const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;