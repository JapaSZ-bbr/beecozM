import styled from "../../../../styles/styledComponents";

interface ButtonProps {
    disabled: boolean
    special: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props) => props.disabled ? 'blue' : props.theme.colors.yellow_p};
    background-color: ${(props) => props.special ? props.theme.colors.second : props.theme.colors.yellow_p};
    width: 90%;
    height: 60px;
    border-radius: 10px;
    justify-content: center;
    align-content: center;
    border: ${(props) => props.disabled ? '1px #aaa solid' : ''};
    border: ${(props) => props.special ? `1px ${props.theme.colors.yellow_p} solid` : ''};
`

export const Text = styled.Text<ButtonProps>`
    color: ${(props) => props.disabled ? '#aaa' : props.theme.colors.second};
    color: ${(props) => props.special ? props.theme.colors.yellow_p : props.theme.colors.second};
    font-size: 16px;
    font-weight: ${(props) => props.disabled ? '200' : '700'};
    text-align: center;
`