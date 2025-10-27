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
  special?: boolean;
}

export const AppSpecificButton = ({
  title,
  style,
  disabled,
  onClick,
  special,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      onPress={onClick}
      disabled={disabled}
      special={special}
      {...rest}
    >
      <Text disabled={disabled} special={special}>
        {title}
      </Text>
    </Container>
  );
};
