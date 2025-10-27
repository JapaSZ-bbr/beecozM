import { Alert, Image, Switch, Text, View } from "react-native";
import { useTheme } from "styled-components";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFontisto from "react-native-vector-icons/Fontisto";
import { AppSpecificButton } from "../../../components/AppComponents/Buttons/SpecificButton";
import { AppSpecificInput } from "../../../components/AppComponents/Inputs/SpecificInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { AuthContext, IAuthContext } from "../../../contexts/Auth/AuthContext";
import { MainStackParams } from "../../../navigation/MainRoutes";
import { AppRadioButton } from "../../../components/AppComponents/Buttons/RadioButton";
import {
  Container,
  AuthenticationContainer,
  InputContainer,
  RegisterContainer,
  InputContent,
  MissPasswordContent,
  AuthButton,
  RadioButtonContainer,
  RadioButtonContainer__Text,
  LoginWithNumberContainer,
  LoginWithNumberContainer__Text,
} from "./styles";
import { AppCheckBox } from "../../../components/AppComponents/Inputs/CheckBoxInput";
import {
  AutonomousAuthRegisterContext,
  IAutonomousAuthRegister,
} from "../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";

export type LoginType = NativeStackScreenProps<
  MainStackParams,
  "mainAuthStack"
>;

export const LoginScreen = ({ navigation }: LoginType) => {
  const { handleLogin } = useContext(AuthContext) as IAuthContext;
  const { newAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [values, setvalues] = useState([
    { name: "Cliente", value: "Client" },
    { name: "Autonomo", value: "Autonomous" },
  ]);
  const [type, setType] = useState("");
  const [numberIsLogin, setNumberIsLogin] = useState(false);
  const [isSwitched, setIsSwitched] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const theme = useTheme();

  console.log(newAutonomous);

  const onLogin = async () => {
    if (login === '' || password === '') {

      return Alert.alert(
        "Error",
        "Campos login e senha devem ser preenchidos",
        [
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ],
        {
          cancelable: true,
        }
      )
    }

    try {
      const response = await handleLogin({ login, password, type });

      
      if (response?.error.message) {
        console.log(response?.error.message);
        
        return Alert.alert(
          "Error",
          response?.error.message,
          [
            {
              text: 'Cancel',
              style: 'cancel'
            }
          ],
          {
            cancelable: true,
          }
        )
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Image
        style={{ height: 183, width: 360 }}
        source={require("../../../assets/logo.png")}
      />
      <InputContainer>
        <InputContent>
          {!numberIsLogin ? (
            <AppSpecificInput
              type="email"
              masked={false}
              iconName="user-circle-o"
              placeholder="Seu Login"
              value={login}
              onChangeText={(text) => setLogin(text)}
            />
          ) : (
            <AppSpecificInput
              type="phone"
              masked={true}
              mask={"cel-phone"}
              iconName="phone"
              placeholder="Seu Login"
              value={login}
              onChangeText={(text) => setLogin(text)}
            />
          )}
        </InputContent>
        <LoginWithNumberContainer>
          <AppCheckBox onChangeValue={() => setNumberIsLogin(!numberIsLogin)} />
          <LoginWithNumberContainer__Text>
            Entrar com número
          </LoginWithNumberContainer__Text>
        </LoginWithNumberContainer>
        <InputContent>
          <AppSpecificInput
            type="password"
            iconName="lock"
            masked={false}
            placeholder="Sua Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </InputContent>
        <RadioButtonContainer>
          <RadioButtonContainer__Text>
            Olá! você esta entrando como:
          </RadioButtonContainer__Text>
          <AppRadioButton
            values={values}
            getValue={(value) => setType(value)}
          />
        </RadioButtonContainer>
        <MissPasswordContent>
          <View
            style={{ width: 140, alignItems: "center", flexDirection: "row" }}
          >
            <Switch
              trackColor={{
                false: theme.colors.main,
                true: theme.colors.yellow_p,
              }}
              thumbColor={isSwitched ? theme.colors.second : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsSwitched(!isSwitched)}
              value={isSwitched}
            />
            <Text style={{ marginLeft: 4, color: theme.colors.white }}>
              Lembre de mim
            </Text>
          </View>
          <View>
            <Text style={{ color: theme.colors.blue_p, fontWeight: "bold" }}>
              Esqueceu a senha?
            </Text>
          </View>
        </MissPasswordContent>
      </InputContainer>
      <AppSpecificButton disabled={false} title={"Entrar"} onClick={onLogin} />
      <RegisterContainer>
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.gray_100,
            fontWeight: "100",
          }}
        >
          Não tem uma conta?{" "}
          <Text
            style={{ color: theme.colors.blue_p, fontWeight: "bold" }}
            onPress={() => navigation.navigate("register")}
          >
            Se cadastre!
          </Text>
        </Text>
      </RegisterContainer>
    </Container>
  );
};
