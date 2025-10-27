import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

import {
  StackChatNavigator,
  ClientStackHomeNavigator,
  StackPublicationNavigator,
  StackProfileNavigator,
  StackSettingsNavigator,
} from "../../Stack/Client/ClientStackTabNavigation";

import IconIoni from "react-native-vector-icons/Ionicons";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconAwesome from "react-native-vector-icons/FontAwesome";

export type ClientBottomParamsList = {
  homeBottom: undefined;
  chatBottom: undefined;
  publicationBottom: undefined;
  profileBottom: undefined;
  settingsBottom: undefined;
  chatingBottom: undefined;
};

const Tab = createBottomTabNavigator<ClientBottomParamsList>();

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

export const ClientBottomTabNavigator = () => {
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
        component={ClientStackHomeNavigator}
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
        name="publicationBottom"
        component={StackPublicationNavigator}
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <IconFontisto
                style={{
                  fontSize: 30,
                  color: "#fff",
                  alignSelf: "center",
                }}
                name="plus-a"
              />
            </View>
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                top: -30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 60,
                  backgroundColor: theme.colors.background,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    backgroundColor: theme.colors.yellow_p,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  {props.children}
                </View>
              </View>
            </TouchableOpacity>
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
