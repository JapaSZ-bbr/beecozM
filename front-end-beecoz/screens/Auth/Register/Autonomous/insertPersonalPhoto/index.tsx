import React, { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import {
  Container,
  ButtonContainer,
  DataContainer,
  Title,
  PhotoContainer,
} from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { useTheme } from "styled-components";
import {
  AuthContext,
  IAuthContext,
} from "../../../../../contexts/Auth/AuthContext";
import {
  AutonomousAuthRegisterContext,
  IAutonomousAuthRegister,
} from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";

export type InsertClientPersonalPhotoScreenType = NativeStackScreenProps<
  AuthStackParams,
  "insertAutonomousPersonalPhoto"
>;

export const InsertAutonomousPersonalPhotoScreen = ({
  navigation: { navigate },
}: InsertClientPersonalPhotoScreenType) => {
  const { handleRegisterNewAutonomous } = useContext(
    AuthContext
  ) as IAuthContext;
  const { newAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [disabled, setDisabled] = useState(true);
  const theme = useTheme();

  const onRegisterNewLogin = async () => {
    await handleRegisterNewAutonomous({ newAutonomous });

    navigate("login");
  };

  return (
    <Container>
      <DataContainer>
        <Title>Insira uma foto sua, atual, nítida</Title>
        <PhotoContainer onPress={() => setDisabled(false)}>
          <Image
            style={{ width: 90, height: 90 }}
            source={require("../../../../../assets/user.png")}
          />
          <Text style={{ color: theme.colors.gray_100, fontWeight: "100" }}>
            Adicione uma foto sua
          </Text>
        </PhotoContainer>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={disabled}
          title={"Continuar"}
          onClick={onRegisterNewLogin}
        />
      </ButtonContainer>
    </Container>
  );
};
