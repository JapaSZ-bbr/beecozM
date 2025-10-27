import { useContext, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Container,
  DateText,
  DescriptionContainer,
  DescriptionContainerText,
  JoinInterestContainer,
  RegionText,
  Title,
  TitleContainer,
} from "./styles";
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";
import { useTheme } from "styled-components";
import moment from "moment";
import Icon from "react-native-vector-icons/AntDesign";
import { AutonomousPublicationContext, IAutonomousPublicationContext } from "../../../../../contexts/Autonomous/Publication/AutonomousPublicationContext";
import { AuthContext, IAuthContext } from "../../../../../contexts/Auth/AuthContext";

export const AutonomousPostCard = ({ data }: { data: IAutonomousPost }) => {
  const {joinInterest, interest, exitInterest} = useContext(AutonomousPublicationContext) as IAutonomousPublicationContext
  const {user} = useContext(AuthContext) as IAuthContext
  const [inInterest, setInInterest] = useState(data.interest.find(interest => interest.autonomousId === Number(user?.id)) ? true : false);
  const theme = useTheme();

  const handleEnterOrExitToInterest = () => {
    setInInterest((prev: any) => !prev);

    if (!inInterest) {
      console.log('joinn')

      joinInterest(Number(user?.id), data.id)
    } else {
      console.log('exitt')

      exitInterest(Number(user?.id), data.id, Number(interest?.id))
    }
  };

  console.log(data.data)

  return (
    <Container>
      <TitleContainer>
        <View>
          <Title style={{ fontSize: 26, color: theme.colors.white }}>
            {data.title}
          </Title>
          <RegionText style={{ color: theme.colors.blue_p }}>
            {data.region}
          </RegionText>
        </View>
        <View>
          <DateText>
            {moment(`${data.data}`).format("D[/]MM[/]YY")}
          </DateText>
        </View>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionContainerText>{data.description}</DescriptionContainerText>
      </DescriptionContainer>
      <JoinInterestContainer>
        <TouchableOpacity onPress={handleEnterOrExitToInterest}>
          {inInterest ? (
            <Icon
              name="like1"
              style={{ fontSize: 16, color: theme.colors.white }}
            />
          ) : (
            <Icon
              name="like2"
              style={{ fontSize: 16, color: theme.colors.white }}
            />
          )}
        </TouchableOpacity>
      </JoinInterestContainer>
    </Container>
  );
};
