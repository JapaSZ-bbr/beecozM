import { Text } from "react-native"
import { Container,SelectText } from "./styles"

interface SelecetItem {
    data: {
        name: string;
        code: string;
    },
    onClose: () => void,
    setNameText: (name: string) => void
}

export const SelectItem = ({data, onClose,setNameText}: SelecetItem) => {
    return (
        <Container onPress={() => {
            setNameText(data.name)
            onClose()
        }}>
            <SelectText >{data.name}</SelectText>
        </Container>
    )
}