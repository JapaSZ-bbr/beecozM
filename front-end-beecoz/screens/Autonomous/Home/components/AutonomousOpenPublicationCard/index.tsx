import { useContext, useState } from "react";
import { Text, View, Image, Modal, TouchableOpacity } from "react-native";
import { Container, ResumeView } from "./styles";
import { theme } from "../../../../../styles/theme";
import { AppTextArea } from "../../../../../components/AppComponents/Inputs/TextAreaInput";
import Icon from "react-native-vector-icons/AntDesign";
import { privateApi } from "../../../../../services/privateApi";
import * as SecureStore from "expo-secure-store";
import { IWorkContext, Work, WorkContext } from "../../../../../contexts/Work/WorkContext";

export const OpenPublicationCard = ({
  data,
}: {
  data: Work;
}) => {
  const {setWorks} = useContext(WorkContext) as IWorkContext
  const [isModal, setIsModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");


  return (
    <Container>
      <ResumeView>
        <Image
          source={require("../../../../../assets/user.png")}
          resizeMode={"contain"}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 30,
          }}
        />
        <View
          style={{ width: 200, height: 60, justifyContent: "space-around" }}
        >
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            {data.interest.publication.title}
          </Text>
        </View>
      </ResumeView>
      <View
        style={{
          height: 40,
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            height: "90%",
            width: 100,
            backgroundColor: theme.colors.second,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
          }}
        >
          <Text style={{ color: theme.colors.yellow_p }}>Em progresso</Text>
        </View>
      </View>
    </Container>
  );
};
