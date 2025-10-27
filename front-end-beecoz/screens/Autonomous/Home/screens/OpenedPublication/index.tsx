import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import {
  IClientPublicationContext,
  ClientPublicationContext,
} from "../../../../../contexts/Client/Publication/ClientPublicationContext";
import { IWorkContext, WorkContext } from "../../../../../contexts/Work/WorkContext";
import { privateApi } from "../../../../../services/privateApi";
import { PostCard } from "../../components/PostCard";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";
import * as SecureStore from 'expo-secure-store'
import {OpenPublicationCard} from '../../components/AutonomousOpenPublicationCard/index'

export const OpenedPublication = () => {
  const { setWorks, works } = useContext(WorkContext) as IWorkContext;

  useEffect(() => {
    const getAllWorks = async () => {
      const { data } = await privateApi.get("/work/works", {
        headers: {
          authorization: (await SecureStore.getItemAsync("token")) as string,
        },
      });

      setWorks(data.works);
    };

    getAllWorks();
  }, []);

  return (
    <Container>
    <Content>
      {works.filter((work) => work.status === "Progress").length > 0 ? (
        <>
          <Flat
            data={works.filter((work) => work.status === "Progress")}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <OpenPublicationCard data={item} />}
          />
        </>
      ) : (
        <View style={{ width: "90%", height: "100%", marginTop: 40 }}>
          <NoPublicationsMessage>
            Não há pedidos em progresso
          </NoPublicationsMessage>
        </View>
      )}
    </Content>
  </Container>
  );
};
