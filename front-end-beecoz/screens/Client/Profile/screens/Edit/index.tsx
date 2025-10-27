import { useContext } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { AppGeneticEditInput } from "../../../../../components/AppComponents/Inputs/GenericEditInput";

import IconFont from "react-native-vector-icons/FontAwesome5";

import { Container, Content, InputsContainer, IconContainer } from "./styles";
import { AuthContext, IAuthContext } from "../../../../../contexts/Auth/AuthContext";

export const EditProfileScreen = () => {
  const { user } = useContext(AuthContext) as IAuthContext;
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <IconContainer
        >
          <IconFont
            style={{ fontSize: 25, color: theme.colors.yellow_p }}
            name="user"
          />
        </IconContainer>
        <InputsContainer>
          <AppGeneticEditInput
            type="email"
            placeholder={user?.name as string}
            handlePress={() => console.log("vazio")}
          />
          <AppGeneticEditInput
            type="email"
            placeholder={user?.lastName as string}
            handlePress={() => console.log("vazio")}
          />
          <AppGeneticEditInput
            type="email"
            placeholder={
              user?.profile.biography
                ? (user?.profile.biography as string)
                : "coloque sua data de nascimento"
            }
            handlePress={() => console.log("vazio")}
          />
          <AppGeneticEditInput
            type="email"
            placeholder={
              user?.profile.biography
                ? (user?.profile.biography as string)
                : "edite uma biografia para vocẽ"
            }
            handlePress={() => console.log("vazio")}
          />
        </InputsContainer>
      </Content>
    </Container>
  );
};
