import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { AppTextArea } from "../../../components/AppComponents/Inputs/TextAreaInput";
import { AppJobsList } from "../../../components/AppComponents/JobsLIst";
import {
  Container,
  Content,
  AddImageContainer,
  AddImageContent,
  AddPublicationInputText,
  DateTimePickerContainer,
  DateContainer
} from "./styles";
import { AppGenericButton } from "../../../components/AppComponents/Buttons/Generic";
import DateTimePicker from "@react-native-community/datetimepicker";
import {useTheme} from 'styled-components'
import moment from "moment";
import { AppSelectInput } from "../../../components/AppComponents/Inputs/Select";
import { ClientStackParamsList } from "../../../navigation/Stack/Client/ClientStackTabNavigation";
import { IClientPublicationContext, ClientPublicationContext } from "../../../contexts/Client/Publication/ClientPublicationContext";

export type PublicationType = NativeStackScreenProps<
  ClientStackParamsList,
  "publication"
>;

export const PublicationScreen = ({ navigation }: PublicationType) => {
  const { setPublications, onAddPublication } = useContext(
    ClientPublicationContext
  ) as IClientPublicationContext;
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [serviceTypeValue, setServiceTypeValue] = useState(0);
  const [dateText, setDateText] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [localText, setLocalText] = useState('');
  const theme = useTheme()
  const DATA = [
    { name: "São Paulo", code: "1" },
    { name: "Arujá", code: "2" },
    { name: "Barueri", code: "3" },
    { name: "Biritiba Mirim", code: "4" },
    { name: "Caieiras", code: "5" },
    { name: "Cajamar", code: "6" },
    { name: "Carapicuíba", code: "7" },
    { name: "Cotia", code: "8" },
    { name: "Diadema", code: "9" },
    { name: "Embu", code: "10" },
    { name: "Embu-Guaçu", code: "11" },
    { name: "Ferraz de Vasconcelos", code: "12" },
    { name: "Francisco Morato", code: "13" },
    { name: "Franco da Rocha", code: "14" },
    { name: "Guararema", code: "15" },
    { name: "Guarulhos", code: "16" },
    { name: "Itapecerica da Serra", code: "40" },
    { name: "Itapevi", code: "17" },
    { name: "Itaquaquecetuba", code: "18" },
    { name: "Jandira", code: "19" },
    { name: "Juquitiba", code: "20" },
    { name: "Mairiporã", code: "21" },
    { name: "Osasco", code: "22" },
    { name: "Pirapora do Bom Jesus", code: "23" },
    { name: "Poá", code: "24" },
    { name: "Ribeirão Pires", code: "25" },
    { name: "Rio Grande da Serra", code: "26" },
    { name: "Salesópolis", code: "27" },
    { name: "Santa Isabel", code: "28" },
    { name: "Santana de Parnaíba", code: "29" },
    { name: "Santo André", code: "30" },
    { name: "São Bernardo do Campo", code: "31" },
    { name: "São Caetano do Sul", code: "32" },
    { name: "São Lourenço da Serra Suzano", code: "33" },
    { name: "Suzano", code: "34" },
    { name: "Taboão da Serra", code: "35" },
    { name: "Vargem Grande Paulista", code: "36" },
  ];

    const handleChangeDate = (event: any, date: any) => {
      const selectedDate = date || dateText
      
      setDateText(selectedDate)

      setIsDatePickerOpen(false)
    }

  const handleAddPublication = async () => {
    await onAddPublication({
      title: titleText,
      description: descriptionText,
      servTypeId: String(serviceTypeValue),
      data: String(dateText),
      region: localText
    });

    clearInputs();

    navigateToHome();
  };

  const clearInputs = () => {
    setTitleText("");
    setDescriptionText("");
  };

  const navigateToHome = () => {
    navigation.navigate("home");
  };

  console.log(serviceTypeValue);

  return (
    <Container>
      <Content>
        {/* TITLE */}
        <View style={{ width: "100%" }}>
          <AddPublicationInputText
            placeholder="Título do pedido"
            keyboardType="default"
            value={titleText}
            onChangeText={(text) => setTitleText(text)}
          />
        </View>

        {/* DESC */}
        <View style={{ width: "100%" }}>
          <AppTextArea
            placeholder="Descrição do pedido (opcional)"
            onChange={(text) => setDescriptionText(text)}
          />
        </View>

        {/* DATE */}
        <DateTimePickerContainer onPress={() => setIsDatePickerOpen(true)}>
          <Text style={{color: theme.colors.gray_100, fontSize: 16}}>Previsão de finalização</Text>

          <DateContainer>
            <Text style={{color: theme.colors.yellow_p}}>
              {moment(`${dateText}`).format('D[/]MM[/]YY')}
            </Text>
          </DateContainer>

          {isDatePickerOpen ? (
            <DateTimePicker mode="date" display="default" value={dateText} onChange={handleChangeDate}/>
          ) : (
            <>
            </>
          )}

        </DateTimePickerContainer>

        {/* LOCAL */}
        <View style={{width: "100%"}}>
          <AppSelectInput placeholder="Local do serviço" data={DATA} getValue={(local) => setLocalText(local)}/>
        </View>

        {/* JOBS LIST */}
        <View style={{ width: "100%" }}>
          <AppJobsList
            getValue={(value: number) => setServiceTypeValue(value)}
          />
        </View>

        {/* ADD PHOTOS */}
        <AddImageContainer>
          <AddImageContent>
            <Icon
              style={{ color: theme.colors.white, fontSize: 20 }}
              name="plus-a"
            />
            <Text
              style={{
                color: theme.colors.white,
                alignSelf: "center",
                fontWeight: "100",
                fontSize: 12,
              }}
            >
              Adicionar
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                alignSelf: "center",
                fontWeight: "100",
                fontSize: 12,
              }}
            >
              Imagem
            </Text>
          </AddImageContent>
        </AddImageContainer>
        {/* ... */}
      </Content>

      {/* ADD BUTTON */}
      <AppGenericButton
        disabled={false}
        title="Criar pedido"
        onClick={handleAddPublication}
      />
    </Container>
  );
};
