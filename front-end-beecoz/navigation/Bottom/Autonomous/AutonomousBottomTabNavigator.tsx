import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

import {
  StackChatNavigator,
  AutonomousStackHomeNavigator,
  StackProfileNavigator,
  StackSettingsNavigator,
} from "../../Stack/Autonomous/AutonomousStackTabNavigation";

import IconIoni from "react-native-vector-icons/Ionicons";
import IconAwesome from "react-native-vector-icons/FontAwesome";

export type AutonomousBottomParamsList = {
  homeBottom: undefined;
  chatBottom: undefined;
  profileBottom: undefined;
  settingsBottom: undefined;
  chatingBottom: undefined;
};

const Tab = createBottomTabNavigator<AutonomousBottomParamsList>();

const getTabBarStyle = (route: any) => {
  const screen = getFocusedRouteNameFromRoute(route);

  if (
    screen === "chating" ||
    screen === 'editProfile' ||
    screen === 'securityProfile' ||
    screen === 'logoutProfile' ||
    screen === 'supportProfile' || 
    screen === 'aboutProfile'
  ) {
    return "none";
  }

  return "flex";
};

export const AutonomousBottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={(route: any) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: getTabBarStyle(route.route),
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: theme.colors.main,
          borderRadius: 15,
          height: 60,
          borderTopColor: "transparent",
        },
      })}
    >
      <Tab.Screen
        name="homeBottom"
        component={AutonomousStackHomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconIoni
                style={{
                  fontSize: 20,
                  color: focused
                    ? theme.colors.yellow_p
                    : theme.colors.gray_100,
                }}
                name="home-sharp"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="chatBottom"
        component={StackChatNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconIoni
                style={{
                  fontSize: 20,
                  color: focused
                    ? theme.colors.yellow_p
                    : theme.colors.gray_100,
                }}
                name="chatbox"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="profileBottom"
        component={StackProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconAwesome
                style={{
                  fontSize: 20,
                  color: focused
                    ? theme.colors.yellow_p
                    : theme.colors.gray_100,
                }}
                name="user"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="settingsBottom"
        component={StackSettingsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconIoni
                style={{
                  fontSize: 20,
                  color: focused
                    ? theme.colors.yellow_p
                    : theme.colors.gray_100,
                }}
                name="settings-sharp"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
