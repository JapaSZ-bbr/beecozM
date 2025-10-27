import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert, Text, View } from "react-native";
import { useTheme } from "styled-components";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AppCheckBox } from "../../../../../components/AppComponents/Inputs/CheckBoxInput";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import {
  AutonomousAuthRegisterContext,
  IAutonomousAuthRegister,
} from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";
import { IAutonomousRegister } from "../../../../../interfaces/User/Autonomous/IAutonomousRegister";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { api } from "../../../../../services/api";
import { Container, ButtonContainer, DataContainer, Title } from "./styles";

type ClientRegisterLoginType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousLogin"
>;

export const AutonomousRegisterLoginScreen = ({
  navigation: { navigate },
}: ClientRegisterLoginType) => {
  const { setNewAutonomous, newAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [check, setCheck] = useState(false);
  const theme = useTheme();

  const handleNavigateToNextStep = async () => {
    if (isSubmitting) {
      return;
    }

    const rawLogin = check ? cellPhone : email;
    const trimmedLogin = rawLogin.trim();

    if (!trimmedLogin) {
      Alert.alert(
        "Atenção",
        "Informe um e-mail ou número de telefone válido para continuar."
      );
      setDisabled(true);
      return;
    }

    setIsSubmitting(true);
    try {
      await api.post<{ message: string }>("/auth/autonomous/login/exists", {
        login: trimmedLogin,
      });

        setNewAutonomous((prev: any) => ({ ...prev, login: trimmedLogin }));
      navigate("registerAutonomousPassword");
      return;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const serverMessage = (
          error.response?.data as { message?: string } | undefined
        )?.message;

        const alertMessage = serverMessage
          ? serverMessage
          : error.code === "ERR_NETWORK"
          ? "Não foi possível conectar ao servidor. Verifique sua conexão com a internet e tente novamente."
          : "Não foi possível verificar o login informado. Tente novamente em instantes.";

        Alert.alert("Erro", alertMessage, [{ text: "OK", style: "default" }], {
          cancelable: true,
        });
        console.error("Erro ao verificar login do autônomo:", error.message);
        return;
      }

    Alert.alert(
        "Erro",
        "Ocorreu um erro inesperado. Tente novamente em instantes.",
        [{ text: "OK", style: "default" }],
        {
          cancelable: true,
        }
      );
      console.error("Erro inesperado ao verificar login do autônomo:", error);
      return;
    } finally {
      setIsSubmitting(false);
    }
  };
    const handleToggleLoginType = () => {

    setCheck((prevCheck) => {
      const nextCheck = !prevCheck;
      const nextValue = nextCheck ? cellPhone : email;
      setDisabled(nextValue.trim().length === 0);
      return nextCheck;
  
    });
  };

  return (
    <Container>
      <DataContainer>
        <Title>
          Muito bem, {newAutonomous?.name}! Agora, informe seu melhor email, ou se preferir,
          seu número de telefone-celular
        </Title>
        <Text
          style={{
            color: theme.colors.white,
            fontWeight: "100",
            width: "100%",
            textAlign: "left",
          }}
        >
          Lembre-se informe um e-mail ativo e profisssional ou um telefone ativo
        </Text>
        {!check ? (
          <AppGeneticInput
            type="email"
            placeholder="nome@dominio.com"
            masked={false}
            value={email}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              setEmail(text);
              setDisabled(trimmedText.length === 0);
            }}
          />
        ) : (
          <AppGeneticInput
            type="phone"
            placeholder="(00) 00000-0000"
            masked={true}
            mask={"cel-phone"}
            value={cellPhone}
            onChangeText={(text) => {
              const trimmedText = text.trim();
              setCellPhone(text);
              setDisabled(trimmedText.length === 0);
            }}
          />
        )}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <AppCheckBox onChangeValue={handleToggleLoginType} />
          <Text style={{ color: theme.colors.white, fontWeight: "100" }}>
            Registrar com número
          </Text>
        </View>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={disabled || isSubmitting}
          title={"Continuar"}
          onClick={handleNavigateToNextStep}
        />
      </ButtonContainer>
    </Container>
  );
};
