import { Image, Text, View } from "react-native";
import { useTheme } from "styled-components";
import { ChatType } from "../..";
import { Container } from "./styles";

interface ChatCardProps {
    data: {id: string, title: string, with: string, avatar: string, chatId: string, interestId: string},
    navigation: ChatType['navigation']
}

export const ChatCard = ({data, navigation}: ChatCardProps) => {
  const theme = useTheme();

  return (
    <Container onPress={() => navigation.navigate('chating', {receiver: {
      id: data.id,
      avatar: data.avatar,
      title: data.title,
      with: data.with,
      interestId: data.interestId,
    }, chatId: data.chatId})}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 50 }}
        resizeMode="contain"
        source={{ uri: data.avatar }}
      />
      <View
        style={{
          height: "100%",
          marginLeft: 20,
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: theme.colors.white,
            fontWeight: "bold",
          }}
        >
          {data.title}
        </Text>
        <Text style={{color: theme.colors.blue_p, fontSize: 12, fontWeight: '100'}}>Opa, fechado! (estatico)</Text>
      </View>
    </Container>
  );
};
