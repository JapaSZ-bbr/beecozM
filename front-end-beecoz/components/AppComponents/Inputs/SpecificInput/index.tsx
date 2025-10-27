import React, { FunctionComponent, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { setKeyboardType } from "../../../../utils/setKeyboardType";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInputMask, TextInputMaskTypeProp } from "react-native-masked-text";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  type: "email" | "phone" | "password" | "CPF" | "CNPJ" | "text";
  placeholder: string;
  iconName: string;
  masked: boolean;
  mask?: TextInputMaskTypeProp;
}

export const AppSpecificInput = ({
  type,
  placeholder,
  iconName,
  masked,
  mask,
  ...rest
}: InputProps) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <>
      {!masked ? (
        <View style={styles.inputContainer}>
          {/* <Icon></Icon> */}
          <Icon
            name={iconName}
            size={24}
            style={
              focusInput
                ? { color: "#fff", marginRight: 6 }
                : { color: "#aaa", marginRight: 6 }
            }
          />
          <TextInput
            keyboardType={setKeyboardType(type)}
            placeholder={placeholder}
            placeholderTextColor={focusInput ? "#fff" : "#ccc"}
            onFocus={() => setFocusInput(true)}
            onBlur={() => setFocusInput(false)}
            style={focusInput ? styles.inputFocus : styles.input}
            secureTextEntry={type === "password" ? true : false}
            {...rest}
          />
        </View>
      ) : (
        <View style={styles.inputContainer}>
          {/* <Icon></Icon> */}
          <Icon
            name={iconName}
            size={24}
            style={
              focusInput
                ? { color: "#fff", marginRight: 6 }
                : { color: "#aaa", marginRight: 6 }
            }
          />
          <TextInputMask
            type={mask as TextInputMaskTypeProp}
            keyboardType={setKeyboardType(type)}
            placeholder={placeholder}
            placeholderTextColor={focusInput ? "#fff" : "#ccc"}
            onFocus={() => setFocusInput(true)}
            onBlur={() => setFocusInput(false)}
            style={focusInput ? styles.inputFocus : styles.input}
            secureTextEntry={type === "password" ? true : false}
            {...rest}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#444",
    color: "#aaa",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#aaa",
  },
  inputFocus: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#fff",
  },
});
