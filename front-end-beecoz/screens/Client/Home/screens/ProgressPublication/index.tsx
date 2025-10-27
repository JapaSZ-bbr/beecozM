import React, { useContext, useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";
import { PostCard } from "../../components/PostCard";
import * as SecureStore from "expo-secure-store";

import {
  IClientPublicationContext,
  ClientPublicationContext,
} from "../../../../../contexts/Client/Publication/ClientPublicationContext";
import { privateApi } from "../../../../../services/privateApi";
import { IPost } from "../../../../../interfaces/Post/IPost";
import { theme } from "../../../../../styles/theme";



export const ProgressPosts = () => {
  const { publications, setPublications } = useContext(
    ClientPublicationContext
  ) as IClientPublicationContext;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const {
        data: { publications },
      } = await privateApi.get<{ publications: Array<IPost> }>(
        "/publication/read",
        {
          headers: {
            authorization: (await SecureStore.getItemAsync("token")) as string,
          },
        }
      );

      setPublications(publications);
      setIsLoading(false);
    }, 2000);
  }, []);



  return (
    <Container>
      <Content>
        {isLoading ? (
          <View style={{marginTop: 300}}>
            <ActivityIndicator size="large" color={theme.colors.yellow_p} />
          </View>
        ) : (
          <>
            {publications.length > 0 ? (
              <Flat
                data={publications.filter(publication => publication.status === 'Progress')}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <PostCard data={item} />}
              />
            ) : (
              <View style={{ width: "90%", height: "100%", marginTop: 40 }}>
                <NoPublicationsMessage>
                  Não há pedidos em andamento
                </NoPublicationsMessage>
              </View>
            )}
          </>
        )}
      </Content>
    </Container>
  );
};
