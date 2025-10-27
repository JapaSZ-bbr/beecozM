import styled from "../../../styles/styledComponents";

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

export const IconContainer = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #5565;

  margin-bottom: 100px;
`;
export const OptionsContainer = styled.View`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;

  overflow: hidden;
`;
