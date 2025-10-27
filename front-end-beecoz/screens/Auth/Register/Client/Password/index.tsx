import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Text } from "react-native";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { useTheme } from "styled-components";
import {
  ClientAuthRegisterContext,
  IClientAuthRegister,
} from "../../../../../contexts/Auth/Register/Client/ClientRegisterAuthContext";

type ClientRegisterPasswordScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerClientPassword"
>;

export const ClientRegisterPasswordScreen = ({
  navigation: { navigate },
}: ClientRegisterPasswordScreenType) => {
  const { setNewClient } = useContext(
    ClientAuthRegisterContext
  ) as IClientAuthRegister;
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const theme = useTheme();

  const handleNavigateToNextStep = () => {
    setNewClient((prev: any) => ({ ...prev, password }));

    navigate("registerClientState");
  };

  return (
    <Container>
      <DataContainer>
        <Title>Ok, quase lá! Agora, crie uma senha.</Title>
        <Text
          style={{
            color: theme.colors.white,
            fontWeight: "100",
            width: "100%",
            textAlign: "left",
          }}
        >
          Para sua segurança, crie uma senha com letras maiúsculas, minúsculas,
          símbolos, etc.
        </Text>
        <AppGeneticInput
          type="password"
          placeholder="********"
          masked={false}
          onChangeText={(text) => {
            if (password !== "") setDisabled(false);

            setPassword(text);
          }}
        />
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={disabled}
          title={"Continuar"}
          onClick={handleNavigateToNextStep}
        />
      </ButtonContainer>
    </Container>
  );
};
