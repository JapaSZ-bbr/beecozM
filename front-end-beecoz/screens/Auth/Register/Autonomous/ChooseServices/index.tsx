import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { useTheme } from "styled-components";
import { AppJobsList } from "../../../../../components/AppComponents/JobsLIst";
import { AutonomousAuthRegisterContext, IAutonomousAuthRegister } from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";

type ClientRegisterCPFScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousChooseServices"
>;

export const AutonomousRegisterChooseServicesScreen = ({
  navigation: { navigate },
}: ClientRegisterCPFScreenType) => {
  const { setNewAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [serviceTypeValue, setServiceTypeValue] = useState(0);

  const handleNavigateToNextStep = () => {
    setNewAutonomous((prev) => ({ ...prev,  serviceTypeId: String(serviceTypeValue)}));

    navigate("insertAutonomousRGPhoto");
  };

  return (
    <Container>
      <DataContainer>
        <Title>Você está a procura de clientes não é mesmo? Para te ajudar, qual a sua área de atuação?</Title>
        <View style={{width: '100%'}}>
            <AppJobsList getValue={(value) => setServiceTypeValue(value)}/>
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

