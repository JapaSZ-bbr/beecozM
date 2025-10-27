import { FlatList } from "react-native";
import styled from "../../../styles/styledComponents";

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputContainer = styled.View`
  width: 90%;
  height: 60px;

  margin-top: 20px;
  padding: 20px;

  align-items: center;
  flex-direction: row;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_100,
}))`
  flex: 1;
  color: ${({theme}) => theme.colors.white};
`;

export const Flat = styled.FlatList`
  width: 90%;
  margin-bottom: 80px;
  margin-top: 20px;
` as unknown as typeof FlatList;
