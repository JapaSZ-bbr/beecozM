import React, { useContext, useEffect, useState } from "react";
import { privateApi } from "../../../../../services/privateApi";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";
import * as SecureStore from "expo-secure-store";
import { CompletedPublicationCard } from "../../components/CompletedPublicationCard";
import {
  IWorkContext,
  Work,
  WorkContext,
} from "../../../../../contexts/Work/WorkContext";
import { View } from "react-native";

export const ConcludedPublication = () => {
  const { setWorks, works } = useContext(WorkContext) as IWorkContext;

  useEffect(() => {
    const getAllWorks = async () => {
      const { data } = await privateApi.get<{ works: Work[] }>("/work/works", {
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
        {works.filter((work) => work.status === "Completed").length > 0 ? (
          <>
            <Flat
              data={works.filter((work) => work.status === "Completed")}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <CompletedPublicationCard data={item} />
              )}
            />
          </>
        ) : (
          <View style={{ width: "90%", height: "100%", marginTop: 40 }}>
            <NoPublicationsMessage>
              Não há pedidos concluídos
            </NoPublicationsMessage>
          </View>
        )}
      </Content>
    </Container>
  );
};
