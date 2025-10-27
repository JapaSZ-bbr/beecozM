import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { useTheme } from "styled-components";
import { AppSpecificButton } from "../../../components/AppComponents/Buttons/SpecificButton";
import { AuthStackParams } from "../../../navigation/Auth/AuthStackNavigator";
import { Container, ButtonsContainer, TitleContainer, BackToLoginPageContainer } from "./styles";

export type RegisterType = NativeStackScreenProps<AuthStackParams, 'register'>

export const RegisterScreen = ({navigation: {navigate}}: RegisterType) => {
    const theme = useTheme()
  return (
    <Container>
      <TitleContainer>Bem-vindo á <Text>Beecoz!</Text> Para começar, você se encontra como:</TitleContainer>
      <ButtonsContainer>
        <AppSpecificButton disabled={false} title={'Cliente'} onClick={() => navigate('registerClientName')} special={true}/>
        <AppSpecificButton disabled={false} title={'Prestador de serviços'} onClick={() => navigate('registerAutonomousName')}/>
      </ButtonsContainer>
      <BackToLoginPageContainer>Já tem uma conta? <Text style={{color: theme.colors.blue_p, fontWeight: 'bold'}} onPress={() => navigate('login')}>Faça login!</Text></BackToLoginPageContainer>
    </Container>
  );
};
