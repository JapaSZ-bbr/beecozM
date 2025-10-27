import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "../../../../styles/styledComponents";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: space-between;


  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;


`;

export const MessagesContainer = styled.View`
  width: 100%;

  padding: 20px;

  flex: 1;
  flex-direction: column;


`;

export const SenderMessage = styled.View`
  max-width: 80%;

  padding: 20px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: row;

  align-self: flex-end;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const SenderMessageText = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;

  line-height: 22px;
`;

export const ReceiverMessage = styled.View`
  max-width: 80%;

  padding: 20px;
  margin-bottom: 5px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: row;

  align-self: flex-start;

  background-color: ${({ theme }) => theme.colors.main};
`;
export const ReceiverMessageText = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;

  line-height: 22px;
`;

export const SendMessageContainer = styled.View`
  flex: 1;
  height: 100%;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.main};
`;
export const SendMessageIcons = styled.View`
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const OpenWorkButtonContainer = (styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;

  background-color: ${({ theme }) => theme.colors.main}
` as unknown) as typeof TouchableOpacity
export const SendMessageInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray_100,
}))`
  flex: 1;

  color: ${({ theme }) => theme.colors.white};

  background-color: transparent;
` as unknown as TextInput;