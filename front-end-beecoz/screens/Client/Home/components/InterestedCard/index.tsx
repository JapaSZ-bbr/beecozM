import { Text, View, Image } from "react-native";
import { useTheme } from "styled-components";
import { IAutonomous } from "../../../../../interfaces/User/Autonomous/IAutonomous";
import { Container, InfoInterested, TextInfo, GoToChatButton } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { addNewChat } from "../../../../../services/firebase";
import { useContext } from "react";
import {
  AuthContext,
  IAuthContext,
} from "../../../../../contexts/Auth/AuthContext";
import {
  ChatContext,
  IChatContext,
} from "../../../../../contexts/Chat/ChatContext";
import { ClientStackParamsList } from "../../../../../navigation/Stack/Client/ClientStackTabNavigation";
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack'
import {useNavigation} from '@react-navigation/native'


type ClientInterestCardNavigationProps = NativeStackNavigationProp<ClientStackParamsList>;

export const InterestedCard = ({
  data,
}: {
  data: {
    id: number;
    publicationId: number;
    autonomousId: number;
    autonomous: {
      id: number;
      name: string;
      login: string;
      inChat: boolean;
      type: {
        level: string
      }
    };
  };
}) => {
  const { user } = useContext(AuthContext) as IAuthContext;
  const { chatId, setChatId } = useContext(ChatContext) as IChatContext;
  const {navigate} = useNavigation<ClientInterestCardNavigationProps>()
  const theme = useTheme();

  const handleAddChat = async () => {
    if (chatId) {
      return;
    }

    await addNewChat(
      {
        id: String(user?.id),
        login: String(user?.login),
        name: String(user?.name),
        avatar: "",
      },
      {
        id: String(data.autonomous.id),
        login: String(data.autonomous.login),
        name: String(data.autonomous.name),
        avatar: "",
      },
      String(data.id),
      String(data.publicationId),
      setChatId
    );

    data.autonomous.inChat = true;
    

    navigate('chat')
  };


  return (
    <Container>
          <InfoInterested>
            <Image
              style={{ width: 40, height: 40, borderRadius: 50 }}
              resizeMode="contain"
              source={require('../../../../../assets/user.png')}
            />
            <TextInfo>
              <Text style={{ color: theme.colors.white, fontWeight: "bold", fontSize: 18 }}>
                {data.autonomous.name}
              </Text>
              <Text style={{color: theme.colors.gray_100, fontSize: 14}}>{data.autonomous.type.level === 'Beginner' ? 'Autônomo Bee' : 'Autônomo Queen'}</Text>
            </TextInfo>
          </InfoInterested>
          <View>
            <GoToChatButton onPress={handleAddChat}>
              <Icon
                name="message-circle"
                style={{ fontSize: 16, color: theme.colors.white }}
              />
              <Text style={{ color: theme.colors.gray_100, fontSize: 14 }}>
                conversar
              </Text>
            </GoToChatButton>
          </View>
    </Container>
  );
};
