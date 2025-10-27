import styled from "../../../../../styles/styledComponents";

export const Container = styled.View`
  width: 100%;


  margin-bottom: 20px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;


  background-color: ${({ theme }) => theme.colors.main};
`;

export const ResumeView = styled.TouchableOpacity`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;

  flex-direction: row;

  padding: 20px;
`;
