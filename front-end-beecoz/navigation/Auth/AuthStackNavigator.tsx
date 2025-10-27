import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useTheme } from "styled-components";
import { LoginScreen } from "../../screens/Auth/Login";
import { RegisterScreen } from "../../screens/Auth/Register";
import { Header } from "../../components/AppComponents/Header";
import { ClientRegisterNameScreen } from "../../screens/Auth/Register/Client/Name";
import { ClientRegisterLoginScreen } from "../../screens/Auth/Register/Client/Login";
import { ClientRegisterPasswordScreen } from "../../screens/Auth/Register/Client/Password";
import { ClientRegisterStateScreen } from "../../screens/Auth/Register/Client/State";
import { ClientRegisterCPFScreen } from "../../screens/Auth/Register/Client/CPF";
import { InsertClientRGPhotoScreen } from "../../screens/Auth/Register/Client/InsertRGPhoto";
import { InsertClientProofPhotoScreen } from "../../screens/Auth/Register/Client/insertProofPhoto";
import { InsertClientPersonalPhotoScreen } from "../../screens/Auth/Register/Client/insertPersonalPhoto";
import { AutonomousRegisterNameScreen } from "../../screens/Auth/Register/Autonomous/Name";
import { AutonomousRegisterLoginScreen } from "../../screens/Auth/Register/Autonomous/Login";
import { AutonomousRegisterPasswordScreen } from "../../screens/Auth/Register/Autonomous/Password";
import { AutonomousRegisterCPFScreen } from "../../screens/Auth/Register/Autonomous/CPF";
import { InsertAutonomousRGPhotoScreen } from "../../screens/Auth/Register/Autonomous/InsertRGPhoto";
import { InsertAutonomousProofPhotoScreen } from "../../screens/Auth/Register/Autonomous/insertProofPhoto";
import { InsertAutonomousPersonalPhotoScreen } from "../../screens/Auth/Register/Autonomous/insertPersonalPhoto";
import { AutonomousRegisterCNPJScreen } from "../../screens/Auth/Register/Autonomous/CNPJ";
import { AutonomousRegisterChooseServicesScreen } from "../../screens/Auth/Register/Autonomous/ChooseServices";
import { AutonomousRegisterStateScreen } from "../../screens/Auth/Register/Autonomous/State";

export type AuthStackParams = {
  login: undefined;

  register: undefined;

  registerClientSex: undefined;
  registerClientName: undefined;
  registerClientLogin: undefined;
  registerClientPassword: undefined;
  registerClientState: undefined;
  registerClientCPF: undefined;

  insertCLientRGPhoto: undefined;
  insertCLientProofPhoto: undefined;
  insertCLientPersonalPhoto: undefined;

  registerAutonomousName: undefined;
  registerAutonomousLogin: undefined;
  registerAutonomousPassword: undefined;
  registerAutonomousState: undefined;
  registerAutonomousCPF: undefined;
  registerAutonomousCNPJ: undefined;
  registerAutonomousChooseServices: undefined;

  insertAutonomousRGPhoto: undefined;
  insertAutonomousProofPhoto: undefined;
  insertAutonomousPersonalPhoto: undefined;
};

const Tab = createNativeStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.main },
      }}
    >
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerTitle: (props) => <Header title="Registro" backable={true} />,
          headerBackVisible: false,
        }}
      />

      <Tab.Group>
        <Tab.Screen
          name="registerClientName"
          component={ClientRegisterNameScreen}
          options={{
            headerTitle: (props) => <Header title="Seu Nome" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerClientSex"
          component={ClientRegisterNameScreen}
          options={{
            headerTitle: (props) => <Header title="Seu Nome" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerClientLogin"
          component={ClientRegisterLoginScreen}
          options={{
            headerTitle: (props) => <Header title="Seu Login" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerClientPassword"
          component={ClientRegisterPasswordScreen}
          options={{
            headerTitle: (props) => <Header title="Sua Senha" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerClientState"
          component={ClientRegisterStateScreen}
          options={{
            headerTitle: (props) => <Header title="Região" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerClientCPF"
          component={ClientRegisterCPFScreen}
          options={{
            headerTitle: (props) => <Header title="Seu CPF" backable={true} />,
            headerBackVisible: false,
          }}
        />

        <Tab.Screen
          name="insertCLientRGPhoto"
          component={InsertClientRGPhotoScreen}
          options={{
            headerTitle: (props) => <Header title="Seu RG" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="insertCLientProofPhoto"
          component={InsertClientProofPhotoScreen}
          options={{
            headerTitle: (props) => <Header title="Comprovante" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="insertCLientPersonalPhoto"
          component={InsertClientPersonalPhotoScreen}
          options={{
          headerTitle: (props) => <Header title="Foto de Perfil" backable={true} />,
          headerBackVisible: false,
        }}
        />
      </Tab.Group>
      <Tab.Group>
        <Tab.Screen
          name="registerAutonomousName"
          component={AutonomousRegisterNameScreen}options={{
            headerTitle: (props) => <Header title="Seu Nome" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerAutonomousLogin"
          component={AutonomousRegisterLoginScreen}
          options={{
            headerTitle: (props) => <Header title="Seu Login" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerAutonomousPassword"
          component={AutonomousRegisterPasswordScreen}
          options={{
            headerTitle: (props) => <Header title="Sua Senha" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerAutonomousCPF"
          component={AutonomousRegisterCPFScreen}
          options={{
          headerTitle: (props) => <Header title="Seu CPF" backable={true} />,
          headerBackVisible: false,
        }}
        />
        <Tab.Screen
          name="registerAutonomousCNPJ"
          component={AutonomousRegisterCNPJScreen}
          options={{
            headerTitle: (props) => <Header title="Seu CNPJ" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerAutonomousState"
          component={AutonomousRegisterStateScreen}
          options={{
            headerTitle: (props) => <Header title="Região" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="registerAutonomousChooseServices"
          component={AutonomousRegisterChooseServicesScreen}
          options={{
          headerTitle: (props) => <Header title="Sua Área de Serviço" backable={true} />,
          headerBackVisible: false,
        }}
        />

        <Tab.Screen
          name="insertAutonomousRGPhoto"
          component={InsertAutonomousRGPhotoScreen}
          options={{
            headerTitle: (props) => <Header title="Seu RG" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="insertAutonomousProofPhoto"
          component={InsertAutonomousProofPhotoScreen}
          options={{
            headerTitle: (props) => <Header title="Comprovante" backable={true} />,
            headerBackVisible: false,
          }}
        />
        <Tab.Screen
          name="insertAutonomousPersonalPhoto"
          component={InsertAutonomousPersonalPhotoScreen}
          options={{
            headerTitle: (props) => <Header title="Foto de Perfil" backable={true} />,
            headerBackVisible: false,
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
