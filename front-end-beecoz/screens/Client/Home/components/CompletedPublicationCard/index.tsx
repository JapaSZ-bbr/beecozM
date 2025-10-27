import {
  Text,
  View,
  Image,
} from "react-native";
import { Work } from "../../../../../contexts/Work/WorkContext";
import { Container, ResumeView } from "./styles";

export const CompletedPublicationCard = ({
  data,
}: {
  data: Work
}) => {
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
    </Container>
  );
};
