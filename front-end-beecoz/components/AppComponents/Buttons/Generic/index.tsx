import {
  GestureResponderEvent,
} from "react-native";
import { Container, Text } from "./styles";

interface ButtonProps {
  title: string;
  style?: {
    buttonStyle: Object;
    textStyle: Object;
  };
  disabled: boolean;
  onClick?: (event: GestureResponderEvent) => void;
}

export const AppGenericButton = ({
  title,
  style,
  disabled,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      onPress={onClick}
      disabled={disabled}
      {...rest}
    >
      <Text disabled={disabled}>
        {title}
      </Text>
    </Container>
  );
};