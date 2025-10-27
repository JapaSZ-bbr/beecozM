import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "../../../../styles/styledComponents";

interface CheckContainerProps extends React.ComponentProps<typeof TouchableOpacity> {
  isChecked: boolean
}

export const FormContainer = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`

export const FormContent = styled.TouchableOpacity`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
`

export const FormContentText = styled.Text`
  margin-left: 10px;
  
  color: ${({theme}) => theme.colors.white};
`

export const CheckContainer = styled.View<CheckContainerProps>`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props) => props.isChecked ? props.theme.colors.yellow_p : props.theme.colors.main};
  align-items: center;
  justify-content: center;
`

export const Check = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors.yellow_p};
`;
