import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { TextInputMask, TextInputMaskTypeProp } from "react-native-masked-text";
import { setKeyboardType } from "../../../../utils/setKeyboardType";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  type: "email" | "phone" | "password" | "CPF" | "CNPJ" | "text";
  placeholder: string;
  masked: boolean;
  mask?: TextInputMaskTypeProp;
}

export const AppGeneticInput = ({
  type,
  placeholder,
  masked,
  mask,
  ...rest
}: InputProps) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <>
      {!masked ? (
        <TextInput
          keyboardType={setKeyboardType(type)}
          placeholder={placeholder}
          placeholderTextColor={focusInput ? "#fff" : "#ccc"}
          onFocus={() => setFocusInput(true)}
          onBlur={() => setFocusInput(false)}
          style={focusInput ? styles.inputFocusStyle : styles.inputStyle}
          secureTextEntry={type === "password" ? true : false}
          {...rest}
        />
      ) : (
        <TextInputMask 
        type={mask as TextInputMaskTypeProp}
        keyboardType={setKeyboardType(type)}
        placeholder={placeholder}
        placeholderTextColor={focusInput ? "#fff" : "#ccc"}
        onFocus={() => setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
        style={focusInput ? styles.inputFocusStyle : styles.inputStyle}
        {...rest}/>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    height: 60,
    borderBottomWidth: 2,
    borderColor: "#aaa",
    color: "#ccc",
  },
  inputFocusStyle: {
    width: "100%",
    height: 70,
    borderBottomWidth: 2,
    borderColor: "#fff",
    color: "#fff",
  },
});
