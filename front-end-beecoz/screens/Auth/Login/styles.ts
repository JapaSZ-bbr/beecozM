import styled from "../../../styles/styledComponents";
import { theme } from "../../../styles/theme";

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputContainer = styled.View`
  width: 90%;

  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const InputContent = styled.View`
  height: 80px;
  width: 100%;


  justify-content: space-between;
  align-items: center;
`

export const LoginWithNumberContainer = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;

  margin-top: 10px;
  margin-bottom: 20px;
`

export const LoginWithNumberContainer__Text = styled.Text`
  color: ${({theme}) => theme.colors.gray_100};
  font-weight: 100;
  font-size: 12px;
`

export const RadioButtonContainer = styled.View`
  width: 100%;
  height: 50px;

  margin-top: 20px;
  margin-bottom: 20px;
`

export const RadioButtonContainer__Text = styled.Text`
  color: ${({theme}) => theme.colors.gray_100};
  font-size: 10px;

  margin-bottom: 10px;
`

export const MissPasswordContent = styled.View`
  width: 100%;
  height: 40px;

  margin-top: 20px;
  margin-bottom: 40px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const AuthenticationContainer = styled.View`
  width: 90%;

  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
flex-direction: row;

`;

export const AuthButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;

  padding: 10px;

  margin-top: 40px;

  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  border-radius: 5px;

  background-color: ${({theme}) => theme.colors.main};
`

export const RegisterContainer = styled.View`
  width: 90%;

  margin-top: 50px;

  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
