import React, { useContext, useEffect, useState } from "react";
import { Container, Content, Flat } from "./styles";
import { AutonomousPostCard } from "../../components/AutonomousPostCard/";
import {
  AutonomousPublicationContext,
  IAutonomousPublicationContext,
} from "../../../../../contexts/Autonomous/Publication/AutonomousPublicationContext";
import { privateApi } from "../../../../../services/privateApi";
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";
import * as SecureStore from "expo-secure-store";
import { Text, View, ActivityIndicator } from "react-native";
import { theme } from "../../../../../styles/theme";

export const ProgressPosts = () => {
  const { publications, setPublications } = useContext(
    AutonomousPublicationContext
  ) as IAutonomousPublicationContext;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const { data } = await privateApi.get<IAutonomousPost[]>(
        "/autonomous/publications",
        {
          headers: {
            authorization: (await SecureStore.getItemAsync("token")) as string,
          },
        }
      );

      setPublications(data);
      setIsLoading(false);

      requestPosts()
    }, 1000);
  }, []);

  const requestPosts = () => {
    setInterval(async () => {
      const { data } = await privateApi.get<IAutonomousPost[]>(
        "/autonomous/publications",
        {
          headers: {
            authorization: (await SecureStore.getItemAsync("token")) as string,
          },
        }
      );

      setPublications(data);
    }, 20000);
  };

  return (
    <Container>
      <Content>
        {isLoading ? (
          <View style={{ marginTop: 300 }}>
            <ActivityIndicator size="large" color={theme.colors.yellow_p} />
          </View>
        ) : (
          <>
            <Flat
              data={publications}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <AutonomousPostCard data={item} />}
            />
          </>
        )}
      </Content>
    </Container>
  );
};
