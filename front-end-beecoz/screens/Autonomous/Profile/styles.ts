import styled from "../../../styles/styledComponents";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};

    padding: 40px 20px;
`
export const Profile = styled.View`
    height: 100px;
    width: 100%;

    align-self: center;

    border-radius: 10px;

    padding: 20px;

    flex-direction: row;
    align-items: center;

    background-color: ${({theme}) => theme.colors.main};
`

export const ProfileContent = styled.View`
    flex: 1;
    height: 60px;

    justify-content: space-between;
    
    margin-left: 20px;
`

export const OptionsContainer = styled.View`
    flex: 1;
    justify-content: center;

    margin-bottom: 40px;
    
`

export const OptionsContent = styled.View`
    border-radius: 10px; 
    overflow: hidden;
`