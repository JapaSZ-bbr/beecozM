import styled from "../../../../../styles/styledComponents";

interface ContainerProps {
  seeInterested: boolean
}

export const Container = styled.View<ContainerProps>`
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

export const InteresedView = styled.TouchableOpacity`
  width: 100%;
  height: 20px;

  padding: 0px 20px;
`;


export const ListInterested = styled.View`
  width: 100%;

  padding: 20px;
`
