import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import styled from "../../../../styles/styledComponents";

export const Container = (styled.TouchableOpacity`
    width: 100%;
    max-height: 180px;

    border-radius: 10px;
    
    overflow:hidden ;
    
` as unknown) as typeof TouchableOpacity

export const Content = styled.View`
    width: 100%;
    height: 60px;

    padding: 20px;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    background-color: ${({theme}) => theme.colors.main};
`

export const Flat = (styled.FlatList`
    width: 100%;
` as unknown) as FlatList