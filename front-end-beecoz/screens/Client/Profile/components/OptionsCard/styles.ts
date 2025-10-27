import styled from "../../../../../styles/styledComponents";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 80px;

    padding: 20px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme}) => theme.colors.main};
`