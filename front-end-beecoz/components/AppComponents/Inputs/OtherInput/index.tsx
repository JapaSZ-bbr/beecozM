import {AddPublicationInputText} from './styles'

interface AppOtherInputProps {
    placeholder: string;
    value: string;
    changeValue: (value: string) => void
}

export const AppOtherInput = ({placeholder, changeValue, value, ...rest}: AppOtherInputProps) => {
    return (
        <AddPublicationInputText
            placeholder={placeholder}
            keyboardType="default"
            value={value}
            onChangeText={(text) => changeValue(text)}
            {...rest}
          />
    )
}