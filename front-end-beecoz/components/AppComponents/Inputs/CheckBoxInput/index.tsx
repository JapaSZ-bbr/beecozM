import { useState } from "react";
import CheckBox from "react-native-bouncy-checkbox";

interface AppCheckProps extends React.ComponentProps<typeof CheckBox> {
  onChangeValue: () => void
}

export const AppCheckBox = ({onChangeValue,...rest}: AppCheckProps) => {
  return (
    <CheckBox
      size={18}
      fillColor={"#666"}
      unfillColor={"#666"}
      innerIconStyle={{
        backgroundColor: "transaparent",
        borderRadius: 6,
      }}
      onPress={() => onChangeValue()}
      {...rest}
    />
  );
};
