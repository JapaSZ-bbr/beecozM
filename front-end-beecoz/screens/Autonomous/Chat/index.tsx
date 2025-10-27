import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import Icon from "react-native-vector-icons/AntDesign";
import { Container, Flat, Input, InputContainer } from "./styles";
import { ChatCard } from "./components/ChatCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ClientStackParamsList } from "../../../navigation/Stack/Client/ClientStackTabNavigation";
import { useState, useEffect, useContext } from "react";
import { getAllOpenedChats } from "../../../services/firebase";
import { AuthContext, IAuthContext } from "../../../contexts/Auth/AuthContext";

export type ChatType = NativeStackScreenProps<ClientStackParamsList>;

export const ChatScreen = ({ navigation }: ChatType) => {
  const {user} = useContext(AuthContext) as IAuthContext
  const [chat, setChat] = useState<Array<{id: string, title: string, with: string, avatar: string, chatId: string,interestId: string}>>([]);

  useEffect(() => {
    const fetch = async () => {
      console.log('alo')

      getAllOpenedChats(String(user?.login), setChat)
    }

    fetch()
  }, []);

  const theme = useTheme();
  return (
    <Container>
      <InputContainer>
        <Input placeholder="Digite o nome da pessoa..." />
        <TouchableOpacity>
          <Icon
            style={{ color: theme.colors.white, fontSize: 20 }}
            name="search1"
          />
        </TouchableOpacity>
      </InputContainer>
      <Flat
        data={chat}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ChatCard data={item} navigation={navigation} />
        )}
      />
    </Container>
  );
};
