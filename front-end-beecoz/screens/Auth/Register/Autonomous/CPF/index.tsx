import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import {
  AutonomousAuthRegisterContext,
  IAutonomousAuthRegister,
} from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";

type ClientRegisterCPFScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousCPF"
>;

export const AutonomousRegisterCPFScreen = ({
  navigation: { navigate },
}: ClientRegisterCPFScreenType) => {
  const { setNewAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [cpf, setCpf] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleNavigateToNextStep = () => {
    setNewAutonomous((prev) => ({ ...prev, cpf }));

    navigate("registerAutonomousCNPJ");
  };

  return (
    <Container>
      <DataContainer>
        <Title>Falta pouco!{"\n"}Informe seu CPF.</Title>
        <AppGeneticInput
          type="CPF"
          placeholder="000.000.000-00"
          masked={true}
          mask={"cpf"}
          value={cpf}
          onChangeText={(text) => {
            if (cpf !== "") setDisabled(false);

            setCpf(text);
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
