import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext, IAuthContext } from "../contexts/Auth/AuthContext";
import { AuthStackNavigator, AuthStackParams } from "./Auth/AuthStackNavigator";
import { AutonomousBottomTabNavigator } from "./Bottom/Autonomous/AutonomousBottomTabNavigator";
import {
  ClientBottomParamsList,
  ClientBottomTabNavigator,
} from "./Bottom/Client/ClientBottomTabNavigator";
import { ClientStackParamsList } from "./Stack/Client/ClientStackTabNavigation";

export type MainStackParams = AuthStackParams &
  ClientStackParamsList &
  ClientBottomParamsList & {
    mainBottomStacks: undefined;
    mainStacks: undefined;
    mainAuthStack: undefined;
  };

const Tab = createNativeStackNavigator<MainStackParams>();

export const MainStack = () => {
  const { token, user } = useContext(AuthContext) as IAuthContext;

  console.log('allllllllllllll', String(user?.clientType))

  return (
    <Tab.Navigator
      initialRouteName="mainAuthStack"
      screenOptions={{ headerShown: false }}
    >
      {token ? (
        <>
          {String(user?.clientType) === "Client" ? (
            <Tab.Group>
              <Tab.Screen
                name="mainBottomStacks"
                component={ClientBottomTabNavigator}
              />
            </Tab.Group>
          ) : (
            <Tab.Group>
              <Tab.Screen
                name="mainBottomStacks"
                component={AutonomousBottomTabNavigator}
              />
            </Tab.Group>
          )}
        </>
      ) : (
        <Tab.Group>
          <Tab.Screen name="mainAuthStack" component={AuthStackNavigator} />
        </Tab.Group>
      )}
    </Tab.Navigator>
  );
};
