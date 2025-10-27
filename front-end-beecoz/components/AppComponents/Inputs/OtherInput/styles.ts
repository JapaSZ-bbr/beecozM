import styled from "../../../../styles/styledComponents";
import {TextInput} from 'react-native'

export const AddPublicationInputText = (styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.gray_100,
}))`
    width: 100%;
    height: 60px;

    padding: 20px;

    border-radius: 10px;

    font-size: 16px;

    background-color: ${({theme}) => theme.colors.main};

` as unknown) as typeof TextInput