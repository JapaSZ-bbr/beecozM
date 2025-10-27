import axios, { AxiosError } from "axios";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IAutonomous } from "../../interfaces/User/Autonomous/IAutonomous";
import * as SecureStore from "expo-secure-store";
import { RegisterAuthProvider } from "./Register/RegisterAuthContext";
import {
  ClientAuthRegisterContext,
  IClientAuthRegister,
} from "./Register/Client/ClientRegisterAuthContext";
import { IClientRegister } from "../../interfaces/User/CLient/IClientRegister";
import { IAutonomousRegister } from "../../interfaces/User/Autonomous/IAutonomousRegister";
import { api } from "../../services/api";
import { privateApi } from "../../services/privateApi";
import { CommonHeaderProperties } from "../../types/axios";
import { IClient } from "../../interfaces/User/CLient/IClient";
import { addUser } from "../../services/firebase";

export interface IAuthContext {
  user: IClient | IAutonomous | null;
  setUser: React.Dispatch<React.SetStateAction<null | IClient | IAutonomous>>;
  handleLogin: ({
    login,
    password,
    type,
  }: {
    login: string;
    password: string;
    type: string;
  }) => Promise<void  | {error: {message: string}}>;
  handleLogout: () => Promise<void>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;

  handleRegisterNewClient: ({
    newClient,
  }: {
    newClient: IClientRegister;
  }) => void;
  handleRegisterNewAutonomous: ({
    newAutonomous,
  }: {
    newAutonomous: IAutonomousRegister | null;
  }) => void;

  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IClient | IAutonomous | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  const handleLogin = async ({
    login,
    password,
    type,
  }: {
    login: string;
    password: string;
    type: string;
  }): Promise<void | {error: {message: string}}> => {
    try {
      const {
        data: { user, token, clientType },
      } = await api.post<{
        user: IClient | IAutonomous;
        token: string;
        clientType: "Client" | "Autonomous";
      }>("/auth/login", {
        login,
        password,
        type,
      });

      console.log("login", user);

      user.clientType = clientType;

      setUser(user);
      setToken(token);

      await SecureStore.setItemAsync("user", JSON.stringify(user));
      await SecureStore.setItemAsync("token", `Bearer ${token}`);

      privateApi.defaults.headers = {
        authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) return {error: error.response?.data as {message: string}};
    }
  };
  const handleLogout = async () => {
    setUser(null);
    setToken(null);

    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");
  };

  useEffect(() => {
    const initializeToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      const user = await SecureStore.getItemAsync("user");

      console.log(token);
      console.log(user);

      setToken(token);
      setUser(JSON.parse(String(user)));
    };
    initializeToken();
  }, []);

  const handleRegisterNewClient = async ({
    newClient,
  }: {
    newClient: IClientRegister;
  }) => {
    try {
      const {
        data: { client, token, clientType },
      } = await api.post<{ client: IClient; token: string, clientType: 'Client' }>(
        "/auth/clients/register",
        {
          name: newClient.name,
          login: newClient.login,
          password: newClient.password,
          lastName: newClient.lastName,
          gender: newClient.gender,
          bornDate: newClient.bornDate,
          cpf: newClient.cpf,
          biography: "",
        }
      );

      addUser({
        login: newClient.login,
        id: client.id,
        avatar: "",
        type: "Client",
        name: newClient.name,
      });

      client.clientType = clientType

      console.log("new client", client.clientType);
      console.log("token", token);

      privateApi.defaults.headers = {
        authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;

      await SecureStore.setItemAsync("user", JSON.stringify(client));
      await SecureStore.setItemAsync("token", `Bearer ${token}`);

      console.log("local token", await SecureStore.getItemAsync("token"));

      console.log("falaaaaaaaaaaaa", user);

      setUser(client);
      setToken(token);

      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      }
    }
  };

  const handleRegisterNewAutonomous = async ({
    newAutonomous,
  }: {
    newAutonomous: IAutonomousRegister | null;
  }) => {
    try {
      const {
        data: { autonomous, token, clientType },
      } = await api.post<{ autonomous: IAutonomous; token: string, clientType: 'Autonomous'}>(
        "/auth/autonomous/register",
        {
          name: newAutonomous?.name,
          login: newAutonomous?.login,
          password: newAutonomous?.password,
          lastName: newAutonomous?.lastName,
          gender: newAutonomous?.gender,
          bornDate: "2005-04-17",
          cpf: newAutonomous?.cpf,
          cnpj: newAutonomous?.cnpj,
          biography: "",
          servTypeId: newAutonomous?.serviceTypeId
        }
      );

      autonomous.clientType = clientType


      addUser({
        login: newAutonomous?.login as string,
        id: autonomous.id,
        avatar: "",
        type: "Autonomous",
        name: newAutonomous?.name as string,
      });

      setUser(autonomous);
      setToken(token);

      console.log("new client", autonomous.clientType);
      console.log("token", token);

      await SecureStore.setItemAsync("user", JSON.stringify(autonomous));
      await SecureStore.setItemAsync("token", `Bearer ${token}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        token,
        setToken,
        handleLogout,
        handleRegisterNewClient,
        handleRegisterNewAutonomous,
        loading,
      }}
    >
      <RegisterAuthProvider>{children}</RegisterAuthProvider>
    </AuthContext.Provider>
  );
};
