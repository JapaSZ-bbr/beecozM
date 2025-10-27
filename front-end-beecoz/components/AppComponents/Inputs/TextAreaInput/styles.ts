import styled from "../../../../styles/styledComponents";

export const Container = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.gray_100
}))`
    width: 100%;
    height: 60px;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.main};
    color: #fff;
    border-radius: 10px;
    font-size: 16px;
`