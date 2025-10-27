import { Text, View } from "react-native";
import { Container, Content } from "./styles";

export const AboutProfileScreen = () => {
  return (
    <Container>
      <Content>
        <Text style={{fontSize: 30, lineHeight: 32, fontWeight: 'bold', color: '#fff', marginTop: 40}}>
          Nós somos uma empresa nova da qual foi originada em uma equipe de TCC
          (Trabalho de Conclusão de Curso), da Etec Merdelinda Giannini
          Teixeira.
          {"\n"}
          {"\n"}
          A Beecoz busca a igualdade de gênero e de raça para todos,
          uma empresa que promove a inclusão digital e busca promover o direito
          de todos ao trabalho.
        </Text>
      </Content>
    </Container>
  );
};
