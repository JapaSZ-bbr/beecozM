import { Text, TouchableOpacity, View, Modal } from "react-native";
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
  OpenWorkButtonContainer,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components";
import { useContext, useEffect, useState } from "react";
import {
  getAllMessagesOfCurrentChating,
  sendNewMessage,
} from "../../../../services/firebase";
import {
  AuthContext,
  IAuthContext,
} from "../../../../contexts/Auth/AuthContext";
import MateIcon from "react-native-vector-icons/MaterialIcons";
import { privateApi } from "../../../../services/privateApi";
import * as SecureStore from "expo-secure-store";
import { IPost } from "../../../../interfaces/Post/IPost";
import { ClientPublicationContext, IClientPublicationContext } from "../../../../contexts/Client/Publication/ClientPublicationContext";
import { IWorkContext, Work, WorkContext } from "../../../../contexts/Work/WorkContext";

type ChatingScreenParamsList = {
  Receiver: {
    receiver: {
      id: string;
      title: string;
      with: string;
      avatar: string;
      interestId: string;
    };
    chatId: string;
  };
};

export const ChatingScreen = () => {
  const route = useRoute<RouteProp<ChatingScreenParamsList, "Receiver">>();
  const { user } = useContext(AuthContext) as IAuthContext;
  const {setPublications} = useContext(ClientPublicationContext) as IClientPublicationContext
  const {setWorks} = useContext(WorkContext) as IWorkContext
  const [messages, setMessages] = useState<
    Array<{
      id: string;
      chatId: string;
      userId: string;
      message: string;
      timestamp: string;
      typeUser: "Client" | "Autonomous";
    }>
  >([]);
  const [messageText, setMessageText] = useState("");
  const [isOpenedWork, setIsOpenedWork] = useState(false);
  const [work, setWork] = useState<{
    id: number;
    status: "Progress" | "Open" | "Completed";
    interestId: number;
  } | null>(null);
  const [isModal, setIsModal] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const fetch = async () => {
      getAllMessagesOfCurrentChating(
        route.params.chatId,
        String(user?.id),
        setMessages
      );

      const {
        data: { work },
      } = await privateApi.get<{
        work: {
          id: number;
          status: "Progress" | "Open" | "Completed";
          interestId: number;
        };
      }>(`/work/interest/${route.params.receiver.interestId}`, {
        headers: {
          authorization: (await SecureStore.getItemAsync("token")) as string,
        },
      });

      setWork(work);
    };

    fetch();
  }, []);

  const handleSendNewMessage = async () => {
    await sendNewMessage(
      route.params.chatId,
      String(user?.id),
      messageText,
      "Client"
    );

    clearMessageTextInput();
  };

  const clearMessageTextInput = () => {
    setMessageText("");
  };

  const handleOpenWork = async () => {
    const { data } = await privateApi.post(
      `/work/open/${route.params.receiver.interestId}`,
      {},
      {
        headers: {
          authorization: (await SecureStore.getItemAsync("token")) as string,
        },
      }
    );

    setIsOpenedWork(true);

    setIsModal(false)

    const {
      data: { publications },
    } = await privateApi.get<{ publications: Array<IPost> }>(
      "/publication/read",
      {
        headers: {
          authorization: (await SecureStore.getItemAsync("token")) as string,
        },
      }
    );

    setPublications(publications)

    const { data: {works} } = await privateApi.get<{works: Work[]}>("/work/works", {
      headers: {
        authorization: (await SecureStore.getItemAsync("token")) as string,
      },
    });

    setWorks(works)
  };

  console.log(work);

  return (
    <Container>
      <Modal transparent={true} visible={isModal} animationType="fade">
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "20%",
              backgroundColor: theme.colors.main,
              padding: 20,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              borderRadius: 10,
              position: "relative",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: theme.colors.white,
              }}
            >
              Quer fechar esse trabalho com esse autonomo?
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: theme.colors.second,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setIsModal(false)}
              >
                <Text style={{ fontSize: 16, color: theme.colors.yellow_p }}>
                  Não
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: theme.colors.yellow_p,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={handleOpenWork}
              >
                <Text style={{ fontSize: 16, color: theme.colors.second }}>
                  Sim
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>



      <Content>
        <MessagesContainer>
          {messages.map((message) =>
            message.typeUser === "Client" &&
            message.userId === String(user?.id) ? (
              <SenderMessage>
                <SenderMessageText>{message.message}</SenderMessageText>
              </SenderMessage>
            ) : (
              <ReceiverMessage>
                <ReceiverMessageText>{message.message}</ReceiverMessageText>
              </ReceiverMessage>
            )
          )}
        </MessagesContainer>

        <View
          style={{
            width: "90%",
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <SendMessageContainer>
            <SendMessageInput
              placeholder="Digite..."
              value={messageText}
              onChangeText={(text) => setMessageText(text)}
            />
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
          {!isOpenedWork ||
            (work?.status === "Progress" && (
              <OpenWorkButtonContainer onPress={() => setIsModal(true)}>
                <MateIcon
                  name="work"
                  style={{ fontSize: 20, color: theme.colors.gray_100 }}
                />
              </OpenWorkButtonContainer>
            ))}
          {work === null && (
            <OpenWorkButtonContainer onPress={() => setIsModal(true)}>
              <MateIcon
                name="work"
                style={{ fontSize: 20, color: theme.colors.gray_100 }}
              />
            </OpenWorkButtonContainer>
          )}
        </View>
      </Content>
    </Container>
  );
};
