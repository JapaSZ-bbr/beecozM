import React, { useState } from "react";
import { Container } from "./styles";

interface InputProps {
  placeholder: string;
  onChange: (text: string) => void
}

export const AppTextArea = ({ placeholder, onChange ,...rest }: InputProps) => {
  useState(false);
  return (
    <Container
      multiline={true}
      numberOfLines={4}
      placeholder={placeholder}
      onChangeText={onChange}
      {...rest}
    />
  );
};
