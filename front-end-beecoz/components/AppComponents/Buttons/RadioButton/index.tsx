import React, { useState } from "react";
import {
  Check,
  CheckContainer,
  FormContainer,
  FormContent,
  FormContentText,
} from "./styles";

interface AppRadioButtonProps {
  values: Array<{ name: string; value: string }>;
  getValue: (value: string) => void;
}

export const AppRadioButton = ({ values, getValue }: AppRadioButtonProps) => {
  const [isChecked, setIsChecked] = useState<{ value: string } | null>();

  const handleCheck = (currentValue: string) => {
    setIsChecked({ value: currentValue });
    getValue(currentValue);
  };

  return (
    <FormContainer>
      {values.map((value) => (
        <FormContent onPress={() => handleCheck(value.value)}>
          <CheckContainer
            
            isChecked={isChecked?.value === value.value ? true : false}
          >
            {isChecked?.value === value.value ? (
              <Check key={value.value} />
            ) : null}
          </CheckContainer>
          <FormContentText>{value.name}</FormContentText>
        </FormContent>
      ))}
    </FormContainer>
  );
};
