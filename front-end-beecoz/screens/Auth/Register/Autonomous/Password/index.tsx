import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { useTheme } from "styled-components";
import {
  AutonomousAuthRegisterContext,
  IAutonomousAuthRegister,
} from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";

type ClientRegisterPasswordScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousPassword"
>;

export const AutonomousRegisterPasswordScreen = ({
  navigation: { navigate },
}: ClientRegisterPasswordScreenType) => {
  const { setNewAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [check, setCheck] = useState(false);
  const theme = useTheme();

  const handleNavigateToNextStep = () => {
    setNewAutonomous((prev: any) => ({ ...prev, password }));

    navigate("registerAutonomousState");
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
          value={password}
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
