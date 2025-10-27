import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { useTheme } from "styled-components";
import { ButtonContainer, Container, DataContainer, Title, SelectContainer } from "./styles";
import { AppSelectInput } from "../../../../../components/AppComponents/Inputs/Select";
import { AutonomousAuthRegisterContext, IAutonomousAuthRegister } from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";

type ClientRegisterStateScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousState"
>;

export const AutonomousRegisterStateScreen = ({
  navigation: { navigate },
}: ClientRegisterStateScreenType) => {
  const { setNewAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const theme = useTheme();
  const DATA = [
    { name: "São Paulo", code: "1" },
    { name: "Arujá", code: "2" },
    { name: "Barueri", code: "3" },
    { name: "Biritiba Mirim", code: "4" },
    { name: "Caieiras", code: "5" },
    { name: "Cajamar", code: "6" },
    { name: "Carapicuíba", code: "7" },
    { name: "Cotia", code: "8" },
    { name: "Diadema", code: "9" },
    { name: "Embu", code: "10" },
    { name: "Embu-Guaçu", code: "11" },
    { name: "Ferraz de Vasconcelos", code: "12" },
    { name: "Francisco Morato", code: "13" },
    { name: "Franco da Rocha", code: "14" },
    { name: "Guararema", code: "15" },
    { name: "Guarulhos", code: "16" },
    { name: "Itapecerica da Serra", code: "40" },
    { name: "Itapevi", code: "17" },
    { name: "Itaquaquecetuba", code: "18" },
    { name: "Jandira", code: "19" },
    { name: "Juquitiba", code: "20" },
    { name: "Mairiporã", code: "21" },
    { name: "Osasco", code: "22" },
    { name: "Pirapora do Bom Jesus", code: "23" },
    { name: "Poá", code: "24" },
    { name: "Ribeirão Pires", code: "25" },
    { name: "Rio Grande da Serra", code: "26" },
    { name: "Salesópolis", code: "27" },
    { name: "Santa Isabel", code: "28" },
    { name: "Santana de Parnaíba", code: "29" },
    { name: "Santo André", code: "30" },
    { name: "São Bernardo do Campo", code: "31" },
    { name: "São Caetano do Sul", code: "32" },
    { name: "São Lourenço da Serra Suzano", code: "33" },
    { name: "Suzano", code: "34" },
    { name: "Taboão da Serra", code: "35" },
    { name: "Vargem Grande Paulista", code: "36" },
  ];


  const handleNavigateToNextStep = () => {
    setNewAutonomous((prev: any) => ({ ...prev, country, city }));

    navigate("registerAutonomousCPF");
  };

  const getValueCountry = (value: string) => {
    setCountry(value);
  };
  const getValueCity = (value: string) => {
    setCity(value);
  };
  

  return (
    <Container>
      <DataContainer>
        <Title>Agora, informe onde você mora, por gentileza!</Title>
        <View style={{ width: "100%", marginTop: 40 }}>
          
          <SelectContainer>
            <Text
              style={{
                color: theme.colors.white,
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              Sua cidade ou município
            </Text>
            <AppSelectInput
              placeholder="Cidade ou Município"
              data={DATA}
              getValue={(value) => getValueCity(value)}
            />
          </SelectContainer>
        </View>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={false}
          title={"Continuar"}
          onClick={handleNavigateToNextStep}
        />
      </ButtonContainer>
    </Container>
  );
};
