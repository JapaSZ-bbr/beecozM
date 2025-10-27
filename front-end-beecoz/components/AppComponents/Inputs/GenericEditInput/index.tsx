import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { setKeyboardType } from "../../../../utils/setKeyboardType";
import Icon from 'react-native-vector-icons/Feather'

interface InputProps extends  React.ComponentProps<typeof TextInput>{
  type: "email" | "phone" | "password" | "CPF" | "CNPJ" | 'text';
  placeholder: string;
  handlePress: () => void;
}

export const AppGeneticEditInput = ({ type, placeholder, handlePress,...rest }: InputProps) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <View style={focusInput ? styles.containerInputFocus : styles.container}>

    <TextInput
      keyboardType={setKeyboardType(type)}
      placeholder={placeholder}
      placeholderTextColor={focusInput ? "#fff" : "#ccc"}
      onFocus={() => setFocusInput(true)}
      onBlur={() => setFocusInput(false)}
      style={focusInput ? styles.inputInputFocus : styles.inputStyle}
      {...rest}
      />
      <Icon name="edit-2" style={focusInput ? styles.iconInputFocus : styles.icon} onPress={handlePress}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderBottomWidth: 2,
    borderColor: "#aaa",
    color: "#ccc",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row",
  },
  containerInputFocus: {
    width: "100%",
    height: 70,
    borderBottomWidth: 2,
    borderColor: "#fff",
    color: "#fff",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    color: "#ccc",
    height: "100%",
  },
  inputInputFocus: {
    flex: 1,
    color: "#fff",
    height: "100%",
  },
  icon: {
    fontSize: 16,
    color: "#ccc"
  },
  iconInputFocus: {
    fontSize: 16,
    color: "#fff"
  }
});
