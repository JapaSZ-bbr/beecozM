import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "../../../../../styles/styledComponents";

export const Container = (styled.TouchableOpacity`
    width: 100%;
    height: 60px;

    padding: 20px;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    background-color: ${({theme}) => theme.colors.main};

    background-color: ${({theme}) => theme.colors.main};
` as unknown) as typeof TouchableOpacity

export const SelectText = styled.Text`
    color: ${({theme}) => theme.colors.gray_100};
    font-size: 16px;
`