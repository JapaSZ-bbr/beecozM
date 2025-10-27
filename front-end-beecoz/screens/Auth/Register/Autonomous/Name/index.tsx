import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppSelectInput } from "../../../../../components/AppComponents/Inputs/Select";
import {
  AutonomousAuthRegisterContext,
  IAutonomousAuthRegister,
} from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";
import {
  ClientAuthRegisterContext,
  IClientAuthRegister,
} from "../../../../../contexts/Auth/Register/Client/ClientRegisterAuthContext";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { Container, ButtonContainer, DataContainer, Title } from "./styles";

type ClientRegisterNameScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousName"
>;

export const AutonomousRegisterNameScreen = ({
  navigation: { navigate },
}: ClientRegisterNameScreenType) => {
  const { setNewAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState<"Male" | "Female" | undefined>(
    undefined
  );
  const [disabled, setDisabled] = useState(true);

  const DATA = [
    { name: "Masculino", code: "Mas" },
    { name: "Feminino", code: "Fem" },
    { name: "Outro", code: "Outro" },
  ];

  const handleNavigateToNextStep = () => {
    setNewAutonomous((prev: any) => ({ ...prev, name, lastName, gender }));

    navigate("registerAutonomousLogin");
  };

  const getValueGender = (value: string) => {
    if (value === "Masculino") setGender("Male");
    else {
      setGender("Female");
    }
  };

  return (
    <Container>
      <DataContainer>
        <Title>
          Bem-vindo á Beecoz! Para começar, qual seu nome? e gênero?
        </Title>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <AppGeneticInput
            type="text"
            placeholder="Seu nome"
            masked={false}
            value={name}
            onChangeText={(text) => {
              if (name !== "") setDisabled(false);

              setName(text);
            }}
          />
        </View>
        <View style={{ width: "100%", marginBottom: 40 }}>
          <AppGeneticInput
            type="text"
            placeholder="Seu sobrenome"
            masked={false}
            value={lastName}
            onChangeText={(text) => {
              if (lastName !== "") setDisabled(false);

              setLastName(text);
            }}
          />
        </View>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <AppSelectInput
            data={DATA}
            placeholder="Gênero que vocẽ se identifica"
            getValue={(value) => getValueGender(value)}
          />
        </View>
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
