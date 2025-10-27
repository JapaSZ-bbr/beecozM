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

type ClientRegisterCPFScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousCNPJ"
>;

export const AutonomousRegisterCNPJScreen = ({
  navigation: { navigate },
}: ClientRegisterCPFScreenType) => {
  const { setNewAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [cnpj, setCnpj] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleNavigateToNextStep = () => {
    setNewAutonomous((prev) => ({ ...prev, cnpj }));

    navigate("registerAutonomousChooseServices");
  };

  return (
    <Container>
      <DataContainer>
        <Title>Falta pouco!{"\n"}Informe seu CNPJ.</Title>
        <AppGeneticInput
          type="CPF"
          placeholder="00.000.000/0000-00"
          masked={true}
          mask={"cnpj"}
          value={cnpj}
          onChangeText={(text) => {
            if (cnpj !== "") setDisabled(false);

            setCnpj(text);
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
