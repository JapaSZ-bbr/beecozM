import styled from "../../../../styles/styledComponents";

interface ButtonProps {
    disabled: boolean
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props) => props.disabled ? props.theme.colors.background : props.theme.colors.second};
    width: 100%;
    height: 80px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: center;
    align-content: center;
`

export const Text = styled.Text<ButtonProps>`
    color: ${(props) => props.disabled ? props.theme.colors.gray_100 : props.theme.colors.yellow_p};
    font-size: 18px;
    font-weight: 700;
    text-align: center;
`