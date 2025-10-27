import { TouchableOpacity } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import {
  Container,
  Content,
  MessagesContainer,
  SendMessageContainer,
  SendMessageIcons,
  SendMessageInput,
  ReceiverMessage,
  SenderMessage,
  SenderMessageText,
  ReceiverMessageText,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { getAllMessagesOfCurrentChating, sendNewMessage } from "../../../../services/firebase";
import { AuthContext, IAuthContext } from "../../../../contexts/Auth/AuthContext";

type ChatingScreenParamsList = {
  Receiver: {
    receiver: {
      id: string;
      title: string;
      with: string;
      avatar: string;
    };
    chatId: string;
  };
};

export const ChatingScreen = () => {
  const route = useRoute<RouteProp<ChatingScreenParamsList, "Receiver">>();
  const { user } = useContext(AuthContext) as IAuthContext;
  const [messages, setMessages] = useState<
    Array<{
      id: string;
      chatId: string;
      userId: string;
      message: string;
      timestamp: string;
      typeUser: 'Client' | 'Autonomous'
    }>
  >([]);
  const [messageText, setMessageText] = useState('');
  const theme = useTheme();

  useEffect(() => {
    const fetch = async () => {
      getAllMessagesOfCurrentChating(
        route.params.chatId,
        String(user?.id),
        setMessages
      );
    };

    fetch();
  }, []);


  const handleSendNewMessage = async () => {
    await sendNewMessage(route.params.chatId, String(user?.id), messageText, 'Autonomous')

    clearMessageTextInput()
  }

  const clearMessageTextInput = () => {
    setMessageText('')
  }

  return (
    <Container>
      <Content>
        <MessagesContainer>
          {messages.map((message) =>
            message.typeUser === 'Autonomous' && message.userId === String(user?.id) ? (
              <SenderMessage>
                <SenderMessageText>
                  {message.message}
                </SenderMessageText>
              </SenderMessage>
            ) : (
              <ReceiverMessage>
                <ReceiverMessageText>{message.message}</ReceiverMessageText>
              </ReceiverMessage>
            )
          )}
        </MessagesContainer>

        <SendMessageContainer>
          <SendMessageInput placeholder="Digite..." value={messageText} onChangeText={(text) => setMessageText(text)} />
          <SendMessageIcons>
            <TouchableOpacity>
              <Icon
                name="camera"
                style={{ fontSize: 24, color: theme.colors.gray_100 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconAwesome
                name="microphone"
                style={{ fontSize: 24, color: theme.colors.gray_100 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="send"
                style={{ fontSize: 22, color: theme.colors.gray_100 }}
                onPress={handleSendNewMessage}
              />
            </TouchableOpacity>
          </SendMessageIcons>
        </SendMessageContainer>
      </Content>
    </Container>
  );
};
