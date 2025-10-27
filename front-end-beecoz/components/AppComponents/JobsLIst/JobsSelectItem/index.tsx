import { Text } from "react-native"
import { Container,SelectText } from "./styles"

interface IJobsSelecetItem {
    data: {
        id: number;
        service: string;
    },
    onClose: () => void,
    setNameText: (name: string) => void
    setValue: (id: number) => void
}

export const JobsSelecetItem = ({data, onClose,setNameText,setValue}: IJobsSelecetItem) => {
    return (
        <Container onPress={() => {
            setNameText(data.service)
            setValue(data.id)
            onClose()
        }}>
            <SelectText >{data.service}</SelectText>
        </Container>
    )
}