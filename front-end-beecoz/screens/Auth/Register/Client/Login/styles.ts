import styled from "../../../../../styles/styledComponents";

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};

  justify-content: space-between;
`;

export const DataContainer = styled.View`
    width: 90%;

    align-items: center;
`

export const Title = styled.Text`
    font-size: 20px;

    text-align: left;

    margin-top: 40px;

    margin-bottom: 20px;
    
    color: ${({theme}) => theme.colors.white};
`

export const ButtonContainer = styled.View`
    width: 100%;
`

export const CheckContainer = styled.View`
   
`