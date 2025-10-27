import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Container, ButtonContainer, DataContainer, Title,PhotoContainer } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export type InsertClientRGPhotoScreenType = NativeStackScreenProps<
  AuthStackParams,
  "insertAutonomousRGPhoto"
>;

export const InsertAutonomousRGPhotoScreen = ({
  navigation: { navigate },
}: InsertClientRGPhotoScreenType) => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const theme = useTheme()
  return (
    <Container>
      <DataContainer>
        <Title>Insira uma foto do seu RG ou CPF, frente e verso, nítida</Title>
        <PhotoContainer onPress={() => setDisabled(false)}>
            <Image style={{width: 90, height: 90}} source={require('../../../../../assets/user.png')}/>
            <Text style={{color: theme.colors.gray_100, fontWeight: '100'}}>Adicione uma foto do seu documento oficial</Text>
        </PhotoContainer>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={disabled}
          title={"Continuar"}
          onClick={() => navigate("insertAutonomousProofPhoto")}
        />
      </ButtonContainer>
    </Container>
  );
};
