import styled from "../../../../../styles/styledComponents";

export const Container = styled.View`
    height: 60px;
    width: 100%;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
`

export const InfoInterested = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
`

export const TextInfo = styled.View`
    height: 100%;

    margin-left: 10px;

    justify-content: space-evenly;
`

export const GoToChatButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;

    justify-content: center;
    align-items: center;

    border-radius: 50px;

    background-color: ${({theme}) => theme.colors.second};
`