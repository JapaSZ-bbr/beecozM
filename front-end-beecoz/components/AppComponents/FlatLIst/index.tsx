import React, { ReactNode } from "react";
import { ListRenderItem, ListRenderItemInfo, Text } from "react-native";
import { List } from "./styles";

export interface AppFlatListProps<T> {
  data: T[];
  render: ListRenderItem<T>;
}

export const AppFlatList = <T extends object>(
  props: AppFlatListProps<T> & { children?: ReactNode }
) => {
  return (
    <List
      data={props.data}
      renderItem={props.render}
      keyExtractor={({ id }) => String(id)}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};