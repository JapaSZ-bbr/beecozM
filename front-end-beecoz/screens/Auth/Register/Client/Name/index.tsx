import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { View } from "react-native";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppSelectInput } from "../../../../../components/AppComponents/Inputs/Select";
import {
  ClientAuthRegisterContext,
  IClientAuthRegister,
} from "../../../../../contexts/Auth/Register/Client/ClientRegisterAuthContext";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { Container, ButtonContainer, DataContainer, Title } from "./styles";

type ClientRegisterNameScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerClientName"
>;

export const ClientRegisterNameScreen = ({
  navigation: { navigate },
}: ClientRegisterNameScreenType) => {
  const { setNewClient } = useContext(
    ClientAuthRegisterContext
  ) as IClientAuthRegister;
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
    setNewClient((prev: any) => ({ ...prev, name, lastName, gender }));

    navigate("registerClientLogin");
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
        <AppSelectInput
          data={DATA}
          placeholder="Com o oque vc se identifica"
          getValue={(value) => getValueGender(value)}
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
