import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import {
  ClientAuthRegisterContext,
  IClientAuthRegister,
} from "../../../../../contexts/Auth/Register/Client/ClientRegisterAuthContext";
import {TextInputMask} from 'react-native-masked-text'

type ClientRegisterCPFScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerClientCPF"
>;

export const ClientRegisterCPFScreen = ({
  navigation: { navigate },
}: ClientRegisterCPFScreenType) => {
  const { setNewClient } = useContext(
    ClientAuthRegisterContext
  ) as IClientAuthRegister;
  const [cpf, setCpf] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleNavigateToNextStep = () => {
    setNewClient((prev: any) => ({ ...prev, cpf }));

    navigate("insertCLientRGPhoto");
  };
  return (
    <Container>
      <DataContainer>
        <Title>Falta pouco!{"\n"}Informe seu CPF.</Title>
        <AppGeneticInput
          type="CPF"
          placeholder="000.000.000-00"
          masked={true}
          mask={'cpf'}
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
