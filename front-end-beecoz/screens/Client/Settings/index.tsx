import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";
import { OptionsCard } from "./OptionsCard";
import { Container, Content, IconContainer, OptionsContainer } from "./styles";
import IconIo from "react-native-vector-icons/Ionicons";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import { ClientStackParamsList } from "../../../navigation/Stack/Client/ClientStackTabNavigation";

export type SettingsType = NativeStackScreenProps<ClientStackParamsList, "settings">;

export const SettingsScreen = ({ navigation }: SettingsType) => {
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <IconContainer>
          <IconIo
            name="settings-sharp"
            style={{ fontSize: 25, color: theme.colors.yellow_p }}
          />
        </IconContainer>
        <OptionsContainer>
          <OptionsCard
            title="Alterar email"
            IconCard={
              <IconMat
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="email"
              />
            }
          />
          <OptionsCard
            title="Alterar senha"
            IconCard={
              <IconMat
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="security"
              />
            }
          />
          <OptionsCard
            title="Adicionar ou alterar número de celular"
            IconCard={
              <IconMat
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="phone"
              />
            }
          />
          <OptionsCard
            title="Suporte ao cliente"
            IconCard={
              <IconMat
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="help"
              />
            }
          />
        </OptionsContainer>
        
      </Content>
    </Container>
  );
};
