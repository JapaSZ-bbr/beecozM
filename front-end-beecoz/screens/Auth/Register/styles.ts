import { FlatList } from "react-native";
import styled from "../../../styles/styledComponents";

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const TitleContainer = styled.Text`
    width: 90%;

    font-size: 20px;

    margin-top: 40px;

    text-align: left;


    color: ${({theme}) => theme.colors.white};
`

export const ButtonsContainer = styled.View`
  width: 100%;
  height: 140px;

  margin-top: 20px;

  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const BackToLoginPageContainer = styled.Text`
    width: 90%;

    font-size: 16px;

    margin-top: 40px;

    color: ${({theme}) => theme.colors.white};
`

