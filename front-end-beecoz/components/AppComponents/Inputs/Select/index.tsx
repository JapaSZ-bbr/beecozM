import React, { useState } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useTheme } from "styled-components";
import { SelectItem } from "./SelectItem";
import { Container, Content, Flat } from "./styls";

interface AppSelectInputProps {
  data: Array<{ name: string; code: string }>;
  placeholder: string;
  getValue: (value: string) => void
}

export const AppSelectInput = ({ data, placeholder, getValue }: AppSelectInputProps) => {
  const [nameText, setNameText] = useState('');
  const [opened, setOpened] = useState(false);
  const theme = useTheme();

  return (
    <Container onPress={() => setOpened(!opened)}>
      {!opened ? (
        <Content>
          <Text
            style={{
              color: theme.colors.gray_100,
              fontSize: 16,
            }}
          >
            {!nameText ? placeholder : nameText}
          </Text>
          <Icon
            name="chevron-thin-down"
            style={{
              color: theme.colors.gray_100,
              fontSize: 14,
              fontWeight: "100",
            }}
          />
        </Content>
      ) : (
        <>
          <Content>
            <Text
              style={{
                color: theme.colors.gray_100,
                fontSize: 16,
              }}
            >
              {placeholder}
            </Text>
            <Icon
              name="chevron-thin-down"
              style={{
                color: theme.colors.gray_100,
                fontSize: 14,
                fontWeight: "100",
              }}
            />
          </Content>
          <Flat
            data={data}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => <SelectItem data={item} onClose={() => setOpened(false)} setNameText={(name: string) => {
              setNameText(name)
              getValue(name)
            }}/>}
          />
        </>
      )}
    </Container>
  );
};
